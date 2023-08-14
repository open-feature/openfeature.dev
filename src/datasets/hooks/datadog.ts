import DatadogSvg from '@site/static/img/datadog-no-fill.svg';
import { Hook } from '.';

export const Datadog: Hook = {
  name: 'Datadog',
  logo: DatadogSvg,
  description: 'Add feature flag evaluation metadata to a Datadog trace',
  technologies: [
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/hooks/DDTrace',
      category: ['Server'],
    },
  ],
};
