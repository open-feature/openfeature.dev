import DatadogSvg from '@site/static/img/datadog-no-fill.svg';
import { Provider } from '.';

export const Datadog: Provider = {
  name: 'Datadog',
  logo: DatadogSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/nodejs',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/javascript?tab=npm',
      category: ['Client'],
    },
    {
      technology: 'React',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/react?tab=npm',
      category: ['Client'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/ios?tab=swiftpackagemanagerspm',
      category: ['Client'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/android/',
      category: ['Client'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/java?tab=gradlegroovy',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/python',
      category: ['Server'],
    },
    {
      technology: 'Ruby',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/server/ruby',
      category: ['Server'],
    },
  ],
};
