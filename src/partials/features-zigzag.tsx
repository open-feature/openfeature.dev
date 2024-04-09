import React from 'react';
import CheckboxIcon from './checkbox-icon';
import Link from '@docusaurus/Link';

/**
 * The code snippet was created on Carbon.now using the dracula pro theme.
 *
 * @link https://carbon.now.sh/?bg=rgba%28171%2C184%2C195%2C0%29&t=dracula-pro&wt=none&l=application%2Ftypescript&width=763.5&ds=true&dsyoff=5px&dsblur=11px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=OpenFeature.setProvider%28new%2520MyProvider%28%29%29%253B%250A%250Aconst%2520featureFlags%2520%253D%2520OpenFeature.getClient%28%29%253B%250A%250Aconst%2520withCows%2520%253D%2520await%2520featureFlags.getBooleanValue%28%2522with-cows%2522%252C%2520false%29%253B%250Aif%2520%28withCows%29%2520%257B%250A%2520%2520res.send%28cowsay.say%28%257B%2520text%253A%2520%2522Hello%252C%2520world%21%2522%2520%257D%29%29%253B%250A%257D%2520else%2520%257B%250A%2520%2520res.send%28%2522Hello%252C%2520world%21%2522%29%253B%250A%257D
 *
 * NOTE: Please update the link if the image is changed.
 */
import CodeSnippet from '@site/static/img/code-snippet.png';

import { PROVIDERS } from '@site/src/datasets/providers';
import { ECOSYSTEM_SDKS } from '@site/src/datasets/sdks/ecosystem';

function FeaturesZigZag() {
  function getVendorLink(vendor: string) {
    return encodeURI(`/ecosystem?instant_search[refinementList][vendor][0]=${vendor}`);
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Open source
            </div>
            <h1 className="h2 mb-4">Community driven feature flagging</h1>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
              OpenFeature is an open source CNCF incubating project under the Apache 2 license. Check out the project on{' '}
              <Link to="https://github.com/open-feature">GitHub</Link> and consider joining the{' '}
              <Link to="/community/">OpenFeature community!</Link>
            </p>
          </div>
          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={CodeSnippet}
                  width="540"
                  height="405"
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Avoid code-level lock-in</div>
                  <h3 className="h3 mb-3">One SDK, any backend</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
                    OpenFeature is designed to work with any feature flag management tool or in-house solution. This
                    enables you to switch between platforms or consolidate multiple platforms much more easily.
                  </p>
                  <ul className="text-lg text-gray-500 dark:text-gray-300 -mb-2 pl-0">
                    <li className="flex items-center mb-2">
                      <CheckboxIcon text="Continue to use your current solution" />
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckboxIcon text="Combine multiple solutions behind a single interface" />
                    </li>
                    <li className="flex items-center">
                      <CheckboxIcon text="Try a new solution without a code refactor" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                data-aos="fade-up"
              >
                <div className="max-w-full mx-auto md:max-w-none h-auto flex flex-row flex-wrap fill-[#1c1e21] dark:fill-[#e3e3e3]">
                  {PROVIDERS.filter((p) => !p.excludeFromLandingPage).map((vendor) => {
                    const Icon = vendor.logo;
                    return (
                      <Link
                        to={getVendorLink(vendor.name)}
                        aria-label={vendor.name}
                        className="flex-auto h-20 w-20 m-4 fill-[#1c1e21] dark:fill-[#e3e3e3] "
                      >
                        <Icon className="h-full w-full hover:fill-primary" />
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Developed with the industry
                  </div>
                  <h3 className="h3 mb-3">Supports your favorite tools</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
                    OpenFeature has broad industry support, and many of the top open source and commercial tools have
                    created officially-supported providers.
                  </p>
                  <ul className="text-lg text-gray-500 dark:text-gray-300 -mb-2 pl-0">
                    <li className="flex items-center mb-2">
                      <CheckboxIcon text="Works with your favorite vendor" />
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckboxIcon text="Integrates with popular open source projects" />
                    </li>
                    <li className="flex items-center">
                      <CheckboxIcon text="Add support to your home grown solution" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <div className="max-w-full mx-auto md:max-w-none h-auto flex flex-row flex-wrap">
                  {ECOSYSTEM_SDKS.map((sdk) => {
                    const Icon = sdk.logo;
                    return (
                      <Link to={sdk.href} aria-label={sdk.technology} className="flex-auto h-20 w-20 m-4 fill-[#1c1e21] dark:fill-[#e3e3e3] ">
                        <Icon className="h-full w-full hover:fill-primary" />
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Ultimate flexibility</div>
                  <h3 className="h3 mb-3">Speaks your language</h3>
                  <p className="text-xl text-gray-500 dark:text-gray-300 mb-4">
                    OpenFeature supports many of the top programming languages, with more on the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigZag;
