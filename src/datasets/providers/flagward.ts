import FlagwardSvg from '@site/static/img/flagward-no-fill.svg';
import { Provider } from '.';

export const Flagward: Provider = {
  name: 'Flagward',
  logo: FlagwardSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@flagward/openfeature-web',
      category: ['Client'],
    },
  ],
  description: 'Official OpenFeature web provider for Flagward, open-source feature flags with local evaluation.',
};
