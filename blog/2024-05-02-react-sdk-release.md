---
slug: "openfeature-react-sdk-release"
title: "OpenFeature React SDK Release"
date: 2024-05-02
authors: [toddbaert]
description: "Announcing the first official release of the OpenFeature React SDK"
tags: [react, client, sdk, web, javascript, typescript]
draft: false
---

We're stoked to announce the first release of the [@openfeature/react-sdk](https://www.npmjs.com/package/@openfeature/react-sdk)!
This SDK is a distribution of our SDK for the web with extensions to support idiomatic React development and features.
This blog highlights a few of these, with a few implementation details for the real React nerds. 🤓

<!--truncate-->

## Features

### Context Provider

The OpenFeature client is a lightweight abstraction used to evaluate feature flags, implemented by every SDK.
Essentially, they represent a _scope_ for feature flag evaluations.
React's [_context provider_](https://react.dev/reference/react/createContext#provider) concept provides a means of sharing data and objects across multiple components without explicitly passing them through [_props_](https://react.dev/learn/passing-props-to-a-component).
A context provider is an ideal means of providing a bounded scope for flag evaluations by associating a react context with an OpenFeature client; the OpenFeature React SDK's `OpenFeatureProvider` does exactly this.
Within the scope of this React provider, all flag evaluation hooks will make use of the bound OpenFeature client and its associated [OpenFeature provider](https://openfeature.dev/specification/glossary#provider).

```tsx
function App() {
  return (
    <OpenFeatureProvider>
      {/* components in this scope share the same OpenFeature client and OpenFeature Provider */}
      <MyPage/>
    </OpenFeatureProvider>
  );
}
```

### Re-rendering with Flag Changes

The most fundament feature of the React SDK is support for re-rending components using feature flags when the effective values of those flags change.
Flag value changes could be the result of changes in the evaluation context which is the basis for flag evaluations rules, or change in the flag definitions themselves.
Changes in the evaluation context are best exemplified by changes to user properties in an application; for example, a user logging in, adding something to their cart, or changing their subscriber level.
Any of these examples could mean that we need to re-evaluate feature flags in light of this new information.
The flag evaluation hooks provided by the React SDK do this automatically (by default) when the bound provider emits a [_PROVIDER_CONTEXT_CHANGED_](https://openfeature.dev/specification/types#provider-events) event.

```tsx
function MyPage() {
  // the "value" returned here is always up-to-date with changes in rules or contextual data
  const { value: showNewMessage } = useFlag("new-message", false);
  return (
    <div>
      <header>
        {showNewMessage ? (
          <p>Welcome to this OpenFeature-enabled React app!</p>
        ) : (
          <p>Welcome to this React app.</p>
        )}
      </header>
    </div>
  );
}
```
Additionally, some feature flag solutions support realtime updates when flag configurations themselves are changed and the bound provider emits a [PROVIDER_CONFIGURATION_CHANGED](https://openfeature.dev/specification/types#provider-events) event.
The React SDK also supports re-rendering in these cases, so that a change in a flag definition results in those changes immediately being reflected in the user interface.
Both of these features can be disabled per-flag, or for the scope of the [context provider](#context-provider).

### Built-in Suspense

React's suspense provides a powerful mechanism to simplify rendering when components require asynchronous data or have asynchronous side-effects.
Without suspense, when a component makes an HTTP request or performs some other asynchronous operation, the developer must track the resolution of the corresponding promise, and display loading indicators (referred to by React as [_fallbacks_](https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading)) accordingly.
React's Suspense paradigm uses some clever tricks to track this status for developers, and shows a specified fallback until the promise is resolved.
Even more conveniently, within a [_suspense boundary_](https://react.dev/reference/react/Suspense#suspense), all promises are tracked as a group; when a new asynchronous call is added to any components in this scope, the developer need not make any changes to suspend rendering while this call is awaited!

<p align="center">
  <img width="50%" src={require('@site/static/img/blog/2024-05-02-react-sdk-release/suspense.gif').default} />
</p>

Most feature flags solutions require some network I/O to retrieve their flag values or rules.
Until this I/O is complete, we may want to suspend the UI to prevent users from seeing unexpected content or layout changes.
The React SDK supports suspense while the provider is becoming ready, and while the provider is reconciling changes based on changes to the evaluation context.
This means that you can easily show fallback elements until your feature flag provider is ready to evaluate flags.

```tsx
{/* suspense boundary and fallback */}
<Suspense fallback={<Fallback />}>
  <Greeting />
</Suspense>

function Fallback() {
  return (<>Loading...</>);
}

function Greeting() {
  // this hook will cause the component to suspend until the provider is ready
  const { value: showEmoji } = useFlag("show-emoji", false);

  return (
    <>
      {showEmoji ? (
        <p>👋 Welcome to this React app!</p>
      ) : (
        <p>Welcome to this React app!</p>
      )}
    </>
  );
}
```

## Compatibility

As previously mentioned, the React SDK is built on top of the existing `@openfeature/web-sdk`.
Any OpenFeature provider built to support the web SDK can also be used with the `@openfeature/react-sdk`, no changes required.

## Future Plans

We have a few enhancements in mind, particularly around mutating evaluation context and an API that provides components (in addition to hooks), but we're excited to get feedback from the community on what we've built so far!
If you're a React dev (or you're just looking for an excuse to familiarize yourself with the library) take the OpenFeature React SDK for a spin and let us know how it goes!
You can play around with our test app [here](https://github.com/open-feature/react-test-app) to familiarize yourself with some of the features.