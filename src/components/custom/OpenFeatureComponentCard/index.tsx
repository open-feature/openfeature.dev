import clsx from 'clsx';
import React, { ComponentType, SVGProps } from 'react';
import { FontAwesomeCardData, SvgCardData, SvgOrFonticon } from '../SvgOrFonticon';
import { faCircleCheck, faSadCry } from '@fortawesome/free-regular-svg-icons';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@docusaurus/Link';

type CardData = {
  href: string;
  title: string;
  description?: string;
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
  image?: string;
  svgImage?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type OpenFeatureComponentCardData = CardData & (SvgCardData | FontAwesomeCardData);

/**
 * A card to be used for linking (externally or internally) to specific technologies (SDKs, hooks, providers)
 */
export class OpenFeatureComponentCard extends React.Component<OpenFeatureComponentCardData> {
  override render() {
    const props = this.props as CardData & Partial<SvgCardData & FontAwesomeCardData>;
    const external = props.href.startsWith('http');
    let SvgComponent: ComponentType<SVGProps<SVGSVGElement>>;
    
    if (props.svgImage) {
      SvgComponent = props.svgImage;
    }
    
    return (
      <Link to={props.href} style={{ position: 'relative' }} className={clsx('card padding--lg', styles.cardContainer)}>
        <div style={{ height: 0, position: 'absolute', right: 20, top: 20 }}>{external && !props.image && !props.svgImage ? '🔗' : ''}</div>
        {props.image && (
          <div className='min-h-24 flex content-center items-center'>
            <img src={props.image} alt={`${props.title} logo`} className='w-11/12 ml-auto mr-auto block align-middle' />
          </div>
        )}
        {props.svgImage && (
          <div className='h-28 w-72'>
            <SvgComponent className='w-full h-full object-contain object-center' />
          </div>
        )}

        {!props.image && !props.svgImage && (
            <SvgOrFonticon svg={props.svg} iconDefinition={props.iconDefinition} />
        )}
        <h1 className={clsx('text--truncate', styles.cardTitle)}>{this.props.title && !props.image && !props.svgImage ? this.props.title : ''}</h1>
        <h2 className={clsx(styles.cardDescription)}>{this.props.description}</h2>
        <div className={clsx(styles.vendorOfficialContainer)}>
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
