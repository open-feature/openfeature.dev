import SwitchboxSvg from '@site/static/img/switchbox-no-fill.svg';
import { Provider } from '.';

export const Switchbox: Provider = {
  name: 'Switchbox',
  logo: SwitchboxSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/ignat14/switchbox-sdk-js/tree/main/packages/openfeature',
      category: ['Client'],
    },
    {
      technology: 'React',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://switchbox.dev/docs/sdk/openfeature',
      category: ['Client'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/ignat14/switchbox-sdk-python/tree/main/providers/openfeature',
      category: ['Server'],
    },
  ],
};
