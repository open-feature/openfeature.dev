---
slug: 'spec-0.6.0'
title: 'Specification 0.6.0'
date: 2023-05-24
authors: [beeme1mr]
description: 'Announcing version 0.6.0 of the OpenFeature specification'
keywords: [release, '0.6.0', openFeature, specification, spec, events, shutdown, metadata]
tags: [spec, specification, sdk]
draft: false
---

We are excited to announce the availability of version 0.6.0 of the OpenFeature spec. This release brings many significant additions that benefit both provider developers and application authors, while also establishing a strong foundation for first-class client-side support in OpenFeature.

<!--truncate-->

## What's new?

### Multi-provider support

OpenFeature now supports multiple providers in a single application, allowing teams to scope flag evaluation to a particular flag management system. This makes it easier for developers to mix and match providers based on their needs, all from a unified SDK.

> To learn more, please refer to the [OpenFeature Enhancement Proposal](https://github.com/open-feature/ofep/blob/main/OFEP/provider-client-mapping.md) or [spec change](https://openfeature.dev/specification/sections/flag-evaluation/#requirement-113).


### Flag metadata

A feature flag management system typically has a wealth of information about a particular feature flag, such as a configuration URL or the originating Jira issue. Wouldn't it be useful if you were able to access it within the OpenFeature SDK? With flag metadata, providers can now annotate feature flags with additional data.

> For more details, take a look at the [OpenFeature Enhancement Proposal](https://github.com/open-feature/ofep/blob/main/007-OFEP-provider-flag-metadata.md) or [spec change](https://openfeature.dev/specification/sections/providers/#requirement-2210).

### Initialization and Shutdown

We have introduced additional APIs to streamline consistent startup and shutdown behavior for providers. Many providers perform asynchronous operations to retrieve the latest rulesets during startup. With the new APIs, this process is consistent across all providers. Once a provider has started, the shutdown API facilitates a clean shutdown process which may include flushing telemetry information, closing remote connections, or terminating a worker process.

> For further information, please consult the [OpenFeature Enhancement Proposal](https://github.com/open-feature/ofep/pull/46) or [spec change](https://openfeature.dev/specification/sections/providers#24-initialization).

### Events

Developers can now incorporate custom logic that responds to important events, such as changes in flag rulesets. This allows for the reevaluation of feature flags without user interaction. These events can be leveraged to instantly update portions of a user interface or dynamically adjust the log level on a server. Event types include flag ruleset changes, provider readiness, and error events.

> For more details, please refer to the [OpenFeature Enhancement Proposal](https://github.com/open-feature/ofep/blob/main/007-OFEP-flag-change-events.md) or [spec change](https://openfeature.dev/specification/sections/events).

## Conclusion

We can't wait to see what you do with these new features. SDKs have started implementing the updated spec and should be available shortly. To get check the progress or get involved, checkout [these issues](https://github.com/search?q=org%3Aopen-feature+label%3Av0.6.0&type=issues&s=created&o=asc) on GitHub.

And, as teased in the intro, the team is already hard at work enhancing the spec to better support [client-side feature flags](https://github.com/open-feature/spec/pull/171).
For insights into our thought process, checkout Pete Hodgson's excellent blog on [catering to the client side](./2023-02-06-catering-to-the-client-side.md).
If this is an area of interest to you, considering joining the OpenFeature community and help us shape the future of feature flagging!
