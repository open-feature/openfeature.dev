import { faGolang, faJava, faPhp, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import CSharpNoFillSvg from '@site/static/img/c-sharp-no-fill.svg';
import React from 'react';
import { OpenFeatureComponentTable } from '../custom/OpenFeatureComponentTable';

// high level component for SDK table rendering, so we can avoid putting too much TS in .mdx files.
export class ServerTechnologiesTable extends React.Component {
  override render() {
    return (
      <OpenFeatureComponentTable
        items={[
          {
            href: '/docs/reference/technologies/server/java',
            iconDefinition: faJava,
            title: 'Java',
            description: 'SDK and components for Java',
          },
          {
            href: '/docs/reference/technologies/server/javascript',
            iconDefinition: faNodeJs,
            title: 'Node.js',
            description: 'SDK and components for .Node.js',
          },
          {
            href: '/docs/reference/technologies/server/dotnet',
            title: '.NET',
            description: 'SDK and components for .NET',
            svg: CSharpNoFillSvg,
          },
          {
            href: '/docs/reference/technologies/server/go',
            iconDefinition: faGolang,
            title: 'Go',
            description: 'SDK and components for Go',
          },
          {
            href: '/docs/reference/technologies/server/php',
            iconDefinition: faPhp,
            title: 'PHP',
            description: 'SDK and components for PHP',
          },
        ]}
      />
    );
  }
}
