import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

import { ECOSYSTEM } from '../../datasets';
import type { EcosystemElement, Type } from '../../datasets/types';
import type { OFREPElement } from '../../datasets/ofrep-api';

type Item = EcosystemElement | OFREPElement;

const SECTIONS: { type: Type; title: string }[] = [
  { type: 'SDK', title: 'SDKs' },
  { type: 'Provider', title: 'Providers' },
  { type: 'Hook', title: 'Hooks' },
  { type: 'OFREP API', title: 'OFREP APIs' },
  { type: 'Integration', title: 'Integrations' },
];

const details = (item: Item): string =>
  [
    'technology' in item ? item.technology : undefined,
    'category' in item ? item.category.join(', ') : undefined,
    item.vendorOfficial ? 'vendor supported' : undefined,
  ]
    .filter(Boolean)
    .join(', ');

const Entry = ({ item, label }: { item: Item; label: string }) => (
  <li>
    <a href={item.href}>{label}</a>
    {details(item) && ` (${details(item)})`}
  </li>
);

const byVendor = (items: Item[]): [string, Item[]][] => {
  const groups = new Map<string, Item[]>();
  items.forEach((item) => {
    const vendor = item.vendor ?? 'Other';
    groups.set(vendor, [...(groups.get(vendor) ?? []), item]);
  });
  return [...groups].sort(([a], [b]) => a.localeCompare(b));
};

// The ecosystem page is rendered client-side by InstantSearch, so keep the full list in the SSR HTML
// for the llms.txt plugin.
export default function LlmsEcosystemList() {
  const isBrowser = useIsBrowser();
  if (isBrowser) return null;

  return (
    <section className="llms-ecosystem" hidden>
      <h1>OpenFeature Ecosystem</h1>
      <p>SDKs, providers, hooks, OFREP APIs, and integrations that work with OpenFeature.</p>
      {SECTIONS.map(({ type, title }) => {
        const items = ECOSYSTEM.filter((item) => item.type === type);
        if (!items.length) return null;
        return (
          <React.Fragment key={type}>
            <h2>{title}</h2>
            {type === 'Provider' ? (
              byVendor(items).map(([vendor, providers]) => (
                <React.Fragment key={vendor}>
                  <h3>{vendor}</h3>
                  <ul>
                    {providers.map((item) => (
                      <Entry key={item.href + details(item)} item={item} label={item.title} />
                    ))}
                  </ul>
                </React.Fragment>
              ))
            ) : (
              <ul>
                {items.map((item) => (
                  <Entry key={item.href + details(item)} item={item} label={item.title} />
                ))}
              </ul>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
}
