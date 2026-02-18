import DatadogSvg from '@site/static/img/datadog-no-fill.svg';
import { Provider } from '.';

export const Datadog: Provider = {
  name: 'Datadog',
  logo: DatadogSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@datadog/openfeature-node-server',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://www.npmjs.com/package/@datadog/openfeature-browser',
      category: ['Client'],
    },
    {
      technology: 'Swift',
      vendorOfficial: true,
      href: 'https://github.com/DataDog/dd-openfeature-provider-swift',
      category: ['Client'],
    },
    {
      technology: 'Kotlin',
      vendorOfficial: true,
      href: 'https://docs.datadoghq.com/feature_flags/client/android/',
      category: ['Client'],
    },
  ],
};
