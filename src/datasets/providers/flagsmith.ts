import FlagsmithSvg from '@site/static/img/flagsmith-no-fill.svg';
import { Provider } from '.';

export const Flagsmith: Provider = {
  name: 'Flagsmith',
  logo: FlagsmithSvg,
  technologies: {
    Go: {
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flagsmith',
    },
    Java: {
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flagsmith',
    },
  },
};
