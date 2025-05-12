import VWOSvg from '@site/static/img/vwo-no-fill.svg';
import { Provider } from '.';

export const VWO: Provider = {
  name: 'VWO',
  logo: VWOSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/wingify/vwo-openfeature-provider-node',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://github.com/wingify/vwo-openfeature-provider-dotnet',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/wingify/vwo-openfeature-provider-java',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/wingify/vwo-openfeature-provider-php',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://github.com/wingify/vwo-openfeature-provider-python',
      category: ['Server'],
    },
  ],
};
