import { modifyContent } from './modify-content';
import { SDK } from './types';

const SDKS: SDK[] = [
  {
    name: 'Go',
    type: 'server',
    repo: 'go-sdk',
    branch: 'main',
  },
  {
    name: 'Node.js',
    // The file name also controls the slug used by Docusaurus
    filename: 'javascript',
    type: 'server',
    repo: 'js-sdk',
    branch: 'main',
    folder: '/packages/server',
  },
  {
    name: 'Web',
    filename: 'web',
    type: 'client',
    repo: 'js-sdk',
    branch: 'main',
    folder: '/packages/client',
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
