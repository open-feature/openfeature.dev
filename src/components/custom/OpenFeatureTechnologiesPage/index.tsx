import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import { OpenFeatureComponentCardData } from '../OpenFeatureComponentCard/';
import { OpenFeatureComponentTable } from '../OpenFeatureComponentTable/';
import { FontAwesomeCardData, SvgCardData, SvgOrFonticon } from '../SvgOrFonticon/';

export interface Link {
  href: string;
  title: string;
}

export interface InstallInstruction {
  instruction: string;
  codeBlockLanguage: string;
}

type TechnologyData = {
  technology: string;
  sdkRepoLink: Link;
  artifact: Link & InstallInstruction;
  hooks: OpenFeatureComponentCardData[];
  providers: OpenFeatureComponentCardData[];
} & (SvgCardData | FontAwesomeCardData);

const addNewProvider: OpenFeatureComponentCardData = {
  iconDefinition: faCirclePlus,
  title: 'Add yours...',
  description: 'Don\'t see what you\'re looking for? Create your own provider!',
  href: '/docs/reference/concepts/provider/#implementing-providers',
  showLast: true,
};

const addNewHook: OpenFeatureComponentCardData = {
  iconDefinition: faCirclePlus,
  title: 'Add yours...',
  description: 'Don\'t see what you\'re looking for? Create your own hook!',
  href: '/docs/reference/concepts/hooks#implementing-hooks',
  showLast: true,
};

export class OpenFeatureTechnologiesPage extends React.Component<TechnologyData> {
  override render() {
    const props = {
      ...this.props,
      providers: [...this.props.providers, addNewProvider],
      hooks: [...this.props.hooks, addNewHook],
    } as TechnologyData & Partial<SvgCardData & FontAwesomeCardData>;

    return (
      <div>
        <div>
          <SvgOrFonticon size={25} svg={props.svg} iconDefinition={props.iconDefinition} />
          <h2 style={{ display: 'inline', marginLeft: 10 }}>SDK</h2>
        </div>

        <p>
          <b>Repository: </b>
          <a href={props.sdkRepoLink.href}>{props.sdkRepoLink.title}</a>
          <br />
          <b>Artifact: </b>
          <a href={props.artifact.href}>{props.artifact.title}</a>
          <br />
          <b>Install: </b>
          <CodeBlock language={props.artifact.codeBlockLanguage}>{props.artifact.instruction}</CodeBlock>
        </p>

        <h3>Providers</h3>
        <p>
          <i>
            <a href="/docs/reference/concepts/provider">Providers</a>
          </i>{' '}
          are the "translation layer" between the{' '}
          <i>
            <a href="/docs/reference/concepts/evaluation-api/">evaluation API</a>
          </i>{' '}
          and the flag management system in use. The following providers are available for {props.technology}.
        </p>

        <OpenFeatureComponentTable items={props.providers} />

        <h3>Hooks</h3>
        <p>
          <i><a href="/docs/reference/concepts/hooks">Hooks</a></i> add behavior at well-defined points during the <i>flag evaluation lifecycle</i>. The following hooks are
          available for {props.technology}.
        </p>

        <div>
          <OpenFeatureComponentTable items={props.hooks} />
        </div>
      </div>
    );
  }
}
