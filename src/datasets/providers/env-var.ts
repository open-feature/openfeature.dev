import EnvVarSvg from '@site/static/img/gear-icon.svg';
import { Provider } from '.';

export const EnvVar: Provider = {
  name: 'Environment Variable',
  logo: EnvVarSvg,
  excludeFromLandingPage: true,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/from-env',
      category: ['Server'],
    },
    {
      technology: 'Java',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/env-var',
      category: ['Server'],
    },
    {
      technology: 'JavaScript',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/env-var',
      category: ['Server'],
    },
    {
      technology: 'Rust',
      vendorOfficial: true,
      href: 'https://github.com/open-feature/rust-sdk-contrib/tree/main/crates/env-var',
      category: ['Server'],
    },
  ],
};
