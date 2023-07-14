import { SDK } from './types';

const OPEN_FEATURE_URL = 'https://openfeature.dev';
const DEFAULT_BRANCH = 'main';
const DEFAULT_FILE_EXTENSION = 'mdx';
const GITHUB_ORG = 'open-feature';

/**
 * Removes emojis from headers.. they look fine in GitHub but awful in the docs.
 */
const removeEmojisFromHeaders = (content: string): string => {
  return content.replace(
    /(#{1,5}) ([\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
    '$1'
  );
};

/**
 * Removes all the content between the markdown comment `x-hide-in-docs-start`
 * and `x-hide-in-docs-end`. This is used to hide information important to the
 * repo but redundant or confusing in the docs.
 */
const removeSections = (content: string): string => {
  return content.replace(/<!-- x-hide-in-docs-start -->(\n|.)*?<!-- x-hide-in-docs-end -->/gm, '');
};

/**
 * Removes all the content on a single line when the markdown comment `x-hide-in-docs`
 * is detected.
 */
const removeLine = (content: string): string => {
  return content.replace(/.*<!-- x-hide-in-docs -->.*/g, '');
};

/**
 * Removes all comments from the readme
 */
const removeComments = (content: string): string => {
  return content.replace(/<!--.*-->/g, '');
};

/**
 * Removes multiple extra lines between sections. These extra lines typically
 * are a result of prior content manipulation.
 */
const removeExtraNewlinesBetweenSections = (content: string): string => {
  return content.replace(/\n*\n{3,}/gm, '\n\n');
};

/**
 * Removes extra lines at the top of the file. These extra lines typically
 * are a result of prior content manipulation.
 */
const removeExtraNewlinesAtTop = (content: string): string => {
  return content.replace(/^[ \t]*\n+/m, '');
};

/**
 * Add header information to the content.
 */
const addHeader =
  (sdk: { name: string; url: string; repo: string }) =>
  (content: string): string => {
    return `---
title: ${sdk.name}
---

<!--
This content has been automatically generated from ${sdk.repo}.

Edits should be made here: ${sdk.url}
Once a repo's repo has been updated, docs can be generated by running: yarn update:sdk-docs

Last updated at ${new Date()}
-->

${content}`;
  };

const replaceLinks = (repo: { url: string; branch: string }) => {
  return (content: string) => {
    const replace = (processRelativeUrl: (url: string, separator: string) => string) => (url: string) => {
      try {
        new URL(url);
        return url.replace(OPEN_FEATURE_URL, '');
      } catch {
        // Replace relative links that start with `./` or `/`
        const separator = /^\.?\//.test(url) ? '' : '/';
        return processRelativeUrl(url, separator);
      }
    };

    const replaceMarkdownLink = replace((url, separator) => {
      if (url.startsWith('#')) {
        return url;
      } else if (url.startsWith(OPEN_FEATURE_URL)) {
        return url.replace(OPEN_FEATURE_URL, '');
      } else {
        return `${repo.url}/blob/${repo.branch}${separator}${url}`;
      }
    });

    const markdownLink = /(?<=\[.*\]\(\s?)([^\s)]+)(?=.*\))/g;

    return content.replaceAll(markdownLink, replaceMarkdownLink);
  };
};

/**
 * Transforms SDK READMEs for inclusion in the OpenFeature docs.
 */
export const modifyContent = (sdks: SDK[]) => {
  return (file: string, initialContent: string): { filename: string; content } => {
    const sdk = sdks.find((sdk) => file.startsWith(`${sdk.repo}/${sdk.branch ?? DEFAULT_BRANCH}`));

    if (!sdk) {
      throw new Error(`Unable to modify content for ${sdk.repo}`);
    }

    const url = `https://github.com/${GITHUB_ORG}/${sdk.repo}`;
    const fileName = sdk.filename ?? sdk.name.toLowerCase();
    const fileExtension = sdk.fileExtension ?? DEFAULT_FILE_EXTENSION;
    const branch = sdk.branch ?? DEFAULT_BRANCH;

    return {
      filename: `${sdk.type}/${fileName}.${fileExtension}`,
      content: [
        removeEmojisFromHeaders,
        removeSections,
        removeLine,
        removeComments,
        removeExtraNewlinesBetweenSections,
        removeExtraNewlinesAtTop,
        addHeader({ name: sdk.name, repo: sdk.repo, url }),
        replaceLinks({ url, branch }),
      ].reduce((currentContent, processor) => processor(currentContent), initialContent),
    };
  };
};
