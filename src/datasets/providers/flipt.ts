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
  ],
};
