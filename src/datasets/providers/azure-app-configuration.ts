import AzureAppConfigurationSvg from '@site/static/img/azure-app-configuration-no-fill.svg';
import { Provider } from '.';

export const AzureAppConfiguration: Provider = {
  name: 'Azure App Configuration',
  logo: AzureAppConfigurationSvg,
  technologies: [
    {
      technology: 'JavaScript',
      vendorOfficial: false,
      href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/azure-app-configuration',
      category: ['Server'],
    },
  ],
};
