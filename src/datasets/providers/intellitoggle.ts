import IntellitoggleSvg from '@site/static/img/intellitoggle-no-fill.svg';
import { Provider } from '.';

export const Intellitoggle: Provider = {
  name: 'Intellitoggle',
  logo: IntellitoggleSvg,
  technologies: [
    {
      technology: 'Dart',
      vendorOfficial: true,
      href: 'https://github.com/aortem/intellitoggle-openfeature-provider-dart-server',
      category: ['Server'],
    },
  ],
};
