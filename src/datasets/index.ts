import { HOOKS } from './hooks';
import { PROVIDERS } from './providers';
import type { ComponentType, SVGProps } from 'react';

export const ECOSYSTEM: EcosystemElement[] = [...PROVIDERS, ...HOOKS];

export type EcosystemElement = {
  href: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  technology: Technology;
  type: Type;
  vendorOfficial: boolean;
};

export type Technology = 'JavaScript' | 'Java' | 'Go' | 'PHP' | '.NET';


export const TECHNOLOGY_COLOR_MAP: Record<Technology, string> = {
  JavaScript: 'bg-yellow-50 text-yellow-600 ring-yellow-500/10',
  Go: 'bg-sky-50 text-sky-600 ring-sky-500/10',
  Java: 'bg-amber-50 text-amber-600 ring-amber-500/10',
  ['.NET']: 'bg-violet-50 text-violet-600 ring-violet-500/10',
  PHP: 'bg-indigo-50 text-indigo-600 ring-indigo-500/10',
};

export type Type = 'Hook' | 'Provider';

export const TYPE_COLOR_MAP: Record<Type, string> = {
  Hook: 'bg-green-50 text-green-600 ring-green-500/10',
  Provider: 'bg-blue-50 text-blue-600 ring-blue-500/10',
};