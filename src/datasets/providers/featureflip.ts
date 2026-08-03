import FeatureflipSvg from '@site/static/img/featureflip-no-fill.svg';

import { Provider } from '.';

export const Featureflip: Provider = {
  name: 'Featureflip',
  logo: FeatureflipSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://featureflip.io/docs/integrations/openfeature/',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://featureflip.io/docs/integrations/openfeature/',
      category: ['Server'],
    },
  ],
};
