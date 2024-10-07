// Controls the number of items shown on the ecosystem page.
export const SEARCH_ITEMS_PER_PAGE = 16;

/**
 * Features map to the anchors found in the features column on the SDK README template.
 *
 * @link https://github.com/open-feature/.github/tree/main/templates/READMEs
 */
export const serverSideFeatures = [
  'Providers',
  'Targeting',
  'Hooks',
  'Logging',
  // Domain is the updated terminology for "Named clients"
  ['Domains', 'Named clients'],
  'Eventing',
  'Shutdown',
  'Transaction Context Propagation',
  'Tracking',
  'Extending',
];

export const clientSideFeatures = [
  'Providers',
  'Targeting',
  'Hooks',
  'Logging',
  // Domain is the updated terminology for "Named clients"
  ['Domains', 'Named clients'],
  'Eventing',
  'Shutdown',
  'Tracking',
  'Extending',
];
