---
slug: 'flag-definition-flag-evaluation-protocol-standardization'
title: 'Flag Definition & Flag Evaluation Protocol Standardization Discussion'
date: 2023-10-12
authors: [toddbaert]
description: "we will be holding a meeting on October 19, 2023 from 10:00am - 11:00am ET (4:00pm - 5:00pm CET) to discuss flag definition and flag evaluatoin protocol standardization in detail."
tags: [flag definition, flag evaluation, wire protocol, sdk, API]
draft: false
---

Currently, the OpenFeature specification describes a vendor-neutral API for flag evaluation. It does not describe a flag definition language, or a flag evaluation wire protocol. Consequently, the only means of integration with the OpenFeature SDK is to implement a provider in the relevant programming language(s), which serves as an adaptor between the OpenFeature evaluation API and the flag management system powering the provider.

<!--truncate-->

## Limitations

Providers must be implemented for multiple languages and vendors.
Turnkey, self-hosted applications can't easily leverage OpenFeature (they would need to support some kind of plugin system to allow a provider to be specified and configured).
Infrastructure as code solutions and PaaS providers have no standard on which to base vendor-neutral feature flag definitions.

> This is an exciting area of research from a project perspective. With this, teams who are building a feature flagging solution could implement a simple API and have API clients in many of the major languages. It's a big win for new entrants / internal products, as well as simplifies the workload of adding Open Feature support for existing vendors.
> 
> - Justin Abrahms

## Let's Discuss!

We’ve started a [GitHub discussion](https://github.com/orgs/open-feature/discussions/249), and we will be holding a meeting on [October 19, 2023 from 10:00am - 11:00am ET (4:00pm - 5:00pm CET)](https://community.cncf.io/events/details/cncf-openfeature-presents-openfeature-special-meeting/) to discuss this topic in detail.
The goal of this meeting is to gauge interest from users, organizations, vendors, maintainers of associated open source projects, and feature flag subject matter experts - with the potential of forming a Special Interest Group (SIG), or something similar, around this problem. 
