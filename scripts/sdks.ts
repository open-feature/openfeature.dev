import { modifyContent } from './modify-content';
import { SDK } from './types';

const SDKS: SDK[] = [
  {
    name: 'Go',
    type: 'server',
    repo: 'go-sdk',
    // TODO replace once this branch is merged.
    branch: 'doc-in-readme',
  },
  // TODO enable once the readme format is agreed upon
  // {
  //   name: 'Java',
  //   type: 'server',
  //   repo: 'java-sdk',
  // },
];

export const sdks = {
  paths: SDKS.map((sdk) => `${sdk.repo}/${sdk.branch ?? 'main'}/README.md`),
  modifyContent: modifyContent(SDKS),
};
