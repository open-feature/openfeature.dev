---
slug: 'feature-flags-with-great-power-comes-great-responsibility'
title: 'Feature Flags: With Great Power Comes Great Responsiblity'
date: 2023-06-29
authors: [jakedoublev]
description: "How feature flags (& OpenFeature) helped Virtru to increase release and develeoper velocity while simultaneously minimizing their technical debt."
tags: [client, sdk, adoption]
draft: false
---

_Please note: This is a cross post from the [Virtru Blog, dated June 16, 2023 by Jake Van Vorhis](https://www.virtru.com/blog/feature-flags-with-great-power-comes-great-responsibility)._

There is an ever-present tradeoff between speed and durability in engineering. Even if you’re cooking up boxed mac n cheese, there’s a spectrum that spans bare minimum utility on one side and needless hyper-optimization to the nth degree on the other side. Nobody wants uncooked noodles with still-dry cheese powder for dinner, but they’re also not expecting a couple of bucks at the grocery store to lead to a Michelin-quality in-home dining experience. It’s about balance.

As the Engineering org and Product roadmaps grow, the question “How can we make this happen?” needs to become “How can we make this happen quickly while not harming ourselves later on?” There is a priority switch from feature enablement to enablement while minimizing new tech debt. Paying the technical debt credit card bill is always painful, so navigating the speed and durability tradeoff effectively is one of the most important challenges teams face.

Last year, a feature in one of Virtru’s newer products kicked off an exploration into Feature Flags. What follows is a recap of that journey. I hope you have your cheesy mac ready.

<!--truncate-->

## What Are Feature Flags?

[Feature Flags](https://www.atlassian.com/continuous-delivery/principles/feature-flags), also known as feature toggles, are in-code switches that evaluate at runtime based on predefined criteria to switch or toggle various potential code paths depending on flag state. That is a bit of a mouthful, but at the most basic level, they’re a commented out line of code that is intended to be uncommented at a future date when some condition is met is a rudimentary feature flag. A complex feature flag would be one where a code path of the application with specific features is conditionally enabled for a subset of users.

You’ve most likely seen basic flags like these before:
```
 // if in development, uncomment this line. Comment out for production!!

// exposeSomethingInDev();
```

or

```
// when support for xyz is available, update value to true

isXYZAvailable = false;
```

Feature flags can also contain more complex deterministic logic:

```
// enables a feature for a paid user but not for a free user

if (isPaidUser(user)) {

enableFeature();

}
``` 

Looking at those examples, you might ask “Well is every if/else code block a feature flag, then?” The distinction that makes a switch a feature flag is if the flag state and therefore the result of the logic is determined at runtime by a source of truth outside the app or service. It’ll usually look something like this:

```
const flagVal = await fetchFlagVal(“some-flag”);

if (flagVal) {

renderComponent();

}
```

Prior to our recent journey, Virtru’s feature flagging approaches varied across products and services, with some teams utilizing homegrown tools, some using environment variables and in-line expressions, and others using nothing at all. Feature flags had not been widely used because there had been no widespread effort to intentionally build and maintain a system and process.

A way to kick development and release speed up a notch had been found!

## Diving Deeper Into Feature Flags

The uses of feature flags are endless, but most fall into one of 4 categories:

1. _Rollout flags_ - For example, a flag that shows a new variation to 5% of users first, then 25%, then 100%. These flags are usually short-lived and removed once 100% of users have access to the new variation.
2. _Experiment flags_ - For example, a flag that is designed to gather data or metrics with 50% of users experiencing one flag variation and the other 50% receiving a different variation - more or less A/B testing. These flags are also usually short-lived and removed at the end of the experiment.
3. _Entitlement flags_ - For example, a flag that provides an admin-level user with additional features. These flags are usually long-lived or permanent, and it should be seriously considered whether or not this is business logic that should not live within a flag. Another example of a kind of entitlement flag could be one that causes a code-split version of an application between one with an SBOM approved for FedRAMP and one with bleeding edge packages not yet FedRAMP-approved.
4. _Operational flags_ - For example, a kill switch that turns off a resource-intensive feature under times of peak load and scale. These flags are usually long-lived or permanent. An oft-cited example is a recommendation engine on an eCommerce homepage - this might be something worth turning off on Black Friday to drop out every extra millisecond of initial load time.

A system for maintaining and evaluating Feature Flags can be as simple as a service that responds to every request with a dynamically configured set of flags based on the flag evaluation context. If the flag values are used client-side, that context is probably the user. If the flag values are consumed server-side, the environment and individual requests likely make up the flag evaluation context. Feature flagging can absolutely be a homegrown solution.

As we went down this road toward a build vs. buy decision, we weighed the paid and open source options and decided to transition away from our semi-utilized legacy homegrown solution to a paid vendor service.

With a solution in hand, our focus then shifted from what could be done with feature flags to what should be done with them. There’s an old saying that “It’s easy to see everything as a nail when all you have is a hammer,” and it was time to make sure our hammer stayed in the toolbox reserved only for nails.

## Proceed with Caution…

Feature flags are powerful tools, and with great power comes great responsibility. Let’s place 5 boolean flags in an application that are utilized to toggle features on or off. The count of potential feature variations within which to handle testing, debugging, and maintenance would not be 5 variations or even 10, but 2^5 or 32 variations. With just one additional flag placed: 64 variations.

Remember this formula:

```
(# of flags)^2 = potential unique code paths
```

Placing a flag today to quickly implement a new feature could mean double the potential test paths tomorrow for QA. If a team makes that decision 10 times and adds 10 flags, that’s potentially 2^10 different code paths, or 1024 end-to-end variations in behavior. That’s quite a bit of variation to test, debug, maintain, cover in QA, share with Support, communicate to Sales and Product, and so on.

Being quick to place feature flags and slow to remove them can result in a tangled mess of dead code paths, unmaintainable variation, flaky automated tests, and an unknown thread of execution. We started this blog with mac n cheese but now it’s all about spaghetti (code, that is).

This isn’t just theoretical, either. Here’s a use case gone wrong: in 2012, a poorly managed feature flag cost the financial firm Knight Capital [$440M in a span of about 45 minutes](https://blog.statsig.com/how-to-lose-half-a-billion-dollars-with-bad-feature-flags-ccebb26adeec). Imagine being the engineer, EM, PM, or whoever that decided to place that flag… Feature Flags make us nimble and unlock significant development speed, but those gains can be instantly erased.

The takeaway is clear: the exponential growth nature of variability requires thoughtful feature flag management.

## Feature Flags at Virtru

For Virtru’s engineering team, development team, and product roadmap, it made sense to go with [LaunchDarkly](https://launchdarkly.com/) (LD) as our Flags aaS vendor, buying instead of building this time:
* We have federal customers, and LaunchDarkly has a [FedRAMP Moderate Authorized](https://launchdarkly.com/blog/launchdarkly-fedramp-authorized/) offering that complies with our audit requirements as a 3rd party subprocessor.
* LD has a variety of language SDKs for both client-side and server-side flag calls, as well as an API
* LD’s highly available and reliable architecture takes away the need for the Virtru Ops/SRE teams to support such a performant system in a homegrown flagging solution (which frees them up to focus on maintaining great metrics for our actual products and user base)
* LaunchDarkly is featureful, with current flag support of types Boolean, String, Number, and JSON
* LaunchDarkly also has additional features that will be useful to Virtru in the future, such as gathering data on experimentation and rollouts for our Analytics team directly from the flag instead of another tool, and tracking code references to LD flags in configured repos so dead code paths and unused flags can be maintained and eliminated
* An external source of truth in LaunchDarkly means we can make dynamic changes in each environment, including production, without new PRs, builds, deployments, and releases

That last point should be double-emphasized: with LD as our managed feature flag vendor, we’re actually able to affect the behavior of our products and services in production via flag changes without going through a deployment and release lifecycle. A flag can be placed in an app, a deployment can go out, and there can be no changes to the end-user experience until a feature toggle is flipped later on changing the state. That’s powerful!

Great! We have a great Flags as a service vendor selected, so we are good to go, right? Not quite. Feedback from different teams across Virtru identified some gaps that still needed to be addressed.

First, as a security-focused organization, we take a “least access required” approach to all systems and development. While LaunchDarkly has a flag change approval flow and a change audit record within its platform, our Ops/SRE/Security teams had concerns about multiple sources of truth and levels of LD platform access privileges. We already rely on Terraform as an Infrastructure As Code provider and the decision was made to utilize a [Terraform Provider for LaunchDarkly](https://registry.terraform.io/providers/launchdarkly/launchdarkly/latest/docs) to manage LD users, projects, and even the individual flags. Most of Virtru’s engineers are not as familiar with Terraform HCL as with YAML, so we implemented a YAML API to allow our engineers to easily maintain LD flags via Terraform in YAML.

Here is a basic_example feature flag placed via our YAML API with boolean flag values across three environments in a product called tf-example: 
```
project:
name: tf-example
flags:
- name: 'basic_example'
    environments:
        development:                    
            variation: true
        staging:
            variation: true
        production:
            variation: false
```
The other benefit of managing LD flags through Terraform is the version control that comes with Git. We can maintain an auditable history of changes without adding a separate source of truth from existing infrastructure changes. A change to a flag in any environment is as simple as a quick PR to the relevant YAML file and applying the merged changes via Terraform. The app requires no new release, LD returns the updated value in flag call responses, and code paths dependent upon the flag logic “magically” start to execute.

This also relieved a second concern our teams had with implementing Feature Flags: misuse of them as holders of business logic (see entitlement flags above) rather than for dark releases or experiments. For example, it would never be a good idea to use a flag to determine if a user is an admin or not, but it’s easy to see how something like that could get considered if flags are ridiculously easy to place. Some friction is definitely a good thing! The PR approval process that is required to define flags through our YAML/Terraform implementation is the perfect amount of friction to relieve this concern.

The third and final large concern identified was that opting for a paid Feature Flag solution necessitated understanding and mitigating vendor lock-in. LaunchDarkly, like all enterprise SaaS, comes at a price. Our team felt very secure in the value of the offering today, but nobody knows what the future holds. If we utilized LaunchDarkly’s SDKs across all of our products and services and then decided to change vendors for some unknown reason in the future, it would require significant changes in every single location a flag had been placed in a code base.

There’s always an answer to a problem like that: abstraction. Lucky for us, a fairly new open source project born out of the [Cloud Native Computing Foundation](https://www.cncf.io/) (responsible for efforts like [Kubernetes](https://kubernetes.io/), [OpenTelemetry](https://opentelemetry.io/), [Prometheus](https://prometheus.io/), [Kyverno](https://kyverno.io/), and more) was designed specifically for this problem. We utilize some of these tools at Virtru already and are invested in open source both in principle and in practice with OpenTDF, so we were excited about [OpenFeature](openfeature.dev).

[OpenFeature](openfeature.dev) is a vendor-agnostic feature flagging SDK that is nimble enough to handle multiple flag vendors and provide easy switching in the future. OpenFeature promotes minimizing Feature Flag SaaS vendor lock-in as possible, especially since other flag vendors are also likely to match the OpenFeature spec. LaunchDarkly currently supports and maintains a Node.js Provider for OpenFeature and has stated its intention to continue investing effort in the future.

Our teams are now utilizing OpenFeature to abstract out our paid solution and relieve some of the vendor lock-in, and we’re excited about the future of this open-source project.

If you’ve read this far, hopefully you’ve learned something about feature flags, how they’re powerful, when and when not to use them, and how we’ve proactively approached their placement and governance at Virtru. This is intended to be a multi-part technical series, so stay tuned for more in the future about Virtru Engineering’s use of Feature Flags.
