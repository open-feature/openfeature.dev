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
  ],
};
