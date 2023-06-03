---
slug: 'feature-flags-if-statements'
title: 'Feature Flags are just if Statements, Right?'
date: 2023-06-01
authors: [agardnerit]
description: 'Feature Flags are Just if Statements, Right?'
keywords: [feature flags, openfeature]
tags: [feature flags]
draft: false
---

Most feature flag explainers begin by explaining that feature flags are equivalent to environment variables.

While that’s true (to a point), feature flags wouldn’t be as versatile or as popular as they are, if that’s all they were. Indeed, you wouldn’t need a feature flag – you could easily achieve the same thing with an environment variable.

<!--truncate-->

<img src={require('@site/static/img/blog/feature-flags-if-statements/feature-flag-if.png').default} />

In code, the above would look like this:

```shell
if isPremiumMember {
  return v2
} else {
  return v1
}
```
Now try modeling this in code:
- If user is premium and located in Europe = v2 (purple)
- If user is premium and located in the US = v3 (red)
- If user is premium and located in Australia = v4 (orange)
- Everyone else gets v1 (green)

That’s 2 variables. Imagine how many variations a real system has. Now imagine trying to update these conditions in real time, without a redeployment.

<img src={require('@site/static/img/blog/feature-flags-if-statements/feature-flag-context.png').default} />

The real power of feature flags:

- Simple or complex: Flag rules can be as simple or as complex as you wish. This makes getting started easy with plenty of room to grow and expand.
- Separation of concerns: Feature flags allow a deployment without a release. All new features are placed behind flags and those flags are disabled during deployment.
- Shortcut to continuous delivery: If you can deploy anything at any time with zero risk, why not do it?
- Separation of responsibilities: Product managers take responsibility for feature flags, leaving DevOps teams to deal with their area of responsibility.

## So, are Feature Flags if Statements?
No, feature flagging is so much more powerful and dynamic than environment variables or if statements. But if you’re already using if statements, you already have enough knowledge to take your environment variables and if statements to the next level with feature flags.
If you’re stuck on the environment variable + if statement metaphor, feature flags are a very flexible if statement that you can **target**, **update**, **toggle** and **gain observability over**, in **real time** without a **re-deployment**.

## Where Do I Start?
Start with the OpenFeature hands-on tutorials.

These tutorials are provided by Killercoda, a third-party in-browser learning platform.

All tutorials are free to use and the [tutorial source code is open](https://github.com/open-feature/killercoda).

### 1: OpenFeature Demo
Never encountered feature flags?
This is the 30,000ft view showing the power and versatility of feature flags.
[Start here](https://killercoda.com/open-feature/scenario/openfeature-demo).

### 2: An Open Source Feature Flag Backend
Decided to adopt feature flags?

You will need a flag "backend" evaluation engine.

Any open source tool or vendor can support OpenFeature and many do. Check the [technologies section](https://openfeature.dev/docs/reference/technologies/) to see what tools and vendors are supported in your language.

If you don't already use a flag evaluation system, flagd is a good place to start without having to code your own backend solution. Try the [flagd demo on killercoda](https://killercoda.com/open-feature/scenario/flagd-demo).

### 3. Instrument Your Application

Whether you've chosen to use a community project, gone with a vendor solution, or developed a custom OpenFeature-compliant in-house solution, by now your backend flag evaluation infrastructure is running.

Your application must now be modified to interact with your chosen flag evaluation system, via the OpenFeature SDK.

The [Five minutes to feature flags](https://killercoda.com/open-feature/scenario/five-minutes-to-feature-flags) tutorial walks through how to do this.

### 4: Feature Flags on Kubernetes?
Are you Kubernetes-native and want to manage and use feature flags entirely on Kubernetes?

Any open source or vendor tool which offers OpenFeature compliant k8s feature flagging will work.

The [Operator tutorial](https://killercoda.com/open-feature/scenario/openfeature-operator-demo) shows one option, using flagd. Flagd leverages Custom Resources to manage feature flags via GitOps and make feature flags available to your pods via annotations.