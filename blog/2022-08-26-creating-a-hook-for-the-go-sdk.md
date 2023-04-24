---
slug: creating-a-hook-for-the-go-sdk
title: Creating a Hook for the go-sdk
authors: [skyerus]
date: 2022-08-26
tags: [golang, blog, tutorial, go-sdk, hooks]
unlisted: false
---

A [Hook](/specification/sections/hooks) taps into one or more of the flag evaluation's
lifecycle events (before/after/error/finally) to perform the same action at that point for every evaluation.
In this blog post, we'll look into what it takes to create an OpenFeature hook in Go that verifies that the return value is a valid hex color.

<!--truncate-->

## Objective

<i>Create and integrate a spec compliant hook that validates that the result of a flag evaluation is a hex color.</i>

## Prerequisites

- Golang 1.17+

## Repository setup

`Hooks` written for the [`go-sdk`](https://github.com/open-feature/go-sdk) are all maintained in the
[`go-sdk-contrib`](https://github.com/open-feature/go-sdk-contrib.git) repository, containing both `hooks` and `providers`.
The following commands can be used to setup the `go-sdk-contrib` repository,
this clones the repository and sets up your hook specific go module under `/hooks/MY-NEW-HOOK-NAME`
adding a `go.mod` and `README.md` file. The module will then be referenced in the top level `go.work` file.

```bash
git clone https://github.com/open-feature/go-sdk-contrib.git
cd go-sdk-contrib
make HOOK=MY-NEW-HOOK-NAME new-hook
make workspace-init
```

## Creating the hook

In order for the `Hook` to be compatible with the OpenFeature `go-sdk`, it will need to comply to the OpenFeature spec.
For the `go-sdk` this means that it will need to conform to the following interface:

```go
type Hook interface {
    Before(ctx context.Context, hookContext HookContext, hookHints HookHints) (*EvaluationContext, error)
    After(ctx context.Context, hookContext HookContext, flagEvaluationDetails InterfaceEvaluationDetails, hookHints HookHints) error
    Error(ctx context.Context, hookContext HookContext, err error, hookHints HookHints)
    Finally(ctx context.Context, hookContext HookContext, hookHints HookHints)
}
```

In order to avoid implementing all the required functions to conform to the interface, embed the `of.UnimplementedHook` struct in the Hook struct.
Then define the `After` lifecycle event, overriding `of.UnimplementedHook`'s null implementation.

```go
// Hook validates the flag evaluation details After flag resolution
type Hook struct {
    of.UnimplementedHook
    Validator validator
}

func (h Hook) After(ctx context.Context, hookContext of.HookContext, flagEvaluationDetails of.InterfaceEvaluationDetails, hookHints of.HookHints) error {
    err := h.Validator.IsValid(flagEvaluationDetails)
    if err != nil {
        return err
    }

    return nil
}
```

Notice the `Validator` field of type `validator` in the `Hook` struct. This is defined as such:

```go
type validator interface {
    IsValid(flagEvaluationDetails of.InterfaceEvaluationDetails) error
}
```

This allows us to supply <i>any</i> validator that implements this function signature, you can either create your own validator
or use one of the [existing validators](https://github.com/open-feature/go-sdk-contrib/hooks/validator).
This tutorial uses the existing [hex regex validator](https://github.com/open-feature/go-sdk-contrib/hooks/validator/pkg/regex/hex.go).

## Integrating the hook

1. Install dependencies

   ```shell
   go get github.com/open-feature/go-sdk
   go get github.com/open-feature/go-sdk-contrib/hooks/validator
   ```

2. Import the dependencies

   ```go
   package main

   import (
       "context"
       "fmt"
       "github.com/open-feature/go-sdk-contrib/hooks/validator/pkg/regex"
       "github.com/open-feature/go-sdk-contrib/hooks/validator/pkg/validator"
       "github.com/open-feature/go-sdk/pkg/openfeature"
       "log"
   )
   ```

3. Create an instance of the `validator hook` struct using the regex hex validator

   ```go
   func main() {
       hexValidator, err := regex.Hex()
       if err != nil {
           log.Fatal(err)
       }
       v := validator.Hook{Validator: hexValidator}
   }
   ```

4. Register the `NoopProvider`, this simply returns the given default value on flag evaluation.

   This step is optional, the sdk uses the `NoopProvider` by default but we're explicitly setting it for completeness

   ```go
   openfeature.SetProvider(openfeature.NoopProvider{})
   ```

5. Create the client, call the flag evaluation using the `validator hook` at the point of invocation

   ```go
   client := openfeature.NewClient("foo")

   result, err := client.
       StringValueDetails(
           context.Background(),
           "blue",
           "invalidhex",
           openfeature.EvaluationContext{},
           openfeature.WithHooks(v),
       )
   if err != nil {
       fmt.Println("err:", err)
   }
   fmt.Println("result:", result)
   ```

6. Check that the flag evaluation returns an error as `invalidhex` is not a valid hex color

   ```shell
   go run main.go
   err: execute after hook: regex doesn't match on flag value
   result {blue 1 {invalidhex   }}
   ```

   Note that despite getting an error we still get a result.
