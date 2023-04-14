import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import GoFeatureFlagNoFillSvg from '@site/static/img/goff-no-fill.svg';
import LaunchDarklySvg from '@site/static/img/launchdarkly-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';

export class DotnetFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology=".NET"
        svg={CSharpNoFillSvg}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/dotnet-sdk',
        }}
        artifact={{
          title: 'NuGet package',
          href: 'https://www.nuget.org/packages/OpenFeature',
          instruction: 'dotnet add package OpenFeature',
          codeBlockLanguage: 'powershell',
        }}
        providers={[
          {
            title: 'CloudBees Provider',
            description: 'The official CloudBees provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-dotnet',
            svg: CloudbeesSvg,
            vendorOfficial: true
          },
          {
            title: 'GO Feature Flag Provider',
            description: 'A provider for GO Feature Flag',
            href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.GOFeatureFlag',
            svg: GoFeatureFlagNoFillSvg,
          },
          {
            title: 'LaunchDarkly Provider',
            description: 'The official LaunchDarkly provider for OpenFeature',
            href: 'https://github.com/launchdarkly/openfeature-dotnet-server',
            svg: LaunchDarklySvg,
            vendorOfficial: true
          },
          {
            title: 'Split Provider',
            description: 'The official Split provider for OpenFeature',
            href: 'https://github.com/splitio/split-openfeature-provider-dotnet',
            svg: SplitSvg,
            vendorOfficial: true
          },
          {
            title: 'flagd Provider',
            description: 'A provider for flagd',
            href: 'https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.Flagd',
            svg: FlagdSvg,
          },
        ]}
        hooks={[]}
      />
    );
  }
}
