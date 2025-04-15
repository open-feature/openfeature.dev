---
slug: "tldr-kubecon-london"
title: "TLDR: KubeCon EU 2025"
date: 2025-04-16
authors: [weyert]
image: /img/blog/2025-04-16-tldr-kubecon-london/london.png
description: "KubeCon EU 2025 Summary"
tags: [kubecon, cncf, session, talk, booth, "OpenFeature summit", "co-located"]
draft: false
---

Hello from the OpenFeature community! This post wraps up KubeCon EU 2025 and The OpenFeature Summit.

<!-- truncate -->

<img src={require('@site/static/img/blog/2025-04-16-tldr-kubecon-london/london.png').default} />

## 1. TLDR: KubeCon EU 2025

This year's KubeCon EU was located in London, where I happen to live, giving me the opportunity to attend KubeCon EU for the first time. I had a wonderful time finally meeting fellow OpenFeature maintainers face-to-face and connecting with users of OpenFeature.

This year we saw a growth of interest in OpenFeature, and heard stories of people using OpenFeature in their own products. The OpenFeature booth at the project pavillion buzzed with activity, plenty of knowledge shared and the power of OpenFeature shared with interested people.

For a second time at KubeCon our dedicated, co-located event, <a href="https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/co-located-events/openfeature-summit">The OpenFeature Summit</a> took place the day before KubeCon EU 2025 itself. The summit featured great talks and speakers. I would like to point of a few of these talks:

- <a href="https://colocatedeventseu2025.sched.com/event/1u5kz/openfeatures-positive-impact-on-confidence-at-dynatrace-simon-schrottner-todd-baert-dynatrace">▶️ OpenFeature’s Positive Impact on Confidence at Dynatrace - Simon Schrottner &amp; Todd Baert, Dynatrace </a> by Simon Schrottner &amp; Todd Baert from Dynatrace gave a great presentation about how they internally use the different OpenFeature offerings like flagd, OpenFeature SDKs

- <a href="https://colocatedeventseu2025.sched.com/event/1u5l8/canary-deployments-are-a-myth-true-progressive-delivery-occurs-via-openfeature-bob-walker-octopus-deploy">▶️ Canary Deployments Are a Myth - True Progressive Delivery Occurs Via OpenFeature - Bob Walker, Octopus Deploy</a> by Bob Walker from Octopus Deploy described how they solved they delivery problems using OpenFeature and feature flags. A deep dive how flags can help with deploying releases in a safe and convenient manner. Tip! A longer version of this talk is available as part of KubeCon EU 2025.

- <a href="https://colocatedeventseu2025.sched.com/event/1u5lH/cl-lightning-talk-openfeature-multi-provider-enabling-new-feature-flagging-use-cases-jonathan-norris-devcycle">▶️ Lightning Talk: OpenFeature Multi-Provider: Enabling New Feature Flagging Use-Cases</a> by Jonathan Norris from DevCycle. A talk about ways you can use the new Multi-Provider to your benefit, like to migrate away from feature flag solution to your new one.

- <a href="https://colocatedeventseu2025.sched.com/event/1u5lB/challenges-in-distributed-feature-flag-evaluation-and-how-to-solve-them-lukas-reining-christopher-bohlen-codecentric-ag">▶️ Challenges in Distributed Feature Flag Evaluation and How To Solve Them Lukas Reining &amp; Christopher Bohlen, codecentric AG </a> by Lukas Reinig &amp; Christopher Bohlen from codecentric AG. In this talk we got into the nitty gritty of feature flags that span multiple services, and saw multiple proposals how we can ensure the feature flag evaluations are consistent between the services.

## 2. Introducing OpenFeature CLI

During the conference we also introduced our latest creation, OpenFeature CLI, which streamlines how feature flags are managed within your codebase. The tool generates a type-safe OpenFeature client based on a flags manifest file that either can be pulled from supported feature flag systems or sourced from a JSON file.

With OpenFeature CLI, developers can:
- Generate a strongly-typed client, custom-built for your specific feature flags, in Typescript, Python or C# (with more to come!)
- Validate flag configurations against schemas
- Seamlessly integrate with existing CI/CD pipelines

The CLI represents our commitment to improving developer experience and making feature flag management more accessible to teams of all sizes. It's designed to work alongside your existing tools and workflows with minimal friction.

In a separate article, we will dive deeper into the goals of `openfeature-cli` and how it can improve a developer's experience working with feature flags. Stay tuned for a hands-on tutorial.

## 3. Conclusion

KubeCon EU 2025 was a milestone event for the OpenFeature community. The growing adoption of OpenFeature across diverse organizations demonstrates the industry's recognition of standardized feature flagging as a critical component of modern software delivery. 

We'd like to thank everyone who visited our booth, attended the summit, or participated in OpenFeature-related discussions throughout the conference. Your enthusiasm and feedback drive our project forward. 

We'd love to welcome you into [the OpenFeature community](/community/). You can join our [Slack channel](https://cloud-native.slack.com/archives/C0344AANLA1), attend our [bi-weekly community meeting](/community/#community-meetings) or just check out our [GitHub repository](https://github.com/open-feature).