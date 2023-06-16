import GoffSvg from '@site/static/img/goff-no-fill.svg';
import { Provider } from '.';

export const Goff: Provider = {
  name: 'GO Feature Flag',
  logo: GoffSvg,
  technologies: {
    JavaScript: {
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag',
    },
    Go: {
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/go-feature-flag',
    },
    Java: {
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/go-feature-flag',
    },
    ['.NET']: {
      vendorOfficial: true,
      href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.GOFeatureFlag',
    },
  },
};
