import NonaSvg from '@site/static/img/nona-no-fill.svg';
import { Provider } from '.';

export const Nona: Provider = {
  name: 'Nona',
  logo: NonaSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/nona-openfeature-provider',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://www.nuget.org/packages/Nona.OpenFeature.Provider',
      category: ['Server'],
    },
  ],
  description:
    'Official OpenFeature providers for Nona self-hosted feature flags and remote config.',
};