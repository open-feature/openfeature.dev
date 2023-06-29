import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import { Provider } from '.';

export const Flagd: Provider = {
  name: 'FlagD',
  logo: FlagdSvg,
  technologies: {
    JavaScript: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd',
    },
    Go: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flagd',
    },
    Java: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flagd',
    },
    ['.NET']: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.Flagd',
    },
    PHP: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/providers/Flagd',
    },
  },
};
