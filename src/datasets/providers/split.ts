import SplitSvg from '@site/static/img/split-no-fill.svg';
import { Provider } from '.';

export const Split: Provider = {
  name: 'Split',
  logo: SplitSvg,
  technologies: {
    JavaScript: {
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-js',
    },
    Go: {
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-go',
    },
    Java: {
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-java',
    },
    ['.NET']: {
      vendorOfficial: true,
      href: 'https://github.com/splitio/split-openfeature-provider-dotnet',
    },
    PHP: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/php-sdk-contrib/tree/main/providers/Split',
    },
  },
};
