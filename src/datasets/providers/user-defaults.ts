import UserDefaultsSvg from '@site/static/img/gear-icon.svg';
import { Provider } from '.';

// https://developer.apple.com/documentation/foundation/userdefaults
export const UserDefaults: Provider = {
  name: 'UserDefaults',
  logo: UserDefaultsSvg,
  excludeFromLandingPage: true,
  technologies: [
    {
      technology: 'Swift',
      vendorOfficial: false,
      href: 'https://github.com/fumito-ito/UserDefaults-OpenFeature-Provider-Swift',
      category: ['Client'],
    },
  ],
};
