import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import CloudbeesNoFillSvg from '@site/static/img/cloudbees-no-fill.svg';
import ConfigCat from '@site/static/img/config-cat-no-fill.svg';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import GoFeatureFlagNoFillSvg from '@site/static/img/goff-no-fill.svg';
import LaunchDarklyNoFillSvg from '@site/static/img/launchdarkly-no-fill.svg';
import OtelNoFillSvg from '@site/static/img/otel-no-fill.svg';
import PostHogNoFillSvg from '@site/static/img/post-hog-no-fill.svg';
import SplitNoFillSvg from '@site/static/img/split-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';

export class JavascriptFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="JavaScript"
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
            description: 'The official CloudBees provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-node',
            svg: CloudbeesNoFillSvg,
            vendorOfficial: true
          },
          {
            title: 'flagd Provider',
            description: 'A provider for flagd',
            href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/flagd',
            svg: FlagdSvg,
          },
          {
            title: 'LaunchDarkly Provider',
            description: 'The official LaunchDarkly provider for OpenFeature',
            href: 'https://github.com/launchdarkly/openfeature-node-server',
            svg: LaunchDarklyNoFillSvg,
            vendorOfficial: true
          },
          {
            title: 'Split Provider',
            description: 'The official Split provider for OpenFeature',
            href: 'https://github.com/splitio/split-openfeature-provider-js',
            svg: SplitNoFillSvg,
            vendorOfficial: true
          },
          {
            title: 'GO Feature Flag Provider',
            description: 'A provider for GO Feature Flag',
            href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag',
            svg: GoFeatureFlagNoFillSvg,
          },
          {
            title: 'PostHog Provider',
            description: 'A provider for the PostHog suite',
            href: 'https://www.npmjs.com/package/@tapico/node-openfeature-posthog',
            svg: PostHogNoFillSvg,
          },
          {
            title: 'ConfigCat Provider',
            description: 'A provider for ConfigCat',
            href: 'https://www.npmjs.com/package/@openfeature/config-cat-provider',
            svg: ConfigCat,
          },
        ]}
        hooks={[
          {
            title: 'OpenTelemetry Hook',
            description: 'A hook for OpenTelemetry integration',
            href: 'https://github.com/open-feature/js-sdk-contrib/tree/main/libs/hooks/open-telemetry',
            svg: OtelNoFillSvg,
          },
        ]}
      />
    );
  }
}
