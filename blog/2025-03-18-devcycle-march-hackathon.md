---
slug: "devcycle-march-2025-hackathon"
title: "DevCycle March 2025 - OpenFeature Hackathon"
date: 2025-03-18
authors: [jonathannorris]
description: "DevCycle March 2025 OpenFeature Hackathon"
tags: [devcycle, hackathon]
draft: false
---

A few times a year at DevCycle, we hit pause on our usual work, push aside our roadmaps, and dive into a few days of rapid experimentation and collaboration.
For our first hackathon of 2025, we opted for an **OpenFeature-theme** —a chance to explore new ideas, test bold concepts, and build something innovative for the OpenFeature ecosystem together.
<!--truncate-->

This year, teams tackled projects ranging from OpenFeature CLI improvements to using OpenFeature Remote Evaluation Protocol with CloudFlare Workers.
Let's take a closer look at how our team hacked, what we learned, and why these projects matter.

## DevCycle's Hackathon Projects

<img src={require('@site/static/img/blog/2025-03-18-devcycle-march-hackathon/devcycle-march-2025-hackathon.jpg').default} />

### OpenFeature Remote Evaluation Protocol with Cloudflare Workers

At DevCycle we were an early supporter of the [OpenFeature Remote Evaluation Protocol (OFREP)](https://openfeature.dev/specification/appendix-c), and long time [Cloudflare Workers](https://developers.cloudflare.com/workers/) user, we were curious if we could use the OFREP API as a bridge interface to better support Feature Flags in these edge environments.
As one of our hackathon projects, Elliot from our team built a DevCycle OFREP Worker that we could publish for customers to run in their own environment and use a [service binding](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/) to bind this worker to any of their own internal workers.

This implementation provides a Cloudflare Worker template that synchronizes and caches DevCycle flags configuration within your Cloudflare environment.
The worker fetches the flag configuration from the DevCycle's CDN once, which is served by Cloudflare's CDN / R2, and then processes the project configuration locally to evaluate flags for individual users.
This means that feature flags can be accessed almost instantaneously within any Worker in your environment, eliminating processing delays and reducing external API calls.

Then, in your internal worker, you can use the existing OpenFeature SDKs with the OFREP Provider to bind the fetch call to the DevCycle OFREP Worker:

```tsx
import { OpenFeature } from '@openfeature/server-sdk'
import { OFREPProvider } from '@openfeature/ofrep-provider'

const provider = new OFREPProvider({ 
    baseUrl: 'https://ofrep-bucketing-worker.devcycle.com', 
    fetchImplementation: (input: RequestInfo | URL, init?: RequestInit) => env.OFREP_BUCKETING.fetch(input, init),
    headers: [
        ['Content-Type', 'application/json'],
    ]
})
await OpenFeature.setProviderAndWait(provider);
const client = OpenFeature.getClient();
```

Integrating OFREP with Cloudflare Workers offers a scalable and high-performance solution for feature flag evaluation at the edge built on open standards.
This was a great demo during our Hackathon; there is still some work to do to productize [this OFREP worker](https://github.com/DevCycleHQ-Sandbox/OFREP-bucketing-worker); reach out to us if you think this is an interesting use-case for OFREP as we continue to work on it.

### OpenFeature CLI Contribution

One of our strong beliefs at DevCycle is that strongly typed feature flags are required for teams using feature flags at scale across a large codebase.
We've supported a `dvc generate types` command in our CLI for a little while, which generates [Typescript Types](https://docs.devcycle.com/sdk/client-side-sdks/react/react-typescript/) for our DevCycle SDKs.
When we heard about the development progress of the [OpenFeature CLI](https://github.com/open-feature/cli) in generating types for OpenFeature SDKs, we had a keen interest in supporting its development.
While the OpenFeature CLI is in its early development, type generation for Go and React are currently functional, however there wasn't a way yet for a vendor to integrate with the command.

The `openfeature cli generate react` command runs by generating a typed interface for your OpenFeature SDK from a known list of flags from a standard flags manifest file.
To support this standard as a vendor, the CLI would need a way of pulling and syncing the flags manifest file with a vendor's platform.
Jason from DevCycle stepped in and created an `openfeature cli pull` method to pull flag data from DevCycle's API and generate a manifest file for the the CLI to use.

```bash
> openfeature cli pull
> openfeature cli generate react
```

will result in an `openfeature.ts` file with populated variable hooks:

```tsx
'use client';

import {
  type ReactFlagEvaluationOptions,
  type ReactFlagEvaluationNoSuspenseOptions,
  type FlagQuery,
  useFlag,
  useSuspenseFlag,
} from "@openfeature/react-sdk";

/**
* 
* 
* **Details:**
* - flag key: `a-newer-feature`
* - default value: `false`
* - type: `boolean`
*/
export const useANewerFeature = (options?: ReactFlagEvaluationOptions): FlagQuery<boolean> => {
  return useFlag("a-newer-feature", false, options);
};

/**
* 
* 
* **Details:**
* - flag key: `a-newer-feature`
* - default value: `false`
* - type: `boolean`
*
* Equivalent to useFlag with options: `{ suspend: true }`
* @experimental — Suspense is an experimental feature subject to change in future versions.
*/
export const useSuspenseANewerFeature = (options?: ReactFlagEvaluationNoSuspenseOptions): FlagQuery<boolean> => {
  return useSuspenseFlag("a-newer-feature", false, options);
};

...
```

We are excited to keep working on the CLI with the folks from Dynatrace, Google Cloud and others who are leading this effort.
[Our PR adding the pull command](https://github.com/open-feature/cli/pull/79)

### Codemod: Convert Codebase from Vendor SDK to OpenFeature SDK

At DevCycle, we've been interested in building a [Codemod](https://codemod.com/) for a while; we connected with the Codemod team a while back and thought it could help us build migration tools for customers looking to convert their usage over to OpenFeature SDKs from vendor SDKs.
Codemod has seen great adoption from teams looking to upgrade to the latest versions of React or officially supported upgrade paths for example [Nuxt 3 → 4](https://codemod.com/blog/nuxt-announcement#nuxt-4-migration).

Finally, in this hackathon, we got a chance to play with their tooling and publish a codemod.
Think of the codemod platform as tooling around open-source code transformation tools like [jscodeshift](https://github.com/facebook/jscodeshift), plus some AI-powered tooling to generate codemods, and an NPM-like repository for distributing codemods.

For our first set of codemods, we wanted to help teams transition their codebases from DevCycle or Launchdarkly Node.js SDKs to using the OpenFeature SDK with the OpenFeature Provider from the vendor.
To do this we discovered it's easier to break down the problem into smaller testable steps and then run all the codemods together in an workflow:

- [Update Imports CodeMod](https://codemod.com/registry/devcycle-to-openfeature-nodejs-update-imports) - transforms file and packages imports to use OpenFeature + Provider.
- [Initialization Transform](https://codemod.com/registry/devcycle-to-openfeature-nodejs-initialization-transform) - transforms the SDK initialization from using `initializeDevCycle()` to setting up the `DevCycleProvider` and creating the OpenFeature Client
- [User Context Transform](https://codemod.com/registry/devcycle-to-openfeature-nodejs-user-context-transform) - updates `DevCycleUser` to `EvaluationContext` objects, rename `user_id` param to `targetingKey`
- [Variable Transform](https://codemod.com/registry/devcycle-to-openfeature-nodejs-variable-transform) - replaces DevCycle `variableValue()` and `variable()` calls with `get<Type>Value()` and `get<Type>Details()` calls to OpenFeature

After installing codemod: `npm i -g codemod`, these can be run using:

```bash
codemod devcycle-to-openfeature-nodejs-workflow
```

The codemod CLI will download the latest version of the codemods and run them against your codebase.

<img src={require('@site/static/img/blog/2025-03-18-devcycle-march-hackathon/codemod.png').default} />

These codemods are a great starting point for anyone looking to do much of the heavy lifting updating a codebase from DevCycle or Launchdarkly Node.js SDKs to OpenFeature.
We are interested in feedback from the community about the value of these codemods and if we should continue developing them for more languages / vendors, as well as if these codemods would make sense as an OpenFeature-supported project.

### Docusaurus OpenFeature Wrapper

Docusaurus is a popular framework for building documentation websites, making it easy to create and maintain interactive docs using Markdown and React.
Since both [DevCycle](https://github.com/DevCycleHQ/devCycle-docs) and [OpenFeature](https://github.com/open-feature/openfeature.dev) rely on Docusaurus for their documentation, integrating feature flagging directly into the platform makes perfect sense.
With this approach, documentation can dynamically update based on feature flags, allowing teams to release code and docs together—an essential capability for feature-driven development.

For the OpenFeature Hackathon, one of our engineers, Parth, built an OpenFeature Docusaurus plugin, leveraging the OpenFeature React SDK and flagd to enable feature management within documentation sites.
He created a [Docusaurus provider](https://github.com/DevCycleHQ-Sandbox/docusaurus-openfeature-provider) and applied it to a [barebones Docusaurus site](https://github.com/DevCycleHQ-Sandbox/sample-docusaurus) to showcase its functionality.
The plugin allows developers to use feature flags to dynamically toggle sections of documentation, ensuring content remains in sync with evolving product features.
By integrating OpenFeature, this project bridges the gap between documentation and feature flagging, improving flexibility, maintainability, and release coordination for teams using Docusaurus.

### DevCycle Provider Updates for Go, .NET & Ruby

At DevCycle, we've been supporting OpenFeature for a couple of years now, and as a part of this hackathon, Jamie from our team took the time to review our OpenFeature providers across our SDKs to make sure we are up-to-date with the latest OpenFeature SDK features.
This included adding event tracking support, and handling initialization/close when applicable.

We also worked on building and publishing our much requested [DevCycle OpenFeature Ruby Provider](https://docs.devcycle.com/sdk/server-side-sdks/ruby/ruby-openfeature).
We strive to have OpenFeature included in all the SDKs DevCycle support for our customers, only Next.js / iOS / Android / React Native / Flutter / Roku… left for full support.

### Dogfooding OpenFeature SDK Nest.js SDK + Providers

In the spirit of dogfooding OpenFeature and our own Providers, Kaushal from our team took up the task of updating the usage of DevCycle's Nest.js SDK in our main API service to use the [OpenFeature Nest.js SDK](https://openfeature.dev/docs/reference/technologies/server/javascript/nestjs/) with [DevCycle's Nest.js Provider](https://docs.devcycle.com/sdk/server-side-sdks/nestjs/nestjs-openfeature).

To accomplish this, we added a wrapper service that used a single instance of the OpenFeature Client and made it available across our Nest.js service.
This simple migration allowed the OpenFeature Client to replace any existing calls to DevCycle's SDK.

One of the learnings from this work is that in our API development we depended on several Nest.js decorators that made our feature flagging of API endpoints simpler:

- `@RequireFlagsEnabled(["flag1", "flag2"], ForbiddenException)`
  - This would check if the targeting context evaluated multiple Boolean values to true for all the flags passed in else return the exception (default exception of `NotFound`)
- `@RequireFlagValues({ "flag1": "apples", "flag2": true }, ForbiddenException)`
  - This would check if the targeting context matched multiple flags to the corresponding values to true for all the flags passed in, else return the exception (default exception of `NotFound`)

We started a [PR here](https://github.com/open-feature/js-sdk/pull/1159) to enhance the Nest.js SDK with these decorators.

We also lean heavily on the mock interfaces that our DevCycle Nest.js SDK publishes to mock/set flag values to test different branching code paths in our API service; this would be a useful addition to make testing all the OpenFeature SDKs easier.
It was a great learning experience to dogfood the OpenFeature SDKs and our Providers, and it inspired us with many new ideas of how to contribute to these SDKs in the future.

### Projects that Didn't Make the Cut This Time Around

- **[on roadmap] Evaluation Reasons for SDKs** – Enhancing our SDKs with evaluation reasons, bringing us closer to full OpenFeature spec compliance.
- **[on roadmap] Feature Flag Observability** – Improving insights into how feature flags impact performance and decision-making.
- **Add Tracking support to more SDKs** - [OpenFeature SDK Trackking Support](https://openfeature.dev/docs/reference/technologies/sdk-compatibility#server-side-sdks)
- **Multi-Provider Expansion** – Bringing multi-provider support to more languages, ensuring flexibility for developers worldwide.

And many more!
Each project aimed to strengthen the OpenFeature ecosystem and provide better tools for developers.
Let us know what projects you found the most interesting and we should continue developing further.
