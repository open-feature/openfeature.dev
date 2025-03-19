import GoffSvg from '@site/static/img/goff-no-fill.svg';
import { Provider } from '.';

export const Goff: Provider = {
  name: 'GO Feature Flag',
  logo: GoffSvg,
  technologies: [
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_ruby',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_javascript',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/client_providers/openfeature_javascript',
      category: ['Client'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_go',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_java',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_dotnet',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_python',
      category: ['Server'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/client_providers/openfeature_android',
      category: ['Client'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/client_providers/openfeature_swift',
      category: ['Client'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_php',
      category: ['Server'],
    },
    {
      technology: 'NestJS',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/server_providers/openfeature_nestjs',
      category: ['Server'],
    },
    {
      technology: 'Angular',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/client_providers/openfeature_angular',
      category: ['Client'],
    },
    {
      technology: 'React',
      parentTechnology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://gofeatureflag.org/docs/sdk/client_providers/openfeature_react',
      category: ['Client'],
    },
  ],
};
