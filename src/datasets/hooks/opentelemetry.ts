import OpenTelemetrySvg from '@site/static/img/otel-no-fill.svg';
import { Hook } from '.';

export const OpenTelemetry: Hook = {
  name: 'OpenTelemetry Trace',
  logo: OpenTelemetrySvg,
  technologies: {
    JavaScript: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/hooks/open-telemetry',
    },
    Go: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/hooks/open-telemetry',
    },
    Java: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/hooks/open-telemetry',
    },
    PHP: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/hooks/OpenTelemetry',
    },
  },
  description: 'Add feature flag evaluation metadata to an OpenTelemetry trace',
};
