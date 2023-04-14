import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition as BrandsIconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCode, IconDefinition as FreeIconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ComponentType, SVGProps } from 'react';
import styles from './styles.module.css';

export type SvgOrFontIconConfig = {
  size?: number;
};

export type FontAwesomeCardData = {
  iconDefinition?: BrandsIconDefinition | FreeIconDefinition;
};

export type SvgCardData = {
  /**
   * A colorless (no fill, no stroke) svg to embed
   */
  svg?: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * A card to be used for linking (externally or internally) to specific technologies (SDKs, hooks, providers)
 */
export class SvgOrFonticon extends React.Component<SvgOrFontIconConfig & SvgCardData & FontAwesomeCardData> {
  override render() {
    // default to 45px
    const props = {size: 45, ...this.props} as SvgOrFontIconConfig & Partial<SvgCardData & FontAwesomeCardData>;
    let iconDef: IconProp;
    let SvgComponent: ComponentType<SVGProps<SVGSVGElement>>;

    if (props.svg) {
      SvgComponent = props.svg;
    } else {
      iconDef = (props.iconDefinition ? props.iconDefinition : faCode) as IconProp;
    }
    return (
      <span style={{ marginBottom: 16 }}>
        {props.svg ? (
          <div style={{ display: 'inline', verticalAlign: 'middle' }} className={styles.svgOrIcon}>
          <SvgComponent style={{ display: 'inline', width: props.size, height: props.size}}/>
        </div>          
        ) : (
          <FontAwesomeIcon style={{verticalAlign: 'sub', margin: 0, height: props.size, width: props.size }} className={styles.svgOrIcon} icon={iconDef} />
        )}
      </span>
    );
  }
}
