import MixpanelSvg from '@site/static/img/mixpanel-no-fill.svg';
import { Provider } from '.';

export const Mixpanel: Provider = {
  name: 'Mixpanel',
  logo: MixpanelSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-go/tree/main/openfeature',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-java/tree/master/openfeature-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-node/tree/master/packages/openfeature-server-provider',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-js/tree/master/packages/openfeature-web-provider',
      category: ['Client'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-android/tree/master/openfeature-provider',
      category: ['Client'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-python/tree/master/openfeature-provider',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-ruby/tree/master/openfeature-provider',
      category: ['Server'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://github.com/mixpanel/mixpanel-swift-openfeature',
      category: ['Client'],
    },
  ],
};
