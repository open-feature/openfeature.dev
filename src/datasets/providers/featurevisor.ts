import FeaturevisorSvg from '@site/static/img/featurevisor-no-fill.svg';

import type { Provider } from '.';

export const Featurevisor: Provider = {
  name: 'Featurevisor',
  logo: FeaturevisorSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/browser/#open-feature',
      category: ['Client'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/nodejs/#open-feature',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/go/#open-feature',
      category: ['Server'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/swift/#open-feature',
      category: ['Client'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/java/#open-feature',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/ruby/#open-feature',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/python/#open-feature',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://featurevisor.com/docs/sdks/php/#open-feature',
      category: ['Server'],
    },
  ],
};
