import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import GoffSvg from '@site/static/img/goff-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';

export class WebFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="the web"
        iconDefinition={faSquareJs}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/js-sdk',
        }}
        artifact={{
          title: 'NPM',
          href: 'https://www.npmjs.com/package/@openfeature/js-sdk',
          instruction: 'npm install @openfeature/js-sdk',
          codeBlockLanguage: 'bash',
        }}
        providers={[
          {
            title: 'CloudBees Provider',
            description: 'The official CloudBees browser provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-browser',
            svg: CloudbeesSvg,
            vendorOfficial: true,
          },
          {
            title: 'FlagD Provider',
            description: 'The official FlagD browser provider for OpenFeature',
            href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd-web',
            svg: FlagdSvg,
            vendorOfficial: false,
          },
          {
            title: 'GO Feature Flag Provider',
            description: 'The official GO Feature Flag browser provider for OpenFeature',
            href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag-web',
            svg: GoffSvg,
            vendorOfficial: true,
          },
          {
            title: 'Split Provider',
            description: 'The official Split browser provider for OpenFeature',
            href: 'https://github.com/splitio/split-openfeature-provider-js',
            svg: SplitSvg,
            vendorOfficial: true,
          },
        ]}
        hooks={[]}
      />
    );
  }
}
