---
slug: "openfeature-a-standard-for-feature-flagging"
title: "OpenFeature - a standard for feature flagging"
date: 2022-05-19
authors: [petehodgson]
description: "OpenFeature is a new open standard for feature-flagging. Why we need an open standard for what's essentially a glorified if statement? Let me explain..."
draft: false
---

I've recently been involved[^1] in [OpenFeature](https://openfeature.dev), an effort to define a standard API and SDK for feature flagging. At first glance, you might wonder whether feature flagging needs a standard. It's just a function call and an if statement, right? Well, no, not really. I'll explain why, and then talk about some of the benefits that I hope OpenFeature will bring to the space.

[^1]: I'm currently serving as a member of the Bootstrap Governing Committee

## The Feature Flagging iceberg

When I talk to people about adopting feature flags, I often describe feature flag management as a bit of an iceberg. On the surface, feature flagging seems really simple, almost trivial. You call a function to find out the state of a flag, and then you either go down one code path, or the other. However, once you get into it turns out that there's a fair bit of complexity lurking under the surface.

<img src={require('@site/static/img/blog/announcing-open-feature/feature-flagging-iceberg.png').default} />

Organizations that begin using feature flags at any sort of scale quickly learn that they need some of that functionality lurking under the surface. This is why flag management platforms like LaunchDarkly and Split.io exist. Their value is not in providing a fancy if statement, it's in all those extra features lurking below the surface - a web-based management interface, the ability to perform controlled incremental rollout, permissions and audit trails, integration into analytics systems, and so on.

<!--truncate-->

## Everybody needs an SDK

While most of the value of a flag management platform lies beneath the surface, each platform still has to provide that surface-level capability - the ability to evaluate a flag at runtime. And that ability needs to be available in each tech stack. So every flag management vendor ends up maintaining a small flock of feature flagging SDKs in various tech stacks. Even when we're just talking about glorified if statements, this is actually a lot of work, and it's work that is duplicated by each feature management platform.

<img src={require('@site/static/img/blog/announcing-open-feature/n-times-m.jpg').default} />

This is where OpenFeature comes in. By defining a standard API and providing a common SDK, it allows vendors to focus on just implementing a small vendor-specific integration kernel (a "provider") in each language, which then plugs into the OpenFeature SDK. This leaves the bulk of the flag evaluation functionality in a given tech stack to be built once in a shared, vendor-neutral implementation.

<img src={require('@site/static/img/blog/announcing-open-feature/n-plus-m.jpg').default} />

## OpenTelemetry, but for feature flags

The model here is similar to the (very successful) OpenTelemetry project in the observability space. By defining a shared, open core OpenTelemetry has allowed vendors in the observability space to work within a shared ecosystem of open-source instrumentation libraries.

Rather than each vendor building their own library to instrument the myriad libraries and runtimes that are out there, every system can use the same shared set of instrumentation libraries. Looking in the Javascript ecosystem, for example, there are instrumentation libraries for Next.js, Express, Fastify, Mongo, knex, typeorm, Redis, GraphQL, and [many more](https://opentelemetry.io/registry/?language=js&component=instrumentation).

## From Effort(n*m) to Effort(n+m)

Before OpenTelemetry, it wasn't really feasible to develop really high-quality instrumentation for every library. Observability vendors didn't have the capacity or deep experience to build rich, idiomatic instrumentation into every library out there, and the library maintainers certainly didn't have the bandwidth to create instrumentation support for every observability platform. OpenTelemetry solved this by creating a single target for both sides to support. It turned an N*M problem into an N+M problem.

My hope is that OpenFeature will do the same for feature flagging. This can happen at two levels. Firstly, OpenFeature will provide a single target for framework-specific feature flag evaluation, which can be done in a really idiomatic, ergonomic way. For example, a React feature flagging client can provide flag evaluation mechanisms using hooks, providers and components, rather than plain old Javascript functions. This idiomatic addition is an example which various vendors have made already, but such ergonomic improvements are spread across each vendor-specific library, and frankly none of them are perfect. If we could get to a single, vendor-neutral library then engineering effort could be focused in one place, and users of the client would not need to re-learn a slightly different API for each vendor. This same situation applies for every runtime that needs feature flag evaluation - we can build a single, standard feature flag evaluation client for Android, React Native, iOS, Spring Boot, Elixir, Django, Fastify, Vertx, gin, and so on. And each of these clients can provide a rich, idiomatic API that provides a great developer experience in each of these frameworks.

## Flag evaluation requires context

As a side note, "feature flag evaluation" means more than just "check a flag and return a boolean". Any non-trivial flag evaluation also requires context - which user is this flag being evaluated for, or which demographic market, or which environment, or which server. That contextual information is often available in one place (a request handler for example) but needed in another place - at the point a flag is being evaluated. A naive feature flagging client forces the developer to track this context themselves, so that they can pass it into the client during flag evaluation. A *delightful* feature flagging client provides the ability for the context to be recorded in one place (often using thread-local storage or an equivalent), and then automatically applied during flag evaluation. Most flagging clients do not do this automatically, because of this N*M problem. OpenFeature would make this sort of delightful experience much more feasible. It would be very straightforward to write a little extension to an authentication library such as Passport.js that would record context about the current user into OpenFeature, so that it's automatically applied during any subsequent flag evaluation.

## A win-win-win

My hope is that OpenFeature will provide a benefit that's greater than the sum of its parts, something that's a win for vendors, for open-source maintainers, and for teams using feature flags. Flag management platforms will be freed from having to each maintain their tiresome heap of flag evaluation clients. Framework communities will have the opportunity to write rich, idiomatic flag evaluation clients which target a standard, vendor-neutral flag evaluation API. Finally, developers using feature flags will have more ergonomic and delightful feature flagging capabilities, using an API which remains constant no matter which feature flagging platform they're using.

OpenFeature is actively looking for more participants. If you'd like to [get involved](https://github.com/open-feature/community), don't be shy! Join a community call, or join the #OpenFeature [CNCF slack](https://slack.cncf.io/) channel, and help us build a great open standard that benefits the industry.
