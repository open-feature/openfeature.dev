import OpenTelemetrySvg from '@site/static/img/otel-no-fill.svg';
import { Hook } from '.';

export const OpenTelemetry: Hook = {
  name: 'OpenTelemetry Trace',
  logo: OpenTelemetrySvg,
  description: 'Add feature flag evaluation metadata to an OpenTelemetry trace',
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/hooks/open-telemetry',
      category: ['Server-side'],
    },
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/hooks/open-telemetry',
      category: ['Server-side'],
    },
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/hooks/open-telemetry',
      category: ['Server-side'],
    },
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/hooks/OpenTelemetry',
      category: ['Server-side'],
    },
  ],
};
