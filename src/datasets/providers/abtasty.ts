import ABTastySvg from '@site/static/img/abtasty-no-fill.svg';
import { Provider } from '.';

export const ABTasty: Provider = {
  name: 'AB Tasty',
  logo: ABTastySvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/flagship-io/openfeature-provider-js',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/flagship-io/openfeature-provider-js-client',
      category: ['Client'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://github.com/flagship-io/openfeature-provider-iOS',
      category: ['Client'],
    },
  ],
};
