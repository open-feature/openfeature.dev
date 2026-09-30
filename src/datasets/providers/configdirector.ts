import ConfigDirectorSvg from '@site/static/img/configdirector-no-fill.svg';
import type { Provider } from '.';

const jsSdk = {
  technology: 'JavaScript' as const,
  vendorOfficial: true,
};

export const ConfigDirector: Provider = {
  name: 'ConfigDirector',
  logo: ConfigDirectorSvg,
  technologies: [
    {
      ...jsSdk,
      href: 'https://docs.configdirector.com/sdks/server/openfeature-node',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://docs.configdirector.com/sdks/openfeature/java',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://docs.configdirector.com/sdks/openfeature/dotnet',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://docs.configdirector.com/sdks/openfeature/python',
      category: ['Server'],
    },
    {
      technology: 'Dart',
      vendorOfficial: true,
      href: 'https://docs.configdirector.com/sdks/openfeature/flutter',
      category: ['Client'],
    },
    {
      ...jsSdk,
      href: 'https://docs.configdirector.com/sdks/browser/openfeature-web',
      category: ['Client'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://docs.configdirector.com/sdks/openfeature/android',
      category: ['Client'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://docs.configdirector.com/sdks/openfeature/swift',
      category: ['Client'],
    },
  ],
};
