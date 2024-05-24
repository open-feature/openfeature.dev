import GrowthBookSvg from '@site/static/img/growthbook-no-fill.svg';
import { Provider } from '.';

export const GrowthBook: Provider = {
  name: 'GrowthBook',
  logo: GrowthBookSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.growthbook.io/lib/js#openfeature-provider',
      category: ['Client'],
    },
  ],
};
