---
sidebar_position: 1
id: five-minutes-to-feature-flags
title: Five Minutes to Feature Flags
---

We’re going to add feature flagging to a Node service in under five minutes using OpenFeature, the open, vendor-agnostic feature flagging SDK.

This tutorial uses a simple [express][express] server, but if you're familiar with JavaScript and Node you should be able to follow along.

> Prefer the zero-install, in-browser option? [Run this tutorial in-browser using Killercoda](https://killercoda.com/open-feature/scenario/five-minutes-to-feature-flags).

## Setup

Before we jump into the tutorial, let's quickly get everything setup.
You'll need [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/) version 16 or newer.
After that, run the following command from your favorite terminal.

```bash
git clone https://github.com/open-feature/five-minutes-to-feature-flags.git && \
  cd five-minutes-to-feature-flags && \
  npm install
```

## Hello, world

Here’s the service we’ll be working on:

```js title="01_vanilla.js"
import express from 'express';
import Router from 'express-promise-router';

const app = express();
const routes = Router();
app.use((_, res, next) => {
  res.setHeader('content-type', 'text/plain');
  next();
}, routes);

routes.get('/', async (_, res) => {
  res.send('Hello, world!');
});

app.listen(3333, () => {
  console.log('Server running at http://localhost:3333');
});
```

Pretty much the most basic express server you can imagine - a single endpoint at `/` that returns a plaintext “Hello, world!” response.

Let's start the service by running:

```bash
node 01_vanilla.js
```

Now you can test to make sure it works by entering the following command into a second terminal:

```bash
curl http://localhost:3333
```

The output should look like this:

```disable-copy-button
Hello, world!
```

Looks good!
Go ahead and stop the server using `Ctrl` + `C`.

## With cows, please

Let’s imagine that we’re adding a new, experimental feature to this hello world service.
We’re going to upgrade the format of the server’s response, using [cowsay][cowsay]!

We are, however, not 100% sure that this cowsay formatting is going to work out, so for now we’ll protect it behind a conditional:

```js {3,13-20} title="02_basic_flags.js"
import express from 'express';
import Router from 'express-promise-router';
import cowsay from 'cowsay';

const app = express();
const routes = Router();
app.use((_, res, next) => {
  res.setHeader('content-type', 'text/plain');
  next();
}, routes);

routes.get('/', async (_, res) => {
  // set this to true to test our new
  // cow-based greeting system
  const withCow = false;
  if (withCow) {
    res.send(cowsay.say({ text: 'Hello, world!' }));
  } else {
    res.send('Hello, world!');
  }
});

app.listen(3333, () => {
  console.log('Server running at http://localhost:3333');
});
```

Now let's start the server with our basic flag configuration by running:

```bash
node 02_basic_flags.js
```

By default, the service continues to work exactly as it did before.

Next change `withCow` to `true` using your favorite text editor and restart the node server.
Now the response comes in an exciting new format.
To try it out, enter the following command into the terminal:

```bash
curl http://localhost:3333
```

The output should look like this:

```disable-copy-button
_______________
< Hello, world! >
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

:::tip

A server restart is required for any changes to be applied.

:::

## The crudest flag

That `withCow` boolean and its accompanying conditional check are a very basic feature flag - they let us hide an experimental or unfinished feature, but also easily switch the feature on while we’re building and testing it.

## Introducing OpenFeature

Managing these flags by changing hardcoded constants gets old fast though.
A team that uses feature flags in any significant way soon reaches for a feature flagging framework.
Let’s move in that direction by updating the service to use OpenFeature.

```js {4,13,16} title="03_openfeature.js"
import express from 'express';
import Router from 'express-promise-router';
import cowsay from 'cowsay';
import { OpenFeature } from '@openfeature/server-sdk';

const app = express();
const routes = Router();
app.use((_, res, next) => {
  res.setHeader('content-type', 'text/plain');
  next();
}, routes);

const featureFlags = OpenFeature.getClient();

routes.get('/', async (_, res) => {
  const withCows = await featureFlags.getBooleanValue('with-cows', false);
  if (withCows) {
    res.send(cowsay.say({ text: 'Hello, world!' }));
  } else {
    res.send('Hello, world!');
  }
});

app.listen(3333, () => {
  console.log('Server running at http://localhost:3333');
});
```

We’ve imported the `@openfeature/server-sdk` NPM module, and used it to create an OpenFeature client called `featureFlags`.
We then call `getBooleanValue` on that client to find out if the `with-cows` feature flag is true or false.
Depending on what we get back we either show the new cow-based output, or the traditional plaintext format.

Start the server with:

```bash
node 03_openfeature.js
```

Enter the following command into the terminal:

```bash
curl http://localhost:3333
```

The output should look like this:

```disable-copy-button
Hello, world!
```

:::note

When we call `getBooleanValue` we also provide a default value of false.
Since we haven’t configured the OpenFeature SDK with a _feature flag provider_ yet, it will always return that default value.

:::

## Configuring an OpenFeature Provider

OpenFeature becomes useful when we connect our OpenFeature SDK to a full-fledged feature flagging system - a commercial product, an open-source offering, or perhaps a custom internal tool - so that it can provide flagging decisions from that system.

Connecting OpenFeature to one of these backends is very straightforward, but it does require that we have an actual flagging framework set up.
For now, let’s just configure a really, really simple provider that doesn’t need a backend:

```js {5,16-22} title="04_openfeature_with_provider.js"
import express from 'express';
import Router from 'express-promise-router';
import cowsay from 'cowsay';
import { OpenFeature } from '@openfeature/server-sdk';
import { InMemoryProvider } from '@openfeature/in-memory-provider';

const app = express();
const routes = Router();
app.use((_, res, next) => {
  res.setHeader('content-type', 'text/plain');
  next();
}, routes);

const featureFlags = OpenFeature.getClient();

const FLAG_CONFIGURATION = {
  'with-cows': true,
};

const featureFlagProvider = new InMemoryProvider(FLAG_CONFIGURATION);

OpenFeature.setProvider(featureFlagProvider);

routes.get('/', async (_, res) => {
  const withCows = await featureFlags.getBooleanValue('with-cows', false);
  if (withCows) {
    res.send(cowsay.say({ text: 'Hello, world!' }));
  } else {
    res.send('Hello, world!');
  }
});

app.listen(3333, () => {
  console.log('Server running at http://localhost:3333');
});
```

This minimalist provider is exactly that; you give it a hard-coded set of feature flag values, and it provides those values via the OpenFeature SDK.

In our `FLAG_CONFIGURATION` above we’ve hard-coded that `with-cows` feature flag to true, which means that conditional predicate in our express app will now evaluate to true, which means that our service will now start providing bovine output.

Start the server with:

```bash
node 04_openfeature_with_provider.js
```

Test it out by entering the following command into the terminal:

```bash
curl http://localhost:3333
```

The output should look like this:

```disable-copy-button
 _______________
< Hello, world! >
 ---------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

Next change the `with-cows` value to false and restart the node server.
We will now see the more boring response when entering the following command into the terminal:

```bash
curl http://localhost:3333
```

The output should look like this:

```disable-copy-button
Hello, world!
```

## Moving to a full feature-flagging system

We’ve gotten started with OpenFeature using a very simple but extremely limited provider.
The beauty of OpenFeature is that we can transition to a real feature-flagging system when we’re ready, without any change to how we evaluate flags.
It’s as simple as configuring a different provider.

**For example:**

<details>
  <summary>CloudBees</summary>

```js
import { CloudbeesProvider } from 'cloudbees-openfeature-provider-node';

const appKey = '[YOUR_APP_KEY]';
OpenFeature.setProvider(await CloudbeesProvider.build(appKey));
```

</details>

<details>
  <summary>flagd</summary>

```js
import { FlagdProvider } from '@openfeature/flagd-provider';

OpenFeature.setProvider(
  new FlagdProvider({
    host: '[FLAGD_HOST]',
    port: 8013,
  })
);
```

</details>

<details>
  <summary>LaunchDarkly</summary>

```js
import { init } from 'launchdarkly-node-server-sdk';
import { LaunchDarklyProvider } from '@launchdarkly/openfeature-node-server';

const ldClient = init('[YOUR-SDK-KEY]');
await ldClient.waitForInitialization();
OpenFeature.setProvider(new LaunchDarklyProvider(ldClient));
```

</details>

<details>
  <summary>Split</summary>

```js
import { SplitFactory } from '@splitsoftware/splitio';
import { OpenFeatureSplitProvider } from '@splitsoftware/openfeature-js-split-provider';

const splitClient = SplitFactory({ core: { authorizationKey: '[YOUR_AUTH_KEY]' } }).client();
OpenFeature.setProvider(new OpenFeatureSplitProvider({ splitClient }));
```

</details>

We can get started with feature flags with low investment and low risk, and once we’re ready, it’s just a few lines of code to transition to a full-featured, scalable backend.

## Next steps

To learn more about OpenFeature, check out the documentation [here](/docs/reference/intro).
Specifically, you can read more about how the [evaluation API works](/docs/reference/concepts/evaluation-api/), what [tech stacks are supported](/docs/reference/technologies/), or read [more tutorials](/docs/category/getting-started/) about using OpenFeature in a variety of tech stacks.

More hands-on tutorials are available on the [OpenFeature Killercoda page](https://killercoda.com/open-feature).

We strive to provide a welcoming, open community.
If you have any questions - or just want to nerd out about feature flags - the `#OpenFeature` channel in the [CNCF Slack][cncf-slack] is the place for you.

[express]: https://expressjs.com/
[cowsay]: https://www.npmjs.com/package/cowsay
[cncf-slack]: https://slack.cncf.io/
