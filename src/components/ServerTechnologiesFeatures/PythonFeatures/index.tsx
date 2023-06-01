import { faPython } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import OTelSvg from '@site/static/img/otel-no-fill.svg';
import DatadogSvg from '@site/static/img/datadog-no-fill.svg';
import CheckCircle from '@site/static/img/check-circle-no-fill.svg';

export class PythonFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="Python"
        iconDefinition={faPython}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/python-sdk',
        }}
        artifact={{
          title: 'OpenFeature on Pypi',
          href: 'https://pypi.org/project/openfeature-sdk/',
          instruction: 'pip install openfeature-sdk==0.0.9',
          codeBlockLanguage: 'shell',
        }}
        providers={[]}
        hooks={[]}
      />
    );
  }
}
