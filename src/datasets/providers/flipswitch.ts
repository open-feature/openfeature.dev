import FlipswitchSvg from '@site/static/img/flipswitch-no-fill.svg';
import type { Provider } from '.';

const jsSdk = {
  technology: 'JavaScript' as const,
  vendorOfficial: true,
  href: 'https://github.com/flipswitch-io/js-sdk',
};

export const Flipswitch: Provider = {
  name: 'Flipswitch',
  logo: FlipswitchSvg,
  technologies: [
    { ...jsSdk, category: ['Client'] as const },
    { ...jsSdk, category: ['Server'] as const },
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
