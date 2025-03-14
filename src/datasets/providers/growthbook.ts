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
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/blob/main/libs/providers/growthbook/README.md',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/growthbook/growthbook-openfeature-provider-python',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/growthbook/growthbook-openfeature-provider-java',
      category: ['Server'],
    },
  ],
};
