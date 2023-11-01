---
slug: 'feature-flags-sdks-architectures'
title: 'Different approaches for server-side SDK architectures'
date: 2023-11-01
authors: [liran2000]
description: "Feature Flags services Server-side SDKs different architectures approaches"
tags: [client, sdk]
draft: false
---

Server-side feature flag software development kits (SDKs) are a common way to integrate feature flags into your microservice application architecture.
Feature flag SDKs have several functionalities, mainly feature flag evaluation with or without context.
Each Feature flag service can publish SDKs in multiple programming languages.
The Feature flag services commonly expose APIs via endpoints like REST HTTP and/or gRPC.
SDKs are an important layer, as network traffic loads affect both the application and the feature flag service.
When the feature flag service is a Cloud SaaS service, often it supports a relay proxy or a sidecar application, which can be deployed on an organization network.
The Relay Proxy lets multiple clients connect to a local proxy, reducing the number of outbound connections to the Cloud Service.
Considering that a large amount of microservices using SDK instances can be deployed, this can be significant.


<!--truncate-->

## Different approaches for server-side SDKs architecture

Through my own personal use as well as helping to develop several feature flag service providers, I have found that there are a few architectural approaches that most vendors server-side SDKs typically fall under.
Below I dive into three of the main server-side SDK functionalities, but there are additional functionalities like statistics and analytics reporting, metrics, events, and more.

### Notes

* The described architectures below are high level.
* Feature flag services described in the diagrams may be a Cloud service, a local network Proxy or some data source (some feature flags solutions SDKs can communicate directly from a source like Github).
* Additional functionalities like statistics reporting, metrics, events and more should also be taken into consideration, but I have not explored these in this particular blog post.

### "Direct" API endpoints Bridge

This approach is relatively straight-forward, the Feature flag service expose APIs via endpoints like REST HTTP and/or gRpc, and the SDK acts as like a bridge, executing the endpoint requests, and translate the request/responses to the programming language.  
Feature flag evaluation is done on proxy/service only.  
In this approach, as each operation like feature flag evaluation causing network traffic, having a relay proxy in the SDK application cluster can help significantly.

### "Direct" API endpoints Bridge SDK - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/Direct-API-endpoints-Bridge-SDK.png').default} />

### "Direct" API endpoints Bridge SDK using Relay Proxy - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/Direct-API-endpoints-Bridge-SDK-using-Relay-Proxy.png').default} />

#### Advantages

* Can be relatively simple to develop and maintain from the APIs in multiple code languages, even by code generation.
  The evaluation code can reside at the Relay Proxy, without a need to implement evaluation per SDK language.

#### Disadvantages

* Functional disadvantage is that intermediate issue like network or feature flags service error is handled by not evaluating to the expected feature flag value.
* Another functional disadvantage is that intermediate issue like network or feature flags service error during microservice initialization is handled by not evaluating to the expected feature flag value.
* Performance and resources usage: each operation like feature flag evaluation causing network traffic.
    * Time-consuming.
    * High load on network traffic.
    * Affecting both application, and Feature Flag service itself, whether it is self-hosted relay proxy or even more when it is a Cloud Saas service.

### API endpoints requests with cache

With this approach, the feature flag service exposes APIs via endpoints like REST HTTP and/or gRpc, and the SDK calling the endpoint requests, and translate the request/responses to the programming language. A cache is used for responses data.  
Feature flag evaluation is done on proxy / features service only.  
As this approach involves network traffic for non-cached evaluations, a Relay Proxy is effective for having the network traffic data on internal network for faster and efficient performance and reducing the load on the Features Service / Source.

### API endpoints requests with cache - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/API-endpoints-requests-with-cache.png').default} />

### API endpoints requests with cache using Relay Proxy - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/API-endpoints-requests-with-cache-using-Relay-Proxy.png').default} />

#### Advantages

* Network traffic can be reduced.

#### Disadvantages

* Functional disadvantage is that intermediate issue like network or feature flags service error for non-cached data is handled by not evaluating to the expected feature flag value.
* Another functional disadvantage is that intermediate issue like network or feature flags service error during microservice initialization is handled by not evaluating to the expected feature flag value.
* First requests are not in cache, thus slower and causing network traffic.
* Not every request can be efficiently cached, as some evaluations can be dynamic according to context with different values.
* When there is no background task for getting real-time configuration changes event and refreshing the cache, values can take time to be updated.

### Local evaluation

With this approach, the feature flag configuration is saved locally at the SDK.  
Feature flag evaluation is done locally via the SDK and not affecting network traffic.
With this approach, configuration can be fetched on initialization, and be refreshed periodically and/or when there is a configuration change, which can be triggered at the SDK via stream event from the feature flag service. 
Some SDKs sync data via WebSockets or [SSE](https://en.wikipedia.org/wiki/Server-sent_events).
When this approach is used, evaluation analytics metrics can be aggregated at the SDK side and published separately, as not every flag evaluation triggers a message to the Features Service / Proxy.

### Local evaluation - example flow

<img src={require('@site/static/img/blog/feature-flags-sdks-architectures/Local-evaluation.png').default} />

#### Advantages

* Functional advantage is that intermediate issue like network or feature flag service errors are automatically handled, as configuration is cached, and flags are evaluated locally.
  If an issue like network error is ongoing for a long time period, SDK provider state can also be reflected as stale.
* Another functional advantage, initialization can have a fallback mechanism to dealing with situations like temporary network failure by starting from last received configuration or some other configuration, thus microservice can start with last feature flag configuration.
* Feature flag configuration can be cached on CDN.
* Feature flag evaluation is done locally via the SDK and not affecting network traffic, hence can be fast and efficient.
* Working without a relay proxy can still be efficient from SDK point of view, as flags are evaluated locally and network traffic does not block common flow.

#### Disadvantages

* When feature flag configuration is very large with many feature flags, network traffic and local cache sizes can be increased.
* Local evaluation should be implemented at the SDK, developed and maintained for multiple languages. Considering rules like context properties based and percentage rollout strategies via hashing to buckets, it can be hard to keep 100% feature parity across languages.

#### A note on client-side SDKs for web browser / client app

This approach is less suitable for client-side SDKs from a security point of view, as full feature flag configuration and authorization keys are exposed to end users.

## OpenFeature and server-side SDKs

* OpenFeature has the [specification](https://openfeature.dev/specification/glossary/#feature-flag-sdk) for SDKs for
  multiple programming languages for developing a unified API and SDK.
* The OpenFeature specification has methods like flags evaluation and initialization.
* The OpenFeature specification treats events, which can go together with some scenarios like network errors.
* As there are multiple SDK architecture approaches, architectures and fallback mechanisms are not always
  well-defined, and vendors can implement providers the way they choose.


