import { modifyContent } from './modify-content';
import { SDK } from './types';

const SDKS: SDK[] = [
  {
    name: 'Java',
    type: 'server',
    repo: 'java-sdk',
    branch: 'main',
  },
  {
    name: 'Go',
    type: 'server',
    repo: 'go-sdk',
    branch: 'main',
  },
  {
    name: 'Node.js',
    filename: 'javascript',
    slug: 'javascript',
    type: 'server',
    repo: 'js-sdk',
    branch: 'main',
    folder: '/packages/server',
  },
  {
    name: 'Web',
    filename: 'web',
    slug: 'web',
    type: 'client',
    repo: 'js-sdk',
    branch: 'main',
    folder: '/packages/client',
  },
  {
    name: 'Android',
    filename: 'kotlin',
    slug: 'kotlin',
    type: 'client',
    repo: 'kotlin-sdk',
    // TODO change to main before merging.
    branch: 'readme-template',
  },
];

export const sdks = {
  paths: SDKS.map((sdk) => {
    const branch = sdk.branch ?? 'main';
    const folder = sdk.folder ?? '';
    return `${sdk.repo}/${branch}${folder}/README.md`;
  }),
  modifyContent: modifyContent(SDKS),
};
