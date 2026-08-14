import SuperpositionSvg from '@site/static/img/superposition-no-fill.svg';

import { Provider } from '.';

export const Superposition: Provider = {
  name: 'Superposition',
  logo: SuperpositionSvg,
  technologies: [
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/juspay/superposition/tree/main/clients/java/openfeature-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/juspay/superposition/tree/main/clients/javascript/open-feature-provider',
      category: ['Server'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://juspay.io/open-source/superposition/docs/providers/openfeature/java/',
      category: ['Client'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/juspay/superposition/tree/main/clients/python/provider',
      category: ['Server'],
    },
    {
      technology: 'Rust',
      vendorOfficial: true,
      href: 'https://github.com/juspay/superposition/tree/main/crates/superposition_provider',
      category: ['Server'],
    },
  ],
};
