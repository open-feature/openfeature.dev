---
slug: "vercel-flags-sdk-adapter"
title: "Vercel Flags SDK - OpenFeature Adapter"
date: 2025-03-20
authors: [jonathannorris]
description: "Announcing Vercel Flags SDK OpenFeature Adapter"
tags: [vercel, "flags sdk", "next.js", "openfeature adapter"]
draft: false
---

We are happy to share the news that Vercel's new open-source [Flags SDK](https://flags-sdk.dev/) for Next.js and SvelteKit has shipped with a native [OpenFeature Adapter](https://flags-sdk.dev/docs/api-reference/adapters/openfeature).
<!--truncate-->
The Flags SDK is an exciting development for standardizing feature flagging in Next.js and SvelteKit, as it takes an [opinionated approach](https://vercel.com/blog/flags-as-code-in-next-js) to how feature flags should be used:
- Feature Flags are just functions
- Feature Flags are only evaluated on the server-side, no client-side flag evaluation is supported to improve performance, avoid layout shifts, and other non-optimal user experiences.
- Integration with the Vercel Toolbar, allows local overrides of flag values during development, testing and even in production.

### OpenFeature Provider Example

```tsx
// flags.ts
import { createOpenFeatureAdapter } from "@flags-sdk/openfeature"
import { dedupe, flag } from "flags/next";
import type { EvaluationContext } from "@openfeature/server-sdk";

// pass an init function, and return the client
const openFeatureAdapter = createOpenFeatureAdapter(async () => {
  const provider = new YourProviderOfChoice()
  await OpenFeature.setProviderAndWait(provider);
  return OpenFeature.getClient();
});

const identify = dedupe((async ({ headers, cookies }) => {
  // Your own logic to identify the user
  // Identifying the user should rely on reading cookies and headers only, and
  // not make any network requests, as it's important to keep latency low here.
  const user = await getUser(headers, cookies);
 
  const context: EvaluationContext = {
    targetingKey: user.id,
    // .. other properties ..
  }; 
  return context;
}));

export const exampleFlag = flag<boolean, EvaluationContext>({
  key: "example-flag",
  defaultValue: false,
  identify,
  adapter: openFeatureAdapter.booleanValue(),
});
```

```tsx
// page.tsx
import { exampleFlag } from "../flags";

export default async function Page() {
  const banner = await exampleFlag();
  return (
    <div>
      {banner ? <Banner /> : null}
      {/* other components */}
    </div>
  );
}
```

This adapter will allow most Node.js OpenFeature Providers to work with the Flags SDK, though there may be some compatability issues with certain Node.js OpenFeature Providers with the [Vercel Edge Runtime](https://vercel.com/docs/functions/runtimes/edge) that should be tested per-provider.

### The Value of Open Standards

The integration demonstrates a key aspect of OpenFeature's vision - [moving from effort(N*M) to effort(N+M)](https://deploy-preview-1055--openfeature.netlify.app/blog/openfeature-a-standard-for-feature-flagging/#from-effortnm-to-effortnm).
OpenFeature delivers a standardized feature flagging SDK, already implemented by most providers, and Vercel can focus on building a wonderful framework-specific developer experience on top of that foundation.

### Future of Next.js Support

We are excited to continue working with the team at Vercel that is leading this effort, and to help expand the efforts of open standards in feature flagging for Next.js and SvelteKit.
One of the visions of OpenFeature has always been deeper integration into the language / framework level as the adoption of OpenFeature continues to grow, we are happy to work with language and framework authors who strive to offer feature flagging built-in.

While the Flags SDK is offering Next.js and SvelteKit developers with an opinionated and performance optimized open-source feature flagging SDK, we recognize that its structure may not work for all Next.js developers out there relying on a mixture of client-side rendering in their applications.
If you are knowledgeable about Next.js and would like to help OpenFeature develop our Next.js SDK, please reach out to us in the [CNCF #openfeature Slack](https://openfeature.dev/community/#discussions).

If you'd like to test out the Flags SDK OpenFeature Adapter check out their [example project](https://vercel.com/templates/next.js/flags-sdk-openfeature).
