import FlipswitchSvg from '@site/static/img/flipswitch-no-fill.svg';
import type { Provider } from '.';

const jsSdk = {
  technology: 'JavaScript' as const,
  vendorOfficial: true,
  href: 'https://docs.flipswitch.io/docs/sdks/javascript',
};

export const Flipswitch: Provider = {
  name: 'Flipswitch',
  logo: FlipswitchSvg,
  technologies: [
    { ...jsSdk, category: ['Client'] as const },
    { ...jsSdk, category: ['Server'] as const },
    {
      technology: 'React',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/react',
      category: ['Client'],
    },
    {
      technology: 'Angular',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/angular',
      category: ['Client'],
    },
{
      technology: 'NestJS',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/nestjs',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/java',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/python',
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/go',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/dotnet',
      category: ['Server'],
    },
    {
      technology: 'Rust',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/rust',
      category: ['Server'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/swift',
      category: ['Client'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/php',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://docs.flipswitch.io/docs/sdks/ruby',
      category: ['Server'],
    },
  ],
};
