import DatadogSvg from '@site/static/img/datadog-no-fill.svg';
import { Provider } from '.';

export const Datadog: Provider = {
  name: 'Datadog',
  logo: DatadogSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/nodejs/',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/javascript/',
      category: ['Client'],
    },
    {
      technology: 'React',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/react/',
      category: ['Client'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/ios/',
      category: ['Client'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/android/',
      category: ['Client'],
    },
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/go/',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/dotnet/',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/java/',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/python/',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/ruby/',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/php/',
      category: ['Server'],
    },
  ],
};
