import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { OpenFeatureComponentTable } from '../custom/OpenFeatureComponentTable';

// high level component for SDK table rendering, so we can avoid putting too much TS in .mdx files.
export class ClientTechnologiesTable extends React.Component {
  override render() {
    return (
      <OpenFeatureComponentTable
        items={[
          {
            href: '/docs/reference/technologies/client/web',
            iconDefinition: faGlobe,
            title: 'Web',
            description: 'SDK and components for the web',
          },
        ]}
      />
    );
  }
}
