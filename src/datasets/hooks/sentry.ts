import SentrySvg from '@site/static/img/sentry-no-fill.svg';
import { Hook } from '.';

export const Sentry: Hook = {
  name: 'Sentry',
  logo: SentrySvg,
  description: 'Add feature flag evaluation metadata to Sentry',
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://docs.sentry.io/platforms/javascript/configuration/integrations/openfeature/',
      category: ['Client'],
    },
  ],
};
