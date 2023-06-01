import { faPython } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';

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
          instruction: 'pip install -U openfeature-sdk',
          codeBlockLanguage: 'shell',
        }}
        providers={[]}
        hooks={[]}
      />
    );
  }
}
