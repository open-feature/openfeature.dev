import FliptSvg from '@site/static/img/flipt-no-fill.svg';
import { Provider } from '.';

export const Flipt: Provider = {
  name: 'Flipt',
  logo: FliptSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/flipt-io/flipt-openfeature-provider-go',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flipt',
      category: ['Server'],
    },
  ],
};
