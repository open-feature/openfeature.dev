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
      release: this.getReleaseInfo(sdk.repoUrl, sdk.content),
      spec: this.getSpecInfo(sdk.content),
      features: this.getFeatureStatus(sdk.path, sdk.content),
    });
  }

  generateJson(path: string) {
    writeFileSync(path, JSON.stringify(this._matrix, null, 2));
  }

  private getReleaseInfo(url: string, content: string): SdkCompatibility['release'] {
    const releaseRegex = new RegExp(
      `<a href="(${url.replaceAll('/', '\\/').replaceAll('.', '\\.')}\\/releases\\/tag\\/.*(v?\\d+\\.\\d+\\.\\d+))">`
    );
    const releaseInfo = releaseRegex.exec(content);
    return {
      href: releaseInfo[1],
      version: releaseInfo[2],
      stable: !releaseInfo[2].startsWith('0.'),
    };
  }

  private getSpecInfo(content: string): SdkCompatibility['spec'] {
    const specRegex = new RegExp(
      '<a href="(https:\\/\\/github\\.com\\/open-feature\\/spec\\/tree\\/v(\\d+\\.\\d+\\.\\d+))">'
    );

    const specInfo = specRegex.exec(content);

    return {
      href: specInfo[1],
      version: specInfo[2],
    };
  }

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
