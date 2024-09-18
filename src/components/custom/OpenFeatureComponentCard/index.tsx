import React from 'react';
import { FontAwesomeCardData, SvgCardData, SvgOrFonticon } from '../SvgOrFonticon';
import { faCircleCheck, faSadCry } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@docusaurus/Link';

type CardData = {
  href: string;
  title: string;
  description: string;
  /**
   * Cards with "vendorOfficial:true" will have a badge indicating they are vendor maintained and supported.
   * This should only be used for providers/hooks released and maintained by vendors, not in OpenFeature contrib repositories.
   */
  vendorOfficial?: boolean;
  /**
   * Cards with "showLast:true" will be alphabetically sorted amongst themselves, AFTER all "showLast:false" cards.
   * Defaults to false.
   */
  showLast?: boolean;
};

export type OpenFeatureComponentCardData = CardData & (SvgCardData | FontAwesomeCardData);
/**
 * A card to be used for linking (externally or internally) to specific technologies (SDKs, hooks, providers)
 */
export class OpenFeatureComponentCard extends React.Component<OpenFeatureComponentCardData> {
  override render() {
    const props = this.props as CardData & Partial<SvgCardData & FontAwesomeCardData>;
    const external = props.href.startsWith('http');
    return (
      <Link to={props.href} style={{ position: 'relative' }} className={'card padding--lg card-container'}>
        <div style={{ height: 0, position: 'absolute', right: 20, top: 20 }}>{external ? '🔗' : ''}</div>

        <SvgOrFonticon svg={props.svg} iconDefinition={props.iconDefinition} />
        <h1 className={'text--truncate text-lg'}>{this.props.title}</h1>
        <h2 className={'text-sm'}>{this.props.description}</h2>
        <div className={'flex justify-end'}>
          {props.vendorOfficial ? (
            <FontAwesomeIcon icon={faCircleCheck} title="Official, vendor-supported provider" />
          ) : (
            // visibility: 'hidden'  is important here. This icon is only here for consistent sizing.
            <FontAwesomeIcon style={{ visibility: 'hidden' }} icon={faSadCry} />
          )}
        </div>
      </Link>
    );
  }
}
