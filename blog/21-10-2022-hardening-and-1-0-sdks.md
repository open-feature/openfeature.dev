---
slug: 'hardening-and-1-0-sdks'
title: 'Specification hardening and 1.0 SDKs'
date: 2022-10-24
authors: [toddbaert]
description: 'OpenFeature is ready for primetime: stabilizing the specification and 1.0 SDK releases'
keywords: [release, '1.0', sdk, openFeature, java, go, '.net', dotnet, js, javascript, specification, spec]
tags: [spec, specification, sdk]
draft: false
---

Early this year, OpenFeature announced its intent to bring a standard to the rapidly growing development practice of feature flagging.
In June it was accepted as a Cloud Native Computing Foundation Sandbox project.
Now, we're pleased to announce a new milestone: OpenFeature has released 1.0 versions of its [.NET](https://github.com/open-feature/dotnet-sdk), [Go](https://github.com/open-feature/go-sdk), [Java](https://github.com/open-feature/java-sdk), and [JavaScript](https://github.com/open-feature/js-sdk) SDKs!

<!--truncate-->

The release includes stable versions the following features:

- the Evaluation API, providing application authors with consistent, vendor neutral, feature flag evaluation
- provider interfaces for flexible integration with a variety of feature flag systems

The specification documents associated with these features have been marked as `hardening`, meaning breaking changes are no longer allowed and usage of these features are encouraged in production environments.
The release of these SDKs and the stabilization of the specification represent a culmination of efforts by a dedicated group of vendors, practitioners and subject matter experts.
Providers are [already available](https://openfeature.dev/docs/reference/technologies/) for major vendors and popular community projects.
It's our hope that the efforts to stabilize the OpenFeature specification and SDKs will lead to more adoption of both OpenFeature and feature flagging in general, and promote a vibrant ecosystem around this increasingly important development pattern.

In addition to those mentioned above, experimental features available in the 1.0 SDKs include:

- hooks, for adding arbitrary behavior to feature flag evaluation, ideal for telemetry integration, validation, and logging
- the Evaluation Context interfaces, used as the basis for dynamic flag evaluation
- implicit context propagation (JavaScript SDK only)

## What's next?

Our goal in the upcoming months will be to harden our existing experimental features. Additionally, we'll work to develop and standardize new capabilities, including: client-side feature flagging, improved cloud native tooling, and implicit transaction-scoped data propagation of contextual attributes.
Furthermore, we're working on SDKs for additional languages, including [PHP](https://github.com/open-feature/php-sdk), [Python](https://github.com/open-feature/python-sdk), and [Ruby](https://github.com/open-feature/ruby-sdk).

If you're interested in contributing or learning more about OpenFeature, please join our expanding and friendly community. Visit our [GitHub](https://github.com/open-feature), join the [OpenFeature slack channel](https://cloud-native.slack.com/archives/C0344AANLA1) on the CNCF Slack instance, or hop into our [bi-weekly community meeting](https://github.com/open-feature/community#meetings-and-events).
