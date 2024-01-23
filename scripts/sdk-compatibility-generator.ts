import { writeFileSync } from 'fs';
import { SdkCompatibility } from '../src/datasets/types';
import { features } from '../src/datasets/constants';
import { SDK } from '../src/datasets/sdks';

type Input = Pick<SDK, 'name' | 'category'> & {
  path: string;
  repoUrl: string;
  content: string;
};

export class SdkCompatibilityGenerator {
  private _matrix: SdkCompatibility[] = [];

  addSdk(sdk: Input) {
    this._matrix.push({
      name: sdk.name,
      path: sdk.path,
      category: sdk.category,
      release: this.getReleaseInfo(sdk.name, sdk.repoUrl, sdk.content),
      spec: this.getSpecInfo(sdk.name, sdk.content),
      features: this.getFeatureStatus(sdk.path, sdk.content),
    });
  }

  generateJson(path: string) {
    writeFileSync(path, JSON.stringify(this._matrix, null, 2));
  }

  /**
   * Extracts the release version and a link to the release notes from a badge
   * on the SDKs readme. The RegEx is looking for an <a> tag that looks like
   * <a href="https://github.com/open-feature/SDK_REPO_NAME/releases/tag/TAG_VERSION">
   * or a markdown link that looks like (https://github.com/open-feature/SDK_REPO_NAME/releases/tag/TAG_VERSION).
   */
  private getReleaseInfo(name: string, url: string, content: string): SdkCompatibility['release'] {
    const releaseHtmlRegex = new RegExp(
      `<a href="(${url.replaceAll('/', '\\/').replaceAll('.', '\\.')}\\/releases\\/tag\\/.*(v?\\d+\\.\\d+\\.\\d+))">`,
    );
    const releaseMarkdownRegex = new RegExp(
      `\\((${url.replaceAll('/', '\\/').replaceAll('.', '\\.')}\\/releases\\/tag\\/.*(v?\\d+\\.\\d+\\.\\d+))\\)`,
    );
    const releaseInfo = releaseHtmlRegex.exec(content) ?? releaseMarkdownRegex.exec(content);
    if (!releaseInfo) {
      throw new Error(`Unable to extract spec information from ${name}`);
    }

    return {
      href: releaseInfo[1],
      version: releaseInfo[2],
      stable: !releaseInfo[2].startsWith('0.'),
    };
  }

  /**
   * Extracts the spec version and a link to the release notes from a badge
   * on the SDKs readme. The RegEx is looking for an <a> tag that looks like
   * <a href="https://github.com/open-feature/spec/releases/tag/TAG_VERSION"> or
   * a markdown link that looks like (https://github.com/open-feature/spec/releases/tag/TAG_VERSION).
   */
  private getSpecInfo(name: string, content: string): SdkCompatibility['spec'] {
    const specHtmlRegex = new RegExp(
      '<a href="(https:\\/\\/github\\.com\\/open-feature\\/spec\\/releases\\/tag\\/v(\\d+\\.\\d+\\.\\d+))">',
    );
    const specMarkdownRegex = new RegExp(
      '\\((https:\\/\\/github\\.com\\/open-feature\\/spec\\/releases\\/tag\\/v(\\d+\\.\\d+\\.\\d+))\\)',
    );

    const specInfo = specHtmlRegex.exec(content) ?? specMarkdownRegex.exec(content);
    if (!specInfo) {
      throw new Error(`Unable to extract spec information from ${name}`);
    }

    return {
      href: specInfo[1],
      version: specInfo[2],
    };
  }

  /**
   * Extracts the status of features defined on the SDK readme. The feature table
   * should match the SDK readme template.
   *
   * @link https://github.com/open-feature/.github/tree/main/templates/READMEs#-features
   */
  private getFeatureStatus(path: string, content: string): SdkCompatibility['features'] {
    const featureStatus = {};

    for (const feature of features) {
      const featureRegex = new RegExp(String.raw`(✅|⚠️|❌) +\|.+\[${feature}\]\(#(.+?)\)`);

      const extractedFeature = featureRegex.exec(content);
      featureStatus[feature] = {
        status: extractedFeature?.[1] ?? '❓',
        path: extractedFeature?.[2] ? `${path}#${extractedFeature[2]}` : path,
      };
    }

    return featureStatus;
  }
}
