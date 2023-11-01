---
slug: 'feature-flags-sdks-architectures'
title: 'Different approaches for server-side SDK architectures'
date: 2023-11-01
authors: [liran2000]
description: "This blog explores the pros and cons of common server-side feature flag SDK architectures."
tags: [client, sdk]
draft: false
---

Server-side feature flag software development kits (SDKs) are a common way to integrate feature flags into your microservice application architecture.
Feature flag SDKs have several functionalities, but the primary purpose is performing a feature flag evaluation using contextual information.
Each feature flag service can publish SDKs in multiple programming languages.
A feature flag service commonly exposes APIs via endpoints like REST HTTP and/or gRPC.
SDKs are an important layer, as network traffic loads affect both the application and the feature flag service.
When the feature flag service is a cloud SaaS service, often it supports a relay proxy or a sidecar application, which can be deployed on an organization network.
A relay proxy lets multiple clients connect to a local proxy, reducing the number of outbound connections to the cloud service.
Considering that a large amount of microservices using SDK instances can be deployed, this can be significant.


<!--truncate-->

## Different approaches for server-side SDKs architecture

Through my own personal use as well as helping to develop several feature flag service providers, I have found that there are a few architectural approaches that most vendors server-side SDKs typically fall under.
Below, I dive into three of the main server-side SDK functionalities at a high level.

### Notes

* The described architectures below are high level.
* Feature flag services described in the diagrams may be a cloud service, a local network proxy or some data source (some feature flag solutions SDKs can communicate directly from a source like GitHub).
* Additional functionalities like statistics reporting, evaluation analytics metrics, events and more should also be taken into consideration, but I have not explored these in this particular blog post.

### "Direct" API endpoints Bridge

This approach is relatively straightforward, the feature flag service exposes APIs via endpoints like REST HTTP and/or gRPC, and the SDK acts like a bridge, executing the endpoint requests, and translating the request/responses to the programming language.
Feature flag evaluation is done on proxy/service only.
In this approach, as each operation like feature flag evaluation causing network traffic, having a relay proxy in the SDK application cluster can help significantly.

### "Direct" API endpoints Bridge SDK - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/Direct-API-endpoints-Bridge-SDK.png').default} />

### "Direct" API endpoints Bridge SDK using Relay Proxy - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/Direct-API-endpoints-Bridge-SDK-using-Relay-Proxy.png').default} />

#### Advantages

* Can be relatively simple to develop and maintain from the APIs in multiple code languages, even by code generation.
* The evaluation code can reside at the relay proxy without a need to implement evaluation per SDK language.

#### Disadvantages

* Intermediate issues like network or feature flag service errors may lead to unexpected flag evaluation behavior.
* Performance and resources usage: each operation like feature flag evaluation causing network traffic.
    * Slow compared to alternative architectures.
    * High load on network traffic.
    * Numerous network requests causing high load on the feature flag service / proxy.

### API endpoints requests with cache

With this approach, the feature flag service exposes APIs via endpoints like REST HTTP and/or gRPC, and the SDK calls the endpoint to request and translate the response to the programming language used by the SDK.
The response can be cached to eliminate I/O on subsequent requests.
Feature flag evaluation is done on proxy / features service only.
As this approach involves network traffic for non-cached evaluations, a relay proxy is effective for having the network traffic data remain on an internal network for faster and more efficient performance and reducing the load on the features service.

### API endpoints requests with cache - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/API-endpoints-requests-with-cache.png').default} />

### API endpoints request with cache using relay proxy - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/API-endpoints-requests-with-cache-using-Relay-Proxy.png').default} />

#### Advantages

* Same advantages as the "Direct" API endpoints bridge architecture.
* Network traffic can be reduced.

#### Disadvantages

* Intermediate issues like network or feature flag service errors may lead to unexpected flag evaluation behavior.
* Another functional disadvantage is that intermediate issue like network or feature flags service error during microservice initialization is handled by not evaluating to the expected feature flag value.
* First requests are not in cache, thus slower and causing network traffic.
* Not every request can be efficiently cached, as some evaluations can be dynamic according to context with different values.
* When there is no background task for getting real-time configuration changes event and refreshing the cache, values can take time to be updated.

### Local evaluation

With this approach, the feature flag configuration is saved locally in the SDK.
Feature flag evaluation is done locally via the SDK and is not affected by network performance.
With this approach, configuration can be fetched on initialization, and be refreshed periodically and/or when there is a configuration change, which can be triggered at the SDK via stream event from the feature flag service. 
Some SDKs sync data via WebSockets or [SSE](https://en.wikipedia.org/wiki/Server-sent_events).

### Local evaluation - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/Local-evaluation.png').default} />

#### Advantages

* Intermediate issues like network or feature flag service errors have no effect on flag evaluation, as the configuration is cached, and flags are evaluated locally.
  If an issue like network error is ongoing for a long time period, SDK provider state can also be reflected as stale.
* Initialization can have a fallback mechanism for dealing with situations like temporary network failure by starting from the last received configuration or some other configuration. Thus, microservice can start with the last feature flag configuration.
* Feature flag configuration can be cached on a CDN.
* Feature flag evaluation is done locally via the SDK and not affecting network traffic, hence can be fast and efficient.
* Working without a relay proxy can still be efficient from an SDK point of view, as flags are evaluated locally, and network traffic does not block common flow.

#### Disadvantages

* When feature flag configurations are very large with many feature flags, network traffic and local cache sizes can be increased. This can impact the time an SDK needs to initialize.
* Local evaluation should be implemented at the SDK, developed and maintained for multiple languages. Considering rules like context properties based and percentage rollout strategies via hashing to buckets, it can be hard to keep 100% feature parity across languages.

## OpenFeature and server-side SDKs

OpenFeature is an open specification that provides a vendor-agnostic, community-driven API for feature flagging, while a main part of it is the SDK specification.
* OpenFeature has a [specification](https://openfeature.dev/specification/glossary/#feature-flag-sdk) for how an SDK should behave across multiple programming languages.
* The OpenFeature specification has methods like flags evaluation and initialization.
* The OpenFeature specification supports events, which can be used by developers to react to initialization, flag configuration changes, and error events.
* As there are multiple SDK architectures, fallback mechanisms are not always well-defined, and vendors can implement providers the way they choose.


