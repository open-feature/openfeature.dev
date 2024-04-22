---
slug: "feature-observability-semantic-conventions"
title: "Feature Observability Semantic Conventions"
date: 2024-04-22
authors: [dyladan]
description: "Help us make feature observability better for everyone!"
tags: [otel, spec, specification, opentelemetry, observability]
draft: false
---

As comic book aficionados say, with great power comes great responsibility, or great complexity as the case may be.
The OpenTelemetry feature observability semantic convention SIG aims to combat this problem by defining a consistent set of rules and definitions for feature telemetry data.
Keep reading to learn more about this effort and how you can be involved!

<!--truncate-->

## Power and Complexity

As pointed out by Pete Hodgson in his blog [Feature Toggles (aka Feature Flags)](https://martinfowler.com/articles/feature-toggleshtml#WorkingWithFeature-flaggedSystems), feature flags have great utility, and they solve important problems for engineers every day, but the complexity introduced by widespread use of feature flags can be enormous.
Every toggle point introduces a branch that must be tested, especially if it is enabled dynamically per-request in production.
Testing every possible combination of feature flags is often impractical or impossible.
To mitigate this issue, it is important to have robust and consistent monitoring.

## To Debugability and Beyond

Monitoring also goes beyond just identifying problems.
Feature flags are often used for experimentation, A/B testing, canary releases, and other uses that require monitoring data in order to be effective.
For example, if you wish to determine if your new spline reticulation algorithm is actually an improvement, you need to know the performance characteristics for both the new and the old algorithms.
Just because the new algorithm is faster in your development environment does not mean it will be faster in production, where it may be run on different hardware or with unexpected inputs, or that it won’t have unexpected side-effects.

## Keep it Consistent

The key to effective monitoring is consistent monitoring, and this is where OpenTelemetry comes in.
In the same way that OpenFeature brings consistency to feature flags, OpenTelemetry offers a consistent cross-language API for observability.
This is helpful in many ways.
First, it helps build an effective baseline so you can detect when something unexpected happens.
Maybe your new spine reticulation algorithm is written in a new language that emphasizes memory safety.
If the telemetry emitted by the new algorithm follows a different strategy from the old algorithm, it may be impossible to determine if it is actually an improvement.
Second, it means if you change or upgrade tooling or vendors, your past telemetry data can be meaningfully compared with your new telemetry.
Finally, in a heterogeneous environment with many different services, written in multiple languages and using different tooling, you can still draw meaningful insights from your telemetry data.

## Get Involved!

We can't do this without the support and input of our community.
Whether you're an OpenFeature user, contributor, or interested for any other reason, head over to the [OpenTelemetry Feature Flag Semantic Conventions](https://github.com/open-telemetry/community/pull/2042) project proposal and leave a comment or reaction to show your support.
If you think you'd like to help contribute, leave a comment to that effect and we'll add you to the list.
