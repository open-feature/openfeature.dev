import FlipswitchSvg from '@site/static/img/flipswitch-no-fill.svg';
import type { Provider } from '.';

export const Flipswitch: Provider = {
  name: 'Flipswitch',
  logo: FlipswitchSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/flipswitch-io/js-sdk',
      category: ['Client'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/flipswitch-io/js-sdk',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/flipswitch-io/java-sdk',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/flipswitch-io/python-sdk',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/flipswitch-io/go-sdk',
      category: ['Server'],
    },
  ],
};
