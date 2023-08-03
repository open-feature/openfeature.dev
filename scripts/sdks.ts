import { modifyContent } from './modify-content';
import { SDK } from './types';

const SDKS: SDK[] = [
  {
    name: 'Go',
    type: 'server',
    repo: 'go-sdk',
    branch: 'main',
  },
];

export const sdks = {
  paths: SDKS.map((sdk) => `${sdk.repo}/${sdk.branch ?? 'main'}/README.md`),
  modifyContent: modifyContent(SDKS),
};
