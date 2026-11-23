import RailflagSvg from '@site/static/img/railflag-no-fill.svg';
import { Provider } from '.';

export const Railflag: Provider = {
  name: 'Railflag',
  logo: RailflagSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/railflag/sdks/tree/main/packages/sdk-node',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/railflag/sdks/tree/main/packages/sdk-js',
      category: ['Client'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/railflag/sdks/tree/main/packages/sdk-python',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/railflag/sdks/tree/main/packages/sdk-go',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/railflag/sdks/tree/main/packages/sdk-java',
      category: ['Server'],
    },
  ],
};
