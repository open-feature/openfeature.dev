---
title: "A Percentage Is Not a Rollout"
description: "Fractional evaluation determines which users or requests see a change at a configured proportion. It does not decide when exposure should advance, pause, or roll back."
date: 2026-08-09
categories: ["OpenFeature", "Feature Flags", "Progressive Delivery", "Reliability"]
slug: "a-percentage-is-not-a-rollout"
authors: ["1991santhu"]
---

Feature flags are a common mechanism for progressive delivery, and fractional evaluation is how the
slicing gets done. Ship the change behind a flag, give it five percent, watch, go to twenty-five,
then fifty, then all. It is a familiar playbook and it works.

Look closely at that sequence, though, and notice what the evaluation API is actually doing. It
answers which variant a given evaluation context receives under the current configuration. It does
not decide whether or when that configuration should change.

That is a real gap. It is not OpenFeature's fault, and being precise about where it sits matters.

<!--truncate-->

Three layers are easy to conflate, so it is worth separating them before going further:

- **OpenFeature** standardizes the application-facing evaluation API.
- **Providers** implement flag resolution.
- **A flag-management control plane or delivery controller** owns configuration changes and rollout
  orchestration.

Most of what follows is about where the boundary between the first and the third sits.

## What the specification actually covers

The [glossary](https://github.com/open-feature/spec/blob/main/specification/glossary.md) defines
fractional evaluation, and the
[evaluation-context section](https://github.com/open-feature/spec/blob/main/specification/sections/03-evaluation-context.md)
supplies the inputs that providers may use for it. The specification does not require providers to
support fractional evaluation, and it does not standardize a bucketing algorithm.

flagd shows how much is left to the provider. Its
[`fractional` operation](https://flagd.dev/reference/custom-operations/fractional-operation/) is a
custom JsonLogic operation that hashes a bucketing value with murmur3 and maps the result onto
variants by relative weight, and by convention the bucketing value is the flag key concatenated with
a targeting property so that two flags do not bucket the same subject identically. Every one of those
choices, the hash function, the seed convention, the use of relative rather than absolute weights, is
flagd's rather than the specification's. A provider hashing a different value, or using a different function,
is equally conformant and will place a different set of subjects in the exposed cohort at the same
stated percentage. Many providers implement some form of fractional evaluation, but their allocation
algorithms and portability guarantees may differ.

What no part of the specification addresses, deliberately, because it is not an evaluation concern,
is what should *happen next*. There is no notion of a rollout that progresses, no condition under
which the proportion should increase, and no state in which a rollout has been halted. The percentage
is a value, not a process.

That boundary is defensible. OpenFeature is an evaluation API, explicitly independent of any
particular flag management system, and progression logic legitimately belongs above it. The
consequence is still worth saying out loud: the evaluation API standardizes how applications request
and receive evaluation results, while both the allocation itself and rollout progression remain
outside it, in providers and control planes respectively, and vary by platform.

## The two halves of a canary

Borrow the vocabulary from deployment tooling for a moment, because it makes the missing piece
obvious. A canary release has two independent parts:

**Exposure.** Which slice of traffic sees the new thing. Feature flags can make exposure sticky using
stable evaluation context such as a user, tenant, device, session, or service identifier.

**The gate.** The condition under which exposure increases, holds, or reverses. Concretely: watch a
signal for a defined window, promote if healthy, roll back if not, and do it without a human.

Progressive delivery controllers like Flagger and Argo Rollouts can coordinate both when connected to
traffic-routing and metrics systems, querying a metrics backend across an analysis window and
promoting or rolling back against declared thresholds. Their automated analysis and rollback
capabilities depend on those configured integrations.

The standard evaluation API gives you the first half. Whether you have the second depends entirely on
what sits above it, which is worth knowing rather than assuming. The failure mode is the slow rollout
over days: the person who set it to five percent on Tuesday is not watching on Thursday.

## Where hooks help, and where they stop

OpenFeature's [hook model](https://github.com/open-feature/spec/blob/main/specification/sections/04-hooks.md)
is the natural place to look for a foothold, and it gets you further than you might expect. The spec
defines four stages:

- `before`, immediately before flag evaluation
- `after`, immediately after successful flag evaluation
- `error`, when an error occurs during the `before` stage, flag resolution, or the `after` stage
  (Requirement 4.3.7)
- `finally`, unconditionally after the `before`, `after` and `error` stages (Requirement 4.3.8)

Application-configured hooks can be global, per client, or per invocation, and providers may also
supply hooks. The spec fixes the ordering in both directions: `before` hooks run API, Client,
Invocation, Provider, while `after`, `error` and `finally` run in reverse, Provider, Invocation,
Client, API, and within each level in the reverse of the order they were added (Requirement 4.4.2).
In dynamic-context SDKs, a `before` hook can return additional evaluation context, which is then
merged (Requirements 4.3.4 and 4.3.5); static-context SDKs handle context differently.

That is enough to build something genuinely useful. A `finally` hook can emit evaluation or exposure
telemetry containing the flag key, variant, reason, and error details when available, which is where
the spec's own
[observability guidance](https://github.com/open-feature/spec/blob/main/specification/appendix-d-observability.md)
places complete telemetry emission. Application and business outcomes belong in the
[Tracking API](https://github.com/open-feature/spec/blob/main/specification/sections/06-tracking.md),
correlated using evaluation context. Provider support for tracking is optional, and `track` must
no-op when the provider does not implement it (Requirement 6.1.4). An `error` hook reports
evaluation-lifecycle failures; it does not show that a served variant caused an application failure.

What hooks cannot do is close the loop. There are two structural limits:

**A hook observes one evaluation.** It sees a single resolution for a single subject. A gate needs an
aggregate signal over a defined window, optionally compared with a control cohort, a previous
version, or an absolute SLO. Nothing in the evaluation lifecycle has that view, and it would be wrong
to put it there.

**A hook cannot mutate flag configuration or rollout state through the standard OpenFeature
evaluation API.** A `before` hook can still influence an individual evaluation by changing its
context, which is a different thing. A hook that concludes a rollout should stop has no standard way
to act on that conclusion. It must call the vendor-specific management API that owns the flag
configuration.

So hooks are a good instrumentation point and not a control point. That distinction is the useful
takeaway: you can measure a rollout through the standard API today, and you cannot steer one.

## What to do about it now

Three things that do not require anything new.

**Emit exposure, not blanket metric tags.** Tagging every existing metric with the resolved variant
multiplies time-series cardinality. Emit one exposure record instead, or enrich the active request
trace, and correlate business outcomes through the Tracking API. Appendix D grades the fields for
you: the flag key is required, the variant is conditionally required, and the reason is recommended.
Carry a request or subject correlation identifier alongside them so the record can be joined to
anything else.

**Write the gate contract down, even if a human executes it.** A rollout that cannot state these has
not been designed, it has been started: success metric, abort metric, threshold, observation window,
minimum sample size, promotion steps, maximum duration, rollback action, owner, expiry date. Most of
that fits in a few lines next to the flag.

**Be clear which system owns the gate.** If a delivery platform above the flag system is doing
automated promotion, good; write down that it is the gate. If nothing is, that is a decision too, and
it should be a conscious one rather than an assumption that the flag system is handling it. A flag
sitting at twenty-five percent for six months is no longer meaningfully a rollout unless that
steady-state allocation is intentional, owned, and documented.

## The interesting question

So here is the question I think this community should settle: does rollout *state* deserve to be
represented at all? Not the policy, which is properly vendor territory, but the fact that a flag is
mid-rollout, at what exposure, and whether progression is currently held.

Concretely, a minimal portable shape worth arguing about:

| Field | Meaning |
|---|---|
| `status` | `pending`, `running`, `held`, `rolled-back`, `completed` |
| `current_exposure` | The proportion in effect now |
| `intended_target` | Where this rollout is heading |
| `started_at` | When it began |
| `last_transition_at` | When exposure or status last changed |
| `hold_reason` | Why progression is paused, when it is |
| `controller_ref` | The external system driving it, if any |

This would expose rollout state for inspection without requiring OpenFeature to define rollout policy
or provide a management API. It is observational, not mutating.

Today that state exists only inside whichever management system holds it, which means it cannot be
queried through a standard interface, cannot be surfaced consistently in tooling, and cannot be
consumed consistently by other tools in the delivery chain. An evaluation tells you what a subject
got. It cannot tell you whether the thing they got is still being tried out.

That may be the right boundary. But it is worth choosing deliberately rather than inheriting.
