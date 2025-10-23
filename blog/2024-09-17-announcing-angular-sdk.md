---
slug: 'announcing-angular-sdk'
title: 'Announcing the OpenFeature Angular SDK!'
date: 2024-09-17
authors: [lukasreining, toddbaert]
image: /img/blog/2024-09-17-announcing-angular-sdk/angular.png
description: "Announcing the first official release of the OpenFeature Angular SDK!"
tags: [angular, ng, sdk, ts, js, javascript, web]
draft: false
---

We are excited to unveil the first official release of the [@openfeature/angular-sdk](/docs/reference/sdks/client/web/angular)! 🚀
This SDK extends OpenFeature capabilities to Angular applications, with a focus on Angular's unique patterns and practices.
In this post, we’ll walk you through some of the standout features and how they integrate seamlessly with Angular development.

<!--truncate-->

<img src={require('@site/static/img/blog/2024-09-17-announcing-angular-sdk/angular.png').default} />

## Features

### Angular Module System Integration

The Angular SDK exports a module that allows you to configure your [OpenFeature provider](https://openfeature.dev/docs/reference/concepts/provider) using Angular constructs.
You can set your default provider, and optionally configure additional providers for other domains.
Besides configuring your provider, you'll also need to use the `OpenFeatureModule` in order to utilize the other features of the SDK.

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenFeatureModule } from '@openfeature/angular-sdk';

@NgModule({
  declarations: [
    // Other components
  ],
  imports: [
    CommonModule,
    OpenFeatureModule.forRoot({
      provider: new YourOpenFeatureProvider(),
      // domainBoundProviders are optional, mostly needed if more than one provider is needed
      domainBoundProviders: {
        domain1: new YourOtherOpenFeatureProvider(),
        domain2: new YourOtherOtherOpenFeatureProvider(),
      },
    })
  ],
})
export class AppModule {
}
```

### Easy Templating with Directives

Perhaps the most useful part of the Angular SDK is the inclusion of the built in evaluation directives.
These directives handle all the flag evaluation boilerplate for you, using Angular's directive abstractions which add functionality to elements.
In its most basic form, the directive differentially renders templates based on the flag evaluation result:

```html
<!-- evaluate a flag called new-message and show a render a different template based on the result -->
<div
  *booleanFeatureFlag="'new-message'; default: true; else: booleanFeatureElse;">
  <p>Welcome to this OpenFeature-enabled Angular app!</p>
</div>
<ng-template #booleanFeatureElse>
  <p>Welcome to this Angular app.</p>
</ng-template>
```

String, Numeric, and Object flags are also supported.
For these, you can supply templates based by matching against the returned flag value:

```html
<!-- render this template if the value == 10 -->
<div
  *numberFeatureFlag="'discountRate'; value: 10; default: 5; else: numberFeatureElse">
  This is shown when the feature flag matches the specified discount rate.
</div>
<!-- render this template if the value != 10 -->
<ng-template #numberFeatureElse>
  This is shown when the feature flag does not match the specified discount rate.
</ng-template>
```

Additionally, it's possible to bind the evaluation result and related metadata to the template by omitting the `value` to match:

```html
<!-- omitting the `value` to match against unconditionally renders this template -->
<div *stringFeatureFlag="'themeColor'; default: 'light'; let value;">
  The theme color is {{ value }}.
</div>
```

### Loading and Automatic Re-Rendering

You may want to hide some content until your provider is ready.
For this reason, the directives support specifying templates to render before your provider is ready, and while it's [reconciling its state](https://openfeature.dev/docs/reference/concepts/sdk-paradigms#static-context-paradigms-client-side-sdks) after context changes.
The directive will automatically re-render when the provider's readiness changes, or if the flag values themselves change.

```html
<!-- render different templates based on the readiness of the flag provider -->
<div
  *booleanFeatureFlag="'my-feature'; default: true; else: booleanFeatureElse; initializing: booleanFeatureInitializing; reconciling: booleanFeatureReconciling">
  <p>This is shown when the feature flag is enabled.</p>
</div>
<ng-template #booleanFeatureElse>
  <p>This is shown when the feature flag is disabled.</p>
</ng-template>
<ng-template #booleanFeatureInitializing>
  <p>This is shown when the feature flag is initializing.</p>
</ng-template>
<ng-template #booleanFeatureReconciling>
  <p>This is shown when the feature flag is reconciling.</p>
</ng-template>
```

## Compatibility

As with other framework-specific SDKs, the Angular SDK is built on top of the existing `@openfeature/web-sdk`.
Any OpenFeature provider built to support the web SDK can also be used with the `@openfeature/angular-sdk`, no changes required.

## Looking Ahead

We’re eager to expand the Angular SDK’s capabilities with future updates!
If you're an Angular developer or interested in exploring how feature flags can enhance your applications, we encourage you to try out the OpenFeature Angular SDK.
Happy coding! 🎉
