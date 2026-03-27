---
title: "KubeCon EU 2026 Recap: In-Person Discussions and What's Next"
description: 'A recap of OpenFeature at KubeCon EU 2026 in Amsterdam. Sessions, booth conversations, and summaries from our in-person community discussions on experimentation, OFREP, flagd, AI workflows, and more.'
date: 2026-03-28
categories: ['OpenFeature', 'KubeCon', 'Feature Flags', 'CloudNative']
slug: 'kubecon-eu-2026-recap'
authors: ['jonathannorris']
image: /img/blog/2026-03-19-kubecon-eu-26/kubecon-eu-26.png
---

KubeCon EU 2026 in Amsterdam is in the books. We had a great week. Well-attended sessions, busy booth conversations, a party on a boat that never left the dock, and a series of focused in-person discussions on the future of the project. Here's a summary of the week.

<!--truncate-->

## Sessions

OpenFeature had three sessions on the schedule this year:

- [**Building Secure Package Pipelines**](https://sched.co/2EWfG): Andre Silva walked through how to build a secure open-source package pipeline at the Maintainer Summit, covering OIDC authentication, SBOM generation, cryptographic attestations, and automated releases.

- [**OpenFeature Update From the Maintainers**](https://sched.co/2EF4j): Lukas Reining, Andre Silva, Thomas Poignant, and Alexandra Oberaigner shared updates on the MCP server, the OpenFeature GitHub Action for flag cleanup, and the stable release of OFREP. The session was part of the Maintainer Track on Wednesday.

<img src={require('@site/static/img/blog/2026-03-28-kubecon-eu-26-recap/maintainer-update.jpeg').default} />

- [**18 Bluetooth Controllers Walk into a Bar**](https://kccnceu2026.sched.com/event/2CW7W): Simon Schrottner and Manuel Timelthaler gave one of the more memorable talks of the week, demonstrating OpenFeature and OpenTelemetry in action with 18 PlayStation Move controllers, tackling observability in a physical distributed system.

<img src={require('@site/static/img/blog/2026-03-28-kubecon-eu-26-recap/bluetooth-talk.jpg').default} />

Slides and recordings (when available) can be found at the session links above.

## Booth

Our kiosk (P-10B) in the Project Pavilion was busy throughout the week. We had conversations with teams already using OpenFeature in production, folks evaluating it for the first time, and contributors looking to get more involved. We even learned that OpenFeature is helping feature flag kitchen appliances, turns out your next recipe might be behind a flag. It's always valuable to hear directly from users about what's working and where the gaps are.

## In-Person Discussions

<img src={require('@site/static/img/blog/2026-03-28-kubecon-eu-26-recap/discussions.jpeg').default} />

One of the highlights of having so many maintainers and contributors in one place was the opportunity to hold focused, in-person discussions on key topics. We scheduled these throughout the week near our booth, and the turnout and quality of conversation was excellent. Below are summaries of each discussion.

### Experimentation

The experimentation discussion focused on what OpenFeature needs to better support experimentation use cases. Today, the SDK surface area for experimentation is limited to custom hooks and the tracking API, with an implicit link through the targeting key.

**Key themes:**

- **Standardized context for experimentation:** Multiple participants identified that having only a targeting key is limiting. There may be a need for well-understood metadata fields (browser, geo, device type) similar to semantic conventions in OpenTelemetry, so systems can map these consistently.

- **Evaluation metrics in the SDK:** There was interest in having the SDK produce basic evaluation metrics (e.g. per flag key, by targeting reason, unique targeting keys) that analytics vendors could consume. This could be an official hook we publish rather than new API surface, since it's buildable with hooks today.

- **Experiment grouping:** Several participants described models where experimentation is a separate concept from feature flags, with a 1-to-N mapping between experiments and flags. There's currently no standard way in OpenFeature to describe grouped flags that share targeting under a shared experiment ID. Flag metadata could carry experiment associations, but this isn't standardized yet.

- **Tracking API in OFREP:** The question of whether OFREP should have an endpoint for collecting tracking events is an open topic.

- **Making experimentation more visible:** The group agreed OpenFeature should more explicitly communicate that it supports experimentation. Better messaging, blog posts, and validation with vendors are next steps.

**Action items:**

- Gather feedback from vendors on what's missing in the SDKs
- Explore an OFREP API for tracking/event collection
- Add tracking to the OFREP demo
- Improve experimentation messaging/documentation on the website

### OFREP

The OFREP discussion covered several active topics as the protocol approaches its 1.0 target.

**Key themes:**

- **[SSE for change notifications](https://github.com/open-feature/protocol/issues/62):** The SSE proposal has been merged and implementation is starting. The goal is a generic interface for notifying OFREP clients that their configurations are stale and they need to refetch. Polling will remain as an option but won't be the default.

- **[Local caching for client-side SDKs](https://github.com/open-feature/protocol/issues/65):** Currently there's no standardized way to do caching with OFREP. A caching API needs to be defined so clients can persist configurations and know when to flush.

- **Routing and session affinity:** The current POST-based API makes load balancing harder since routing requires parsing the body. The group discussed adding a hash of the targeting key to a request header to enable routing without exposing PII. An ADR will be created for this.

- **Tracking support:** The group discussed whether OFREP should define an event endpoint. Pre-aggregation on the client side, configurable flush intervals, and bulk payloads were discussed as implementation considerations. The evaluation response could include the events endpoint URL, letting the provider enable tracking conditionally.

- **OpenAPI vs gRPC:** Some participants noted that their organizations require gRPC for public APIs. An issue will be opened to explore gRPC definitions for OFREP.

- **Timeline:** The target is OFREP 1.0 by Q2 2026.

**Action items:**

- ADR for targeting key hash in request headers
- Create issue for tracking endpoint in OFREP
- Open issue for gRPC definitions
- Reintroduce OFREP SIG meetings

### flagd

The flagd discussion covered both the current feature roadmap and a longer-term vision for the evaluation engine.

**Current priorities:**

- **Feature set, precision, nesting, and rollouts:** Todd outlined the active work areas. There's consensus on what needs to land, including fractional precision improvements.

- **Vision: stay minimalistic.** The group reaffirmed that flagd should remain focused. There were discussions around making manual writing of rule sets easier and how targeting rules are authored with rule-builders.

**Pain points:**

- OpenTelemetry integration gaps
- Inconsistent behavior across language implementations
- Missing language support (e.g. Perl)
- Inconsistent reason codes across languages

**Shared evaluation engine:**

The biggest topic was reducing cross-language inconsistencies by sharing the evaluation engine implementation. The group explored two approaches:

- **WASM:** Could provide a single engine across all languages, but there are real challenges around type behavior between languages, and support across platforms. The value of having a single shared code-base is real; how do we achieve it?

The consensus was to drive toward a **v1.0 milestone with defined test cases** for evaluation behavior, ensuring consistency regardless of implementation approach.

**Action items:**

- Performance benchmarks and load testing, gate PRs on performance where applicable
- Enhance the ADR for the sync API; modularize and define what services are actually needed
- Changes to the sync API for 1.0 (agreed in principle)
- Case-insensitive matching for evaluation
- Explore CNCF support for performance testing on dedicated machines

### OTel Observability

The observability discussion focused on deepening the integration between OpenFeature and OpenTelemetry.

**Key themes:**

- **Move OTel into the SDKs:** The group proposed moving telemetry from hooks into the SDKs natively. This would mean traces and metrics are built-in rather than requiring separate hook setup. Likely makes sense to include it in the flagd providers by default.

- **Native vs hooks:** There's a question of whether to extend the SDK API to include traces and metrics directly, or continue with the hook-based approach.

- **Connecting flags and telemetry:** A push for metrics semantic conventions specific to feature flags.

- **flagd observability:** Check existing ADRs and add OTel support to flagd providers directly. An ADR for event tracking is needed, including how computation/aggregation should work in flagd.

**Action items:**

- Start a SIG focused on SDK telemetry coverage
- Stabilize telemetry conventions to "stable" status
- Push for feature flag metrics semantic conventions in OTel
- ADR for event tracking and computation in flagd

### AI Workflow Integrations

The AI discussion explored how OpenFeature can better serve AI application developers and how the project itself can leverage AI tooling.

**OpenFeature for AI developers:**

- **MCP and Skills:** The OpenFeature MCP server and related tooling can help AI application developers work with feature flags more naturally. The group discussed how to make these tools more discoverable and useful.

- **Experimentation for AI workflows:** How can developers use OpenFeature's experimentation capabilities to tweak models and manage AI workflow rollouts? This ties back to the experimentation discussion.

- **Standards for flag creation:** Can we define a standard way for AI tools to create and manage feature flags? This would enable tighter integration with AI-assisted development workflows.

**OpenFeature using AI:**

- Engage with the community to understand where AI tooling (e.g. write permissions, automated flag management) can add value to the project itself.
- Validate that the community sees value in these directions before investing heavily.

### Expanding the TC

The group discussed growing the Technical Committee to ensure broader representation and sustainable governance.

- **Target size:** The consensus is that the TC needs at least 5 members (currently 3).
- **Recruitment:** Several maintainers will reach out to potential candidates within their organizations and the broader community. The goal is to bring in people who are already active contributors.
- **Vendor representation:** The group would like to see representation from more vendors who are adopting OpenFeature, though timing depends on their level of involvement in the project.

## What's Next

The discussions in Amsterdam gave us good direction on several fronts. Expect to see movement on OFREP 1.0, experimentation support, the shared flagd evaluation engine, and deeper OTel integration through the rest of the year. If any of these areas interest you, the best way to get involved is to join the relevant discussions:

- [CNCF Slack #openfeature](https://cloud-native.slack.com/archives/C0344AANLA1)
- [Bi-weekly community meetings](/community/#community-meetings)
- [GitHub](https://github.com/open-feature)

Thanks to everyone who visited the booth, attended sessions, or joined our discussions throughout the week. We'll be at [KubeCon NA 2026](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) in Salt Lake City this November. Hope to see you there.
