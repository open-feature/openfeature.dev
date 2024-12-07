---
slug: 'kubecon-wrapped-and-tracking'
title: 'KubeCon Wrapped & New Tracking Event Functionality'
date: 2024-12-09
authors: [toddbaert]
image: /img/blog/2024-12-09-post-kubecon-and-tracking/summit-wrapped.png
description: 'KubeCon NA 2024 Summary and Tracking Announcement'
tags: [tracking, specification, experimentation, spec, kubecon, cncf]
draft: false
---

Hello from the OpenFeature community! This post is a double-feature of sorts: we'll be wrapping up our time at KubeCon NA 2024 as well as talking about our latest SDK feature: [✨ _tracking events_ ✨](/blog/kubecon-wrapped-and-tracking#robust-experimentation-support-with-tracking-events).

<!--truncate-->

<img src={require('@site/static/img/blog/2024-12-09-kubecon-wrapped-and-tracking/summit-wrapped.png').default} />

## KubeCon NA 2024 _Wrapped_

As usual, we had a great time at the OpenFeature booth in the project pavilion.
We always appreciate the chance to connect with maintainers face-to-face, sometimes for the first time!
Each year we hear from more users who've made use of OpenFeature within their organization or project.

This was also our first time having our own dedicated, colocated event: [The OpenFeature Summit](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/co-located-events/openfeature-summit/)!
There were some great talks here; a couple of highlights:

- [▶️ Migrating to OpenFeature at Scale: 0 to Billions](https://youtu.be/6ivdFYgznxQ?si=kVg-6mkPX4INwBca), by Chetan Kapoor & Justin Abrahms from [eBay](https://innovation.ebayinc.com/tech/engineering/)
  - a great presentation about using OpenFeature at massive scale, and a notable example of how to effectively (and empathetically) promote the internal adoption of a tool at enterprise scale
- [▶️ Experimentation Programs at Scale: Lessons Learned from Top Companies](https://youtu.be/CwckuHnQkzE?si=8XRPauAKqqDoLA4R), by Graham McNicoll from [GrowthBook](https://www.growthbook.io/)
  - if this doesn't convince you that you need to be using experimentation to validate your features and roadmap, nothing will!
  - particularly relevant to [some of our newest features](#robust-experimentation-support-with-tracking-events) 👀

The full list of videos and slides from the OpenFeature Summit are available [here](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/co-located-events/openfeature-summit/#thank-you-for-attending).

Additionally, don't sleep on Pete Hodgson's [SDLC track presentation](https://kccncna2024.sched.com/event/1i7rl/migratory-patterns-making-architectural-transitions-with-confidence-and-grace-pete-hodgson-partnerslate) on undertaking big, hairy migrations, and how feature flags can help.

## Robust Experimentation Support with Tracking Events

Teams spend a lot of time talking about developing, deploying, monitoring and maintaining features, but how do you know if you've built the right features in the first place?
Without data to evaluate the success and adoption of features, aren't you just guessing?
The best teams bake experimentation into their product development cycle, so that they can use data to drive their decisions.

Some feature flag vendors provide functionality to help address this issue, and we knew OpenFeature needed to as well.
With the [latest enhancements to our specification](https://github.com/open-feature/spec/pull/268), OpenFeature now supports this sort of experimentation!
The new [Tracking API](/specification/sections/tracking) defines interfaces and functions to allow application authors to "close the gap" between feature flags and business objectives; helping to assert that a particular flag variant actually corresponds to increased usage, for instance.

In fact, if your vendor or home-grown feature flag solution doesn't support equivalent functionality, [hooks](/specification/sections/hooks) and tracking compose a flexible solution to associate flag evaluations with usage data, regardless of whatever customer data platform or telemetry backend you use.

These enhancements were brought to you by the hard work of many feature flag vendors, enterprises, and subject matter experts... Thanks to all who helped!

<img src={require('@site/static/img/blog/2024-12-09-kubecon-wrapped-and-tracking/thanks.png').default} />

### Implementations and Future Plans

Tracking event functionality is already implemented in our React, Javascript, Java, and Go SDKs, with more on the way.
For an up-to-date list of implementations, check out the [SDK Compatibility Overview](/docs/reference/technologies/sdk-compatibility).
Download the latest release in your language of choice and try it out!
