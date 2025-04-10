---
slug: "sentry-openfeature-integration"
title: "Sentry OpenFeature Integration"
date: 2025-04-08
authors: [jonathannorris]
description: "Announcing Sentry's OpenFeature integration for enhanced feature flag observability"
tags: [sentry, openfeature, "feature flags", observability]
draft: false
---

We're excited to announce that Sentry has released OpenFeature Hooks for [JavaScript](https://docs.sentry.io/platforms/javascript/configuration/integrations/openfeature/) and [Python](https://docs.sentry.io/platforms/python/integrations/openfeature/), enabling developers to track feature flag evaluations directly in their error monitoring and performance tracking.

## What is the Sentry OpenFeature Integration?

The Sentry OpenFeature Hook automatically tracks feature flag evaluations in your application.
When an error occurs, Sentry will include the state of all evaluated feature flags in the error report, providing crucial context for debugging and troubleshooting.

This integration is currently in beta and only supports boolean flag evaluations. 
See their [changelog](https://changelog.sentry.dev/changelog/view-distributions-of-feature-flag-evaluations-inside-issue-details/) for details on how feature flags are integrated into their platform.

<img src={require('@site/static/img/blog/2025-03-25-sentry-openfeature-integration/sentry_dashboard.png').default} />

## JavaScript Integration

To use the Sentry OpenFeature Hook in your JavaScript application:

```typescript
import * as Sentry from "@sentry/browser";
import { OpenFeature } from "@openfeature/web-sdk";

Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [Sentry.openFeatureIntegration()],
});

OpenFeature.setProvider(new MyProviderOfChoice());
OpenFeature.addHooks(new Sentry.OpenFeatureIntegrationHook());

const client = OpenFeature.getClient();
const result = client.getBooleanValue("test-flag", false); // evaluate with a default value
Sentry.captureException(new Error("Something went wrong!"));
```

> Requirements: Sentry SDK version 8.43.0 or higher

## Python Integration

For Python applications, you can use the Sentry OpenFeature Hook as follows:

```python
import sentry_sdk
from sentry_sdk.integrations.openfeature import OpenFeatureIntegration
from openfeature import api

// Initialize Sentry with the OpenFeature integration
sentry_sdk.init(
    dsn="https://examplePublicKey@o0.ingest.sentry.io/0",
    integrations=[
        OpenFeatureIntegration(),
    ],
)

// Get your OpenFeature client
client = api.get_client()

// Evaluate a feature flag
client.get_boolean_value("hello", default_value=False)

// If an error occurs, Sentry will include the feature flag state
sentry_sdk.capture_exception(Exception("Something went wrong!"))
```

> Requirements: sentry-sdk >= 2.19.2, openfeature-sdk >= 0.7.1, Python >= 3.8

## Benefits of Feature Flag Observability

The Sentry OpenFeature integration provides several key benefits:

1. **Contextual Error Reporting**: When errors occur, you'll see exactly which feature flags were active, helping you identify if a flag change contributed to the issue.

2. **Performance Monitoring**: Track how feature flags impact your application's performance.

3. **Debugging Efficiency**: Reduce the time spent reproducing issues by having feature flag state automatically included in error reports.

4. **Release Confidence**: Make data-driven decisions about feature rollouts by correlating errors with specific flag states.

## The Value of Open Standards

This integration exemplifies the power of open standards in the feature flagging ecosystem.
By implementing the OpenFeature specification, Sentry can provide a seamless integration that works with any OpenFeature provider, without requiring vendor-specific implementations.

This aligns with OpenFeature's vision of reducing integration effort by [moving from effort(N*M) to effort(N+M)](https://openfeature.dev/blog/openfeature-a-standard-for-feature-flagging/#from-effortnm-to-effortnm).
OpenFeature delivers a standardized feature flagging SDK, already implemented by most providers, and Sentry can focus on building a great performance monitoring and error-tracking platform for their users.

## Next Steps

If you're using Sentry and OpenFeature, we encourage you to try out this integration.
The feature flag state will be automatically included in your error reports, providing valuable context for debugging.

For more information, check out the official Sentry documentation:

- [JavaScript Integration](https://docs.sentry.io/platforms/javascript/configuration/integrations/openfeature/)
- [Python Integration](https://docs.sentry.io/platforms/python/integrations/openfeature/)

Using another platform? Sentry is planning expanding support for more platforms, starting with mobile. 
We're excited to see how this integration helps teams better understand the impact of their feature flags on application stability and performance.
