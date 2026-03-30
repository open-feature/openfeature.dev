import React, { ComponentType, SVGProps } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '@docusaurus/Link';

import Pill from './pill';
import { TECHNOLOGY_COLOR_MAP, TYPE_COLOR_MAP } from '../../datasets';
import { EcosystemElement } from '../../datasets/types';
import type { OFREPElement } from '../../datasets/ofrep-api';

const VERSION_PILL_COLOR_MAP = {
  current: 'bg-green-50 text-green-600 ring-green-500/10',
  outdated: 'bg-amber-50 text-amber-600 ring-amber-500/10',
};

export default function Hit({ hit }: { hit: EcosystemElement | OFREPElement }) {
  const external = hit.href.startsWith('http');
  const Svg: ComponentType<SVGProps<SVGSVGElement>> = hit.logo;
  const sdkVersions = 'sdkVersions' in hit ? hit.sdkVersions : undefined;

  return (
    <Link
      to={hit.href}
      className="card hover:no-underline h-full w-64 p-4 shadow-[0_1.5px_3px_0_rgba(0,0,0,0.15)] border border-solid border-1 border-emphasis-200 hover:border-primary hover:shadow-[0_3px_6px_0_rgba(0,0,0,0.2)] text-emphasis-800 hover:text-content fill-emphasis-800 hover:fill-emphasis-800"
    >
      {sdkVersions ? (
        <div className="flex items-start justify-between gap-3 mb-5">
          <Svg className="mt-1 h-8 w-fit" />
          <div className="flex flex-col items-end gap-1">
            {external && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 opacity-60" />}
            <div className="inline-flex flex-col gap-1">
              <Pill
                color={sdkVersions.release.stable ? VERSION_PILL_COLOR_MAP.current : VERSION_PILL_COLOR_MAP.outdated}
                className="px-1 py-px text-center text-[11px] leading-none tabular-nums whitespace-nowrap"
              >
                SDK {sdkVersions.release.version}
              </Pill>
              <Pill
                color={sdkVersions.spec.latest ? VERSION_PILL_COLOR_MAP.current : VERSION_PILL_COLOR_MAP.outdated}
                className="px-1 py-px text-center text-[11px] leading-none tabular-nums whitespace-nowrap"
              >
                Spec {sdkVersions.spec.version}
              </Pill>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between mb-6">
          {/* Logo */}
          <Svg className="mt-2 h-8 w-fit" />
          {/* Icon showing that it's an external link */}
          {external && <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 opacity-60" />}
        </div>
      )}
      <h3 className="mt-0 mb-3 leading-tight">{hit.title}</h3>
      <p className="mt-0 leading-snug line-clamp-3">{hit.description}</p>
      <div className="flex gap-2 flex-wrap-reverse mt-auto pt-3">
        {'technology' in hit && (
          <>
            <Pill color={TECHNOLOGY_COLOR_MAP[hit.technology]}>{hit.technology}</Pill>
            {hit.parentTechnology && (
              <Pill color={TECHNOLOGY_COLOR_MAP[hit.parentTechnology]}>{hit.parentTechnology}</Pill>
            )}
            {hit.category.map((cat) => (
              <Pill key={cat}>
                {cat}
              </Pill>
            ))}
          </>
        )}
        <Pill color={TYPE_COLOR_MAP[hit.type]}>{hit.type}</Pill>
      </div>
    </Link>
  );
}
