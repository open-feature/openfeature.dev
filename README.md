# OpenFeature Documentation

This repository provides the documentation for OpenFeature; including the SDK, flagd and the operator.

## Documentation Structure

We are following a slightly modified version of the [diataxis framework](https://diataxis.fr/) for our documentation:

- Docs: Reference material for using OpenFeature e.g. the specific commands and code
- Getting Started: Guide on using OpenFeature
- Tutorials: Use Cases and specific implementations
- Explanations: Extensive explanations of the different components

## Contributing

We welcome your contribution to the OpenFeature documentation. Please make sure to read our [contributor guidelines](https://github.com/open-feature/.github/blob/main/CONTRIBUTING.md)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
Please refer to the docusaurus documentation to learn how to format the documentation.

## Style Guide

### Diagrams

When adding a diagram to the documentation, it's recommended to use one of the following tools:

#### Mermaid

[Mermaid](https://mermaid-js.github.io/) is uses a Markdown-inspired text definitions to create diagrams. These diagrams are natively supported in GitHub and Docusaurus.

#### Excalidraw

[Excalidraw](https://excalidraw.com/) is a virtual whiteboard for sketching hand-drawn like diagrams. When saving an Excalidraw image, make sure to use the "embed scene" option. That will allow others to edit the image in the future.

![Excalidraw Embed Scene](./static/img/excalidraw-embed-scene.png)

## Running locally
### Installation Prerequisites
You will need [Node.js](https://nodejs.org/en/download) installed. Node.js >= 16.10 comes with `corepack` which can be used to access `yarn`. Instructions for using yarn on all versions of node can be found [here](https://yarnpkg.com/getting-started/install).

### Installation

```sh
yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The documentation is hosted by Netlify and deployments are automatically triggered after a successful merge to main.

## Licenses

- Documentation: [CC-BY-4.0](LICENSE)
- Code: [Apache-2.0](LICENSE-CODE)
