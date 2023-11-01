import React from 'react';
import { OpenFeatureComponentTable } from '../OpenFeatureComponentTable';
import { ECOSYSTEM_SDKS } from '@site/src/datasets/sdks/ecosystem';

// high level component for SDK table rendering, so we can avoid putting too much TS in .mdx files.
export class ServerTechnologiesFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureComponentTable
        items={ECOSYSTEM_SDKS.filter((sdk) => sdk.category.includes('Server')).map((sdk) => ({
          href: sdk.href,
          description: sdk.description,
          title: sdk.title,
          svg: sdk.logo,
        }))}
      />
    );
  }
}
