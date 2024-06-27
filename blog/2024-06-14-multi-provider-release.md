---
slug: "openfeature-multi-provider-release"
title: "OpenFeature Multi-Provider Release"
date: 2024-06-14
authors: [emmawillis]
description: "Introducing an OpenFeature Multi-Provider for Node.js and JavaScript"
tags: [node, javascript, providers]
draft: false
---
We are excited to announce the release of the OpenFeature “Multi-Provider” for JavaScript and NodeJS. This new provider allows developers to access multiple OpenFeature providers through a unified interface, with customizable strategies that reconcile inconsistencies between providers. The Multi-Provider supports use cases including provider migrations and long-term support for multiple feature flag sources. It is currently available for the Javascript OpenFeature SDKs [@openfeature/server-sdk](https://www.npmjs.com/package/@openfeature/server-sdk) and [@openfeature/web-sdk](https://www.npmjs.com/package/@openfeature/web-sdk).

<!--truncate-->

## How It Works

```jsx
const multiProvider = new MultiProvider([
  {
    provider: new ProviderA(),
  },
  {
    provider: new ProviderB(),
  },
]);

await OpenFeature.setProviderAndWait(multiProvider);

openFeatureClient = OpenFeature.getClient();
const value = await openFeatureClient.getStringValue('flag-key', 'default value', someUser);
```

The Multi-Provider behaves like any other provider, but under the hood it combines results from any number of providers. It takes a list of providers as its only required parameter, then evaluates flags by progressing through the list of providers in order. By default, it will only evaluate the next provider if the current one indicates the flag was not found. Once there is a flag match, the Multi-Provider will return that result and not evaluate with the remaining providers.

## Strategies

In order to support diverse use cases, the Multi-Provider also accepts a Strategy parameter, which can be customized to control which providers are evaluated and how the final result is determined.

```jsx
const multiProvider = new MultiProvider(
  [
    {
      provider: new ProviderA(),
    },
    {
      provider: new ProviderB(),
    },
  ],
  new SomeStrategy(),
);
```

### First Match Strategy

The default Strategy is the `FirstMatchStrategy`. This will evaluate providers in order, moving on to the next provider only if the current provider returns a `FLAG_NOT_FOUND` result. If an error is thrown by any provider, the Multi-Provider will throw that error. The OpenFeature SDK will then catch the error and return the default value.

This strategy is useful for migrating from one provider to another, when some flags have been ported to the new system while others remain in the old one. By putting the new provider first in the provider's list, the Multi-Provider will prefer results from the new system but keep the old as a fallback.

`FirstMatchStrategy` can also be used to pull feature flags from multiple sources, and return as soon as the flag is found.

### First Successful Strategy

`FirstSuccessfulStrategy` is similar to `FirstMatchStrategy`, except that errors from evaluated providers do not halt execution. Instead, it will return the first successful result from a provider. If no provider successfully responds, it will throw an error result.

One use case for this strategy is if you want the Multi-Provider to fallback to another provider in the case of an error, rather than throwing an error itself. For example, if an external vendor provider goes down, you may want to automatically fall back to a config file.

### Comparison Strategy

The `ComparisonStrategy` requires that all providers agree on a value. If the providers return the same value, the result of the evaluation will be that value. Otherwise, the evaluation result will contain an error in the `errors` field to indicate a mismatch, and the result value will be the value returned by the first provider. The `ComparisonStrategy` also evaluates all providers in parallel, as it is not intended to exit as soon as it finds a match.

One use case for this strategy is validating the success of a provider migration. If the configuration in one provider has been recreated in another, this strategy confirms the flags and user targeting are consistent between those sources.

### Custom Strategies

In order to support complex provider behaviour and diverse use cases, users can write custom strategies that extend the abstract `BaseEvaluationStrategy` class. Some key methods to control the Multi-Provider’s behaviour include:

- **runMode:** This property determines whether providers are evaluated sequentially or in parallel.
- **shouldEvaluateThisProvider:** This function is called before a provider is evaluated. If it returns false, the provider is skipped. This is useful for conditional evaluations based on the flag key or the provider's state.
  - For example, if you know that all flag keys containing the substring `provider_a_` should only be evaluated using ProviderA, you can skip evaluating with any other providers when that prefix is used.

```tsx
export class MyCustomStrategy extends BaseEvaluationStrategy {
  // In this example, we know keys containing 'provider_a_' will only exist in ProviderA
  override shouldEvaluateThisProvider(
    strategyContext: StrategyPerProviderContext,
    evalContext: EvaluationContext,
  ): boolean {
    if (strategyContext.flagKey.includes('provider_a_') && strategyContext.providerName !== 'ProviderA') {
      return false;
    }

    return true;
  }
}
```

- **shouldEvaluateNextProvider:** After a provider is evaluated, this function determines whether to proceed with evaluating the next provider. It takes into account the result or any errors encountered. If it returns true, the next provider is evaluated; otherwise, the evaluation stops and the results are passed to `determineFinalResult`. In parallel execution mode, this function is not called.
  - If your provider indicates that a result should not be used in a non-standard way, you can customize `shouldEvaluateNextProvider` to continue to the next provider if that condition is met. For example, if your provider result should be skipped when `flagMetadata.unusableResult` is `true`, you can check for that property here.

```tsx
export class MyCustomStrategy extends BaseEvaluationStrategy {
  override shouldEvaluateNextProvider<T extends FlagValue>(
    strategyContext: StrategyPerProviderContext,
    context: EvaluationContext,
    details?: ResolutionDetails<T>,
    thrownError?: unknown,
  ): boolean {
    // if the provider indicates the result should not be used, continue to next provider
    if (details?.flagMetadata.unusableResult === true) {
      return true;
    }
    // otherwise, return this result
    return false;
  }
}
```

- **determineFinalResult:** This function is invoked after all evaluations are completed (or when no further evaluations are needed). It consolidates the results and determines the final outcome. The function must return a `FinalResult` object, which includes the final resolution details and the corresponding provider, or an array of errors if the result was unsuccessful.
  - For example, if you are evaluating several providers in parallel and want to control which result is used in the case of a mismatch, rather than using the built-in `ComparisonStrategy`, you could override this function.

```tsx
export class MyCustomStrategy extends BaseEvaluationStrategy {
  override runMode = 'parallel';

  override determineFinalResult<T extends FlagValue>(
    strategyContext: StrategyPerProviderContext,
    context: EvaluationContext,
    resolutions: ProviderResolutionResult<T>[],
  ): FinalResult<T> {
    let value: T | undefined;

    for (const resolution of resolutions) {
      if (typeof value !== 'undefined' && value !== resolution.details.value) {
        logger.warn('Mismatch between provider results: ', value, resolution.details.value);
      } else {
        value = resolution.details.value;
      }
    }

    // we want to always use the first provider's resolution
    const finalResolution = resolutions[0];
    return this.resolutionToFinalResult(finalResolution);
  }
}
```

## Use Cases

Some key use cases supported by the Multi-Provider include:

### Migrating from one provider to another

Let’s say you were using one provider, `OldProvider`, but have decided to switch to `NewProvider` moving forward. You have been creating all new flags in `NewProvider`, while slowly copying over your existing flags. This means your newest flags only exist in `NewProvider` , some of your older flags only exist in `OldProvider`, and an increasing number of flags exist in both. Previously, you would have to instantiate an OpenFeature client for each of your providers, or register the providers under different domains and manage switching between them manually. The Multi-Provider allows you to wrap both providers and prioritize the new one automatically:

```jsx
const multiProvider = new MultiProvider([
  {
    provider: new NewProvider(),
  },
  {
    provider: new OldProvider(),
  },
]);
```

The `NewProvider` now takes precedence and will always be used, unless a flag does not exist in its configuration. In that case, the Multi-Provider will fall back to `OldProvider` automatically.

### Validating the success of a migration

You can also use the Multi-Provider to confirm that two or more providers always agree on all evaluation results. For example, once you are finished migrating all of your feature flags from `OldProvider` to `NewProvider`, you may want to run concurrently for some time and track any instances where the evaluation results differ, to catch errors in the configuration of `NewProvider`.

By using the [ComparisonStrategy](https://www.notion.so/OpenFeature-Multi-Provider-OF-Blog-Post-4cd7d2e9d7f5473093a5a37b4c3ed89b?pvs=21), you can configure the Multi-Provider to run all providers and return an error result if the results don’t match.

```jsx
const newProvider = new NewProvider();
const oldProvider = new OldProvider();

const onMismatch = (_resolutions: ProviderResolutionResult<FlagValue>[]) => {
	logger.warn('Provider mismatch!')
}

const multiProvider = new MultiProvider(
    [
      {
        provider: newProvider,
      },
      {
        provider: oldProvider,
      }
    ],
    new ComparisonStrategy(
      oldProvider, // the fallback provider to trust in the case of a mismatch
      onMismatch, // callback method called when provider resolutions don't match
    )
)
```

### Aggregating flags from multiple sources

The Multi-Provider can be used to combine feature flags from sources such as environment variables, database entries, and vendor feature flags, without having to instantiate multiple SDK clients. The order of the providers list establishes the precedence order of providers to control which should be trusted if keys exist in both systems. For example, if you want to use environment variables to override flag values from a vendor provider, you could pass the environment variable provider as the first in the providers list.

```jsx
const multiProvider = new MultiProvider([
  {
    provider: new EnvVarProvider(),
  },
  {
    provider: new VendorProvider(),
  },
]);
await OpenFeature.setProviderAndWait(multiProvider);

openFeatureClient = OpenFeature.getClient();
const value = await openFeatureClient.getStringValue('flag-key', 'default value', someUser);
```

If the flag with the key ‘flag-key’ exists in both providers, it will only be evaluated with the `EnvVarProvider`.

### Setting a fallback for cloud providers

You can use the Multi-Provider to automatically fall back to a local configuration if an external vendor provider goes down, rather than using the default values. By using the `FirstSuccessfulStrategy`, the Multi-Provider will move on to the next provider in the list if an error is thrown.

```jsx
const multiProvider = new MultiProvider(
  [
    {
      provider: new VendorProvider(),
    },
    {
      provider: new EnvVarProvider(),
    },
  ],
  new FirstSuccessfulStrategy(),
);
```

In this example, if `VendorProvider` is unavailable for any reason, `EnvVarProvider` will be evaluated instead.

## Compatibility

The Multi-Provider offers developers more flexibility and control when managing complex feature flag setups. As a first step, we have implemented it in the [@openfeature/server-sdk](https://www.npmjs.com/package/@openfeature/server-sdk) and [@openfeature/web-sdk](https://www.npmjs.com/package/@openfeature/web-sdk).

## Future Plans

We’re excited to get feedback about the current strategies and hear about other possible use cases. As we validate the Multi-Provider on the initial supported implementations we will gradually expand to support other languages and further strategies. We welcome contributors to bring this functionality to other languages.
