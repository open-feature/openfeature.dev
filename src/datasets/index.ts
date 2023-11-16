import { ECOSYSTEM_HOOKS } from './hooks';
import { ECOSYSTEM_PROVIDERS } from './providers';
import { ECOSYSTEM_SDKS } from './sdks/ecosystem';
import { EcosystemElement, Technology, Type } from './types';

export const ECOSYSTEM: EcosystemElement[] = [...ECOSYSTEM_SDKS, ...ECOSYSTEM_PROVIDERS, ...ECOSYSTEM_HOOKS].map(
  (s) => ({
    // Creates a unique id per item for the search index
    id: `${s.type}/${s.category}/${s.technology}/${s.vendor}/${s.href}`,
    ...s,
  })
);

export const TECHNOLOGY_COLOR_MAP: Record<Technology, string> = {
  JavaScript: 'bg-yellow-50 text-yellow-600 ring-yellow-500/10',
  Go: 'bg-sky-50 text-sky-600 ring-sky-500/10',
  Java: 'bg-amber-50 text-amber-600 ring-amber-500/10',
  ['.NET']: 'bg-violet-50 text-violet-600 ring-violet-500/10',
  PHP: 'bg-indigo-50 text-indigo-600 ring-indigo-500/10',
  Kotlin: 'bg-purple-50 text-purple-600 ring-purple-500/10',
  Python: 'bg-blue-50 text-blue-600 ring-blue-500/10',
};

export const TYPE_COLOR_MAP: Record<Type, string> = {
  Hook: 'bg-green-50 text-green-600 ring-green-500/10',
  Provider: 'bg-blue-50 text-blue-600 ring-blue-500/10',
  SDK: 'bg-violet-50 text-violet-600 ring-violet-500/10',
};
