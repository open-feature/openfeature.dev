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
      category: ['Server'],
    },
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/hooks/open-telemetry',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/hooks/open-telemetry',
      category: ['Server'],
    },
    {
      technology: 'PHP',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/hooks/OpenTelemetry',
      category: ['Server'],
    },
    {
      technology: '.NET',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Hooks.Otel',
      category: ['Server'],
    },
    {
      technology: 'Python',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/python-sdk-contrib/tree/main/hooks/openfeature-hooks-opentelemetry',
      category: ['Server'],
    },
  ],
};
