import LaunchDarklyNoFillSvg from '@site/static/img/launchdarkly-no-fill.svg';
import { Provider } from '.';

export const LaunchDarkly: Provider = {
  name: 'LaunchDarkly',
  logo: LaunchDarklyNoFillSvg,
  technologies: {
    JavaScript: {
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-node-server',
    },
    Go: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/launchdarkly',
    },
    Java: {
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-java-server',
    },
    ['.NET']: {
      vendorOfficial: true,
      href: 'https://github.com/launchdarkly/openfeature-dotnet-server',
    },
  },
};
