import { faJava } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import GoFeatureFlagSvg from '@site/static/img/goff-no-fill.svg';
import FlagsmithNoFill from '@site/static/img/flagsmith-no-fill.svg';
import OtelNoFillSvg from '@site/static/img/otel-no-fill.svg';
import LaunchDarklySvg from '@site/static/img/launchdarkly-no-fill.svg';

export class JavaFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="Java"
        iconDefinition={faJava}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/java-sdk',
        }}
        artifact={{
          title: 'Maven Central repository',
          href: 'https://search.maven.org/artifact/dev.openfeature/javasdk/',
          instruction: `
<dependency>
  <groupId>dev.openfeature</groupId>
  <artifactId>javasdk</artifactId>
  <version>\${openfeature.version}</version>
</dependency>
        `,
          codeBlockLanguage: 'xml',
        }}
        providers={[
          {
            title: 'CloudBees Provider',
            description: 'The official CloudBees provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-java',
            svg: CloudbeesSvg,
            vendorOfficial: true,
          },
          {
            title: 'flagd Provider',
            description: 'A provider for flagd',
            href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flagd',
            svg: FlagdSvg,
          },
          {
            title: 'LaunchDarkly Provider',
            description: 'The official LaunchDarkly provider for OpenFeature',
            href: 'https://github.com/launchdarkly/openfeature-java-server',
            svg: LaunchDarklySvg,
            vendorOfficial: true,
          },
          {
            title: 'Split Provider',
            description: 'The official Split provider for OpenFeature',
            href: 'https://github.com/splitio/split-openfeature-provider-java',
            svg: SplitSvg,
            vendorOfficial: true,
          },
          {
            title: 'GO Feature Flag Provider',
            description: 'A provider for GO Feature Flag',
            href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/go-feature-flag',
            svg: GoFeatureFlagSvg,
          },
          {
            title: 'Flagsmith Provider',
            description: 'The official Flagsmith provider for OpenFeature',
            href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/providers/flagsmith',
            svg: FlagsmithNoFill,
            vendorOfficial: true,
          },
        ]}
        hooks={[
          {
            title: 'OpenTelemetry Hook',
            description: 'A hook for OpenTelemetry integration',
            href: 'https://github.com/open-feature/java-sdk-contrib/tree/main/hooks/open-telemetry',
            svg: OtelNoFillSvg,
          },
        ]}
      />
    );
  }
}
