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
    name: 'JavaScript',
    type: 'server',
    repo: 'js-sdk',
    branch: 'update-readme',
    folder: '/packages/server',
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
