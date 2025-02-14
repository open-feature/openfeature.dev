// Controls the number of items shown on the ecosystem page.
export const SEARCH_ITEMS_PER_PAGE = 20;

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
  'Tracking',
  'Transaction Context Propagation',
  'Shutdown',
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
  'Tracking',
  'Shutdown',
  'Extending',
];
