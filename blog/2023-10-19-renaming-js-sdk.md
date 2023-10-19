---
slug: 'js-sdk-rename'
title: 'Naming is Hard: Renaming the @openfeature/js-sdk'
date: 2023-10-19
authors: [toddbaert]
description: "renaming the @openfeature/js-sdk"
tags: [sdk, javascript, typescript, browser, node, web]
draft: false
---

## Renaming the @openfeature/js-sdk

It's been said that there's only two hard things in Computer Science: cache invalidation and naming things.
Here at the OpenFeature project we can attest to both, but today we'd like to talk about naming.

### What's changed

In order to avoid confusion, we recently renamed our server-side JavaScript SDK.
We've deprecated the [@openfeature/js-sdk](https://www.npmjs.com/package/@openfeature/js-sdk) and published the same package under a new name: [@openfeature/server-sdk](https://www.npmjs.com/package/@openfeature/server-sdk).

### Why we made this change

With the introduction of the [@openfeature/web-sdk](https://www.npmjs.com/package/@openfeature/web-sdk), we heard many stories of users having trouble due to incorrectly importanting modules; either importing modules meant for the web in a Node.JS context, or vice-versa.
This problem was exacerbated by the fact the server-side SDK was called `@openfeature/js-sdk`, which doesn't indicate it's intended for server-side JavaScript runtimes such as Node.JS.
With our new naming scheme, it's clear that `@openfeature/server-sdk` is useful for the server, while `@openfeature/web-sdk` should be used in browser environments.

### How to migrate

To migrate, simply uninstall the old package, install this new package, and update all your require/import statements.
There are no changes between the last published version of the `@openfeature/js-sdk` and the first published version of the `@openfeature/server-sdk`.
Note that we have re-released all the relevant community-provided artifacts hosted in our [js-contribs](https://github.com/open-feature/js-sdk-contrib) repository, and modified them to include a peer dependency on the `@openfeature/server-sdk`.
You will need to migrate in order to consume the latest versions of these components.