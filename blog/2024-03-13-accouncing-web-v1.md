---
slug: "web-v1-announcement"
title: "OpenFeature Web SDK v1"
date: 2024-03-19
authors: [beeme1mr]
description: "Announcing version 1.0 of the OpenFeature Web SDK"
tags: [release, client, spec, specification, web, mobile, sdk, react]
draft: false
---

We are excited to announce the availability of the [OpenFeature Web SDK v1](/docs/reference/technologies/client/web/).
The Web SDK represents a culmination of years of research and industry consensus.
It was built from the ground up to be performant, powerful, and flexible while providing broad support for your favorite feature management tool or in-house solution.

<!--truncate-->

## Going full stack

Folks have been asking for client-side support since the beginning of OpenFeature.
Since web-based applications represent the vast majority of applications that people interact with on a daily basis, we are thrilled to provide teams with a consistent feature flagging experience across their entire stack.
The Web SDK is a foundational SDK that can be used on its own but also lays the groundwork for framework-specific implementations.
Having a vendor-neutral Web SDK, provides an opportunity to a wide array of technologies that can be used by everyone.
The web framework ecosystem is massive and constantly evolving, it’s more important than ever to come together to ensure feature flagging is accessible to all.

## Web vs Server

At first glance, using a feature flag on the web may appear similar to server-side usage.
In many cases, this is true! However, there are subtle, yet important differences.
In OpenFeature, we have distilled these two different approaches down to static and dynamic context paradigms.
The static context paradigm is commonly used on a client, and it’s the paradigm supported by the Web SDK.
The rationale for introducing this paradigm can be found in our [Catering to the client-side](/blog/catering-to-the-client-side/) blog.

Feature flagging commonly leverages relevant contextual data like a user id, location, or browser type to enable powerful targeting capabilities.
In OpenFeature, we refer to this as the evaluation context.
On the web or mobile, evaluation context typically remains constant for the duration of a user session; this is known as the static-context paradigm.
This paradigm represents a simple, flexible, and powerful way of thinking about client-side feature flag evaluation.
In particular, it was designed to support robust caching, with consideration for slow networks, and with high fault tolerance.
This ensures minimal overhead and consistently fast feature flag evaluations.

## Impact beyond the client

It was of the utmost importance to ensure consistency across vendors and tools.
While defining the static context paradigm in the OpenFeature specification, we identified opportunities to simplify provider development.
One such example was making the [providers stateless](/blog/reconciling-with-state/#wider-implications-stateless-providers).
This moves the responsibility to the SDK instead of the provider author.
Making providers easier to develop and ensuring consistent behavior across implementations.

## What's next?

The Web SDK is great on its own but becomes even more powerful and user-friendly when leveraging framework-specific functionality.
The [React SDK](/docs/reference/technologies/client/web/react/) is an excellent example of this.
It abstracts the implementation details of supporting features like automatic component re-rendering and [built-in suspense](https://react.dev/reference/react/Suspense) support.
We plan on supporting many more frameworks including Angular, Vue, Svelte, and more.

While this post is focused on the Web SDK, we haven’t forgotten about mobile.
Our friends at Spotify recently donated an initial [Kotlin](/docs/reference/technologies/client/kotlin/) and [Swift](/docs/reference/technologies/client/swift/) SDK.
These comprise the primary technologies in the mobile space, and in concert with the Web SDK, cover the majority of client platforms.

Finally, OpenFeature has been hard at work defining the [OpenFeature Remote Evaluation Protocol (OFREP)](https://github.com/open-feature/protocol).
The goal of this initiative is to standardize how feature flags can be evaluated over a network.
This will enable seamless interoperability between tools and vendors that support the protocol.

## Get involved

OpenFeature is comprised of feature flag experts and enthusiasts.
If you'd like to [get involved](https://github.com/open-feature/community), don't be shy! Join a community call, or join the #OpenFeature [CNCF Slack](https://slack.cncf.io/) channel, and help us build a great open standard that benefits the industry.

The [Web SDK](https://openfeature.dev/docs/reference/technologies/client/web/) is available now. Give it a shot and let us know how it goes.
We can’t wait to see what you build!
