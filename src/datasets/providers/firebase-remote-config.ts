import FirebaseRemoteConfigSvg from '@site/static/img/firebase-remote-config-no-fill.svg';
import type { Provider } from '.';

export const FirebaseRemoteConfig: Provider = {
  name: 'Firebase Remote Config',
  logo: FirebaseRemoteConfigSvg,
  technologies: [
    {
      technology: 'Swift',
      vendorOfficial: false,
      href: 'https://github.com/fumito-ito/FirebaseRemoteConfig-OpenFeature-Provider-Swift',
      category: ['Client'],
    },
  ],
};
