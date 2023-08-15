import React, { ComponentType, SVGProps } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Pill from './pill';
import {TECHNOLOGY_COLOR_MAP, TYPE_COLOR_MAP, EcosystemElement} from '../../datasets';

export default function Hit({ hit }: { hit: EcosystemElement }) {
  const external = hit.href.startsWith('http');
  const Svg: ComponentType<SVGProps<SVGSVGElement>> = hit.logo;

  return (
    <a
      href={hit.href}
      target={external ? '_blank' : '_self'}
      className="card hover:no-underline h-full w-64 p-4 shadow-[0_1.5px_3px_0_rgba(0,0,0,0.15)] border border-solid border-1 border-emphasis-200 hover:border-primary hover:shadow-[0_3px_6px_0_rgba(0,0,0,0.2)] text-emphasis-800 hover:text-content fill-emphasis-800 hover:fill-emphasis-700"
    >
      <div className="flex justify-between mb-6">
        {/* Logo */}
        <Svg className="mt-2 h-8 w-8" />
        {/* Icon showing that it's an external link */}
        {external && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 opacity-60" />}
      </div>
      <h3>{hit.title}</h3>
      <p className="h-20 leading-snug line-clamp-3">{hit.description}</p>
      <div className="flex gap-2 flex-wrap mt-auto">
        <Pill color={TECHNOLOGY_COLOR_MAP[hit.technology]}>{hit.technology}</Pill>
        <Pill color={TYPE_COLOR_MAP[hit.type]}>{hit.type}</Pill>
        <Pill color={""}>{hit.category}</Pill>
      </div>
    </a>
  );
}
