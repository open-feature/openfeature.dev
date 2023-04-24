---
 slug: creating-a-provider-for-the-go-sdk
 title: Creating a Provider for the go-sdk
 authors: [jamesmilligan]
 date: 2022-09-02
 tags: [golang, blog, tutorial, go-sdk, providers]
 draft: false
---

A [Provider](/specification/sections/providers) is responsible for performing flag evaluation, they can be as simple as an interface for a key value store, or act as an abstraction layer for a more complex evaluation system. Only one `Provider` can be registered at a time, and OpenFeature will no-op if one has not been defined. Before writing your own `Provider`, it is strongly recommended to familiarize yourself with the [OpenFeature spec](/specification/).  
In this tutorial I will demonstrate the steps taken to create a new `Provider` whilst conforming to the OpenFeature spec using a simple flag implementation. The flag evaluation will be handled by a simple JSON evaluator and flag configurations will be stored as environment variables.  

The following section describes how the flag evaluator portion of this project has been constructed, to skip to the `Provider` specific implementations, [click here](/blog/creating-a-provider-for-the-go-sdk#creating-a-compliant-provider).

<!--truncate-->

## Creating the flag evaluator

The core of any flag `Provider` is the evaluation logic used to provide the flag values from the provided metadata (referred to as the [Evaluation Context](/specification/sections/evaluation-context)). For this example I have put together a very simple json evaluator.
Flags are configured using the structs described below, and are stored as environment variables:

```go
type StoredFlag struct {
    DefaultVariant string    `json:"defaultVariant"`
    Variants       []Variant `json:"variant"`
}

type Variant struct {
    Criteria     []Criteria  `json:"criteria"`
    TargetingKey string      `json:"targetingKey"`
    Value        interface{} `json:"value"`
    Name         string      `json:"name"`
}

type Criteria struct {
    Key   string      `json:"key"`
    Value interface{} `json:"value"`
}
```

example JSON:

```json
{
  "defaultVariant": "not-yellow",
  "variants": [
    {
      "name": "yellow-with-key",
      "targetingKey": "user",
      "criteria": [
        {
          "color": "yellow"
        }
      ],
      "value": true
    },
    {
      "name": "yellow",
      "targetingKey": "",
      "criteria": [
        {
          "color": "yellow"
        }
      ],
      "value": true
    },
    {
      "name": "not-yellow",
      "targetingKey": "",
      "criteria": [],
      "value": false
    }
  ]
}
```

Each flag value contains an array of [`Variants`](/specification/glossary#variant), each with their own array of `Criteria`. When a flag request needs to be evaluated, the `Variants` slice is iterated over, if the `FlattenedContext` matches all required `Criteria` for a specific `Variant`, the associated flag value will be returned from the evaluator. If a matching `Variant` is not found the `DefaultVariant` is returned in the response.
The response also includes the the variant name, the reason for the resulting value (such as `ERROR`, `STATIC` or `TARGETING_MATCH`) and any associated error (such as `PARSE_ERROR`).
These values form the type naive `ResolutionDetails` structure, which is then wrapped in a type specific parent for each response type, such as `BoolResolutionDetail`. This will be discussed in the [Creating a Compliant Provider](#creating-a-compliant-provider) section.

```go
import (
    "encoding/json"
    "errors"
    "github.com/open-feature/go-sdk/pkg/openfeature"
    "os"
)

func (f *StoredFlag) Evaluate(evalCtx map[string]interface{}) (string, openfeature.Reason, interface{}, error) {
    var defaultVariant *Variant
    for _, variant := range f.Variants {
        if variant.Name == f.DefaultVariant {
            defaultVariant = &variant
        }
        if variant.TargetingKey != "" && variant.TargetingKey != evalCtx["targetingKey"] {
            continue
        }
        match := true
        for _, criteria := range variant.Criteria {
            val, ok := evalCtx[criteria.Key]
            if !ok || val != criteria.Value {
                match = false
                break
            }
        }
        if match {
            return variant.Name, openfeature.TargetingMatchReason, variant.Value, nil
        }
    }
    if defaultVariant == nil {
        return "", openfeature.ErrorReason, nil, openfeature.NewParseErrorResolutionError("")
    }
    return defaultVariant.Name, openfeature.DefaultReason, defaultVariant.Value, nil
}
```

The above function demonstrates how this basic evaluator will work in this example, of course in other providers these can be far more complex, and the logic does not need to sit within the application.  
This JSON evaluator can then be paired with a simple function for reading and parsing the `StoredFlag` values from environment variables (as seen in the example below), leaving only the integration with the `go-sdk` to go. (and some testing!)

```go
func FetchStoredFlag(key string) (StoredFlag, error) {
    v := StoredFlag{}
    if val := os.Getenv(key); val != "" {
        if err := json.Unmarshal([]byte(val), &v); err != nil {
            return v, openfeature.NewParseErrorResolutionError(err.Error())
        }
        return v, nil
    }
    return v, openfeature.NewFlagNotFoundResolutionError("")
}
```

## Creating a Compliant Provider

### Repository Setup

`Providers` written for the [`go-sdk`](https://github.com/open-feature/go-sdk) are all maintained in the [`go-sdk-contrib`](https://github.com/open-feature/go-sdk-contrib.git) repository, containing both `hooks` and `providers`.  
The following commands can be used to setup the `go-sdk-contrib` repository, they will clone the repository and set up your provider specific go module under `/providers/MY-NEW-PROVIDER-NAME` adding a `go.mod` and `README.md` file. Your module will them be referenced in the top level `go.work` file.

```bash
git clone https://github.com/open-feature/go-sdk-contrib.git
cd go-sdk-contrib
make PROVIDER=MY-NEW-PROVIDER-NAME new-provider
make workspace-init
```

### Creating Your Provider

In order for your feature flag `Provider` to be compatible with the OpenFeature `go-sdk`, it will need to comply with the OpenFeature spec. For the `go-sdk` this means that it will need to fit to the following interface:

```go
type FeatureProvider interface {
    Metadata() Metadata
    BooleanEvaluation(flagKey string, defaultValue bool, evalCtx FlattenedContext) BoolResolutionDetail
    StringEvaluation(flagKey string, defaultValue string, evalCtx FlattenedContext) StringResolutionDetail
    FloatEvaluation(flagKey string, defaultValue float64, evalCtx FlattenedContext) FloatResolutionDetail
    IntEvaluation(flagKey string, defaultValue int64, evalCtx FlattenedContext) IntResolutionDetail
    ObjectEvaluation(flagKey string, defaultValue interface{}, evalCtx FlattenedContext) InterfaceResolutionDetail
    Hooks() []Hook
}
```

| Argument                   | Description                                                                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flagKey`                  | A string key representing the flag configuration used in this evaluation                                                                                                                     |
| `defaultValue`             | The default response to be returned in the case of an error                                                                                                                                  |
| `evalCtx`                  | The underlying type of `FlattenedContext` is `map[string]interface{}`, this provides ambient information for the purposes of flag evaluation. Effectively acting as `metadata` for a request |
| `ProviderResolutionDetail` | The provider response object from a flag evaluation, it contains the following fields: Variant (`string`), Reason (`openfeature.Reason`), ResolutionError (`openfeature.ResolutionError`)    |
| `XxxResolutionDetail`      | The type specific wrapper for the `ProviderResolutionDetail` struct. Contains two attributes: Value (type specific), ProviderResolutionDetail (`ProviderResolutionDetail`)                   |

We can use our previously defined logic to build the `Evaluation` methods with ease, in the below example the core logic has been refactored into a separate function (`resolveFlag()`) to reduce code repetition, returning the `ResolutionDetail` structure directly. This means that the only type specific code required is a type cast the returned `interface{}` value, and for the type specific `ResolutionDetail` to be returned, e.g. `BoolResolutionDetail`.

```go
type Provider struct {
    EnvFetch func(key string) (StoredFlag, error)
}

func (p *Provider) resolveFlag(flagKey string, defaultValue interface{}, evalCtx openfeature.FlattenedContext) openfeature.InterfaceResolutionDetail {
    // fetch the stored flag from environment variables
    res, err := p.EnvFetch(flagKey)
    if err != nil {
        var e openfeature.ResolutionError
        if !errors.As(err, &e) {
            e = openfeature.NewGeneralResolutionError(err.Error())
        }

        return openfeature.InterfaceResolutionDetail{
            Value: defaultValue,
            ProviderResolutionDetail: openfeature.ProviderResolutionDetail{
                ResolutionError: e,
                Reason:          openfeature.ErrorReason,
            },
        }
    }
    // evaluate the stored flag to return the variant, reason, value and error
    variant, reason, value, err := res.Evaluate(evalCtx)
    if err != nil {
        var e openfeature.ResolutionError
        if !errors.As(err, &e) {
            e = openfeature.NewGeneralResolutionError(err.Error())
        }
        return openfeature.InterfaceResolutionDetail{
            Value: defaultValue,
            ProviderResolutionDetail: openfeature.ProviderResolutionDetail{
                ResolutionError: e,
                Reason:          openfeature.ErrorReason,
            },
        }
    }

    // return the type naive ResolutionDetail structure
    return openfeature.InterfaceResolutionDetail{
        Value: value,
        ProviderResolutionDetail: openfeature.ProviderResolutionDetail{
            Variant: variant,
            Reason:  reason,
        },
    }
}

func (p *Provider) BooleanEvaluation(flagKey string, defaultValue bool, evalCtx openfeature.FlattenedContext) openfeature.BoolResolutionDetail {
    res := p.resolveFlag(flagKey, defaultValue, evalCtx)
    // ensure the returned value is a bool
    v, ok := res.Value.(bool)
    if !ok {
        return openfeature.BoolResolutionDetail{
            Value: defaultValue,
            ProviderResolutionDetail: openfeature.ProviderResolutionDetail{
                ResolutionError: openfeature.NewTypeMismatchResolutionError(""),
                Reason:          openfeature.ErrorReason,
            },
        }
    }
    // wrap the ResolutionDetail in a type specific parent
    return openfeature.BoolResolutionDetail{
        Value:                    v,
        ProviderResolutionDetail: res.ProviderResolutionDetail,
    }
}
```

Based upon this `BooleanEvaluation` method, the remaining `Evaluation` methods are simple to populate, leaving only 2 more methods, `Metadata` and `Hooks`.

the `Metadata()` method is very simple to implement, it simply needs to return a [`Metadata` object](/specification/sections/providers#requirement-211), currently this object only requires one field - `Name`

```go
func (p *Provider) Metadata() openfeature.Metadata {
    return openfeature.Metadata{
        Name: "environment-flag-evaluator",
    }
}
```

The `Hooks()` method gives the `go-sdk` access to `Provider` hooks, this sits outside the scope of this tutorial, so for now we will just return an empty slice of hooks. [Link to spec.](/specification/sections/providers#23-provider-hooks)

```go
func (p *Provider) Hooks() []openfeature.Hook {
    return []openfeature.Hook{}
}
```

Now that the `Provider` conforms to the OpenFeature spec, it can be registered to the OpenFeature `go-sdk` and used for flag evaluation.

## Example usage

```go
package main

import (
    "context"
    "encoding/json"
    "fmt"
    "os"

    fromEnv "github.com/open-feature/go-sdk-contrib/providers/from-env/pkg"
    "github.com/open-feature/go-sdk/pkg/openfeature"
)

// init function sets a bool flag environment variable called AM_I_YELLOW
func init() {
    flagDefinition := fromEnv.StoredFlag{
        DefaultVariant: "not-yellow",
        Variants: []fromEnv.Variant{
            {
                Name: "yellow-with-targeting",
                TargetingKey: "user",
                Value:        true,
                Criteria: []fromEnv.Criteria{
                    {
                        Key:   "color",
                        Value: "yellow",
                    },
                },
            },
            {
                Name: "yellow",
                TargetingKey: "",
                Value:        true,
                Criteria: []fromEnv.Criteria{
                    {
                        Key:   "color",
                        Value: "yellow",
                    },
                },
            },
            {
                Name: "not-yellow",
                TargetingKey: "",
                Value:        false,
                Criteria: []fromEnv.Criteria{
                    {
                        Key:   "color",
                        Value: "not yellow",
                    },
                },
            },
        },
    }
    flagM, _ := json.Marshal(flagDefinition)
    os.Setenv("AM_I_YELLOW", string(flagM))
}

func main() {
    // create instance of the new provider
    provider := fromEnv.FromEnvProvider{}
    // register the provider against the go-sdk
    openfeature.SetProvider(&provider)
    // create a client from via the go-sdk
    client := openfeature.NewClient("am-i-yellow-client")

    // we are now able to evaluate our stored flags, providing different FlattenedContexts to manipulate the response
    fmt.Println("I am yellow!")
    boolRes, err := client.BooleanValueDetails(
        context.Background(),
        "AM_I_YELLOW",
        false,
        openfeature.NewEvaluationContext(
            "",
            map[string]interface{}{
                "color": "yellow",
            },
        ),
    )
    printResponse(boolRes.Value, boolRes.ResolutionDetail, err)

    fmt.Println("I am yellow with targeting!")
    boolRes, err = client.BooleanValueDetails(
        context.Background(),
        "AM_I_YELLOW",
        false,
        openfeature.NewEvaluationContext(
            "user",
            map[string]interface{}{
                "color": "yellow",
            },
        ),
    )
    printResponse(boolRes.Value, boolRes.ResolutionDetail, err)

    fmt.Println("I am asking for a string!")
    strRes, err := client.StringValueDetails(
        context.Background(),
        "AM_I_YELLOW",
        "i am a default value",
        openfeature.NewEvaluationContext(
            "",
            map[string]interface{}{
                "color": "not yellow",
            },
        ),
    )
    printResponse(strRes.Value, strRes.ResolutionDetail, err)
}

// simple response printing function
func printResponse(value interface{}, resDetail openfeature.ResolutionDetail, err error) {
    fmt.Printf("value: %v\n", value)
    if err != nil {
        fmt.Printf("error: %v\n", err)
    } else {
        fmt.Printf("variant: %v\n", resDetail.Variant)
        fmt.Printf("reason: %v\n", resDetail.Reason)
    }
    fmt.Println("--------")
}

```

Console output:

```text
I am yellow!
value: true
variant: yellow
reason: TARGETING_MATCH
--------
I am yellow with targeting!
value: true
variant: yellow-with-targeting
reason: TARGETING_MATCH
--------
I am asking for a string!
value: i am a default value
error: evaluate the flag: TYPE_MISMATCH
--------
```

The provider used in this example can be found [here](https://github.com/open-feature/go-sdk-contrib/tree/main/providers/from-env)
