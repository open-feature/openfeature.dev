import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AOS from 'aos';
import React, { useEffect } from 'react';
import QuestionBlocks from '../partials/question-blocks';
import FeaturesZigZag from '../partials/features-zigzag';
import HeroHome from '../partials/hero-home';
import PageIllustration from '../partials/page-illustration';
import VideoEmbed from '../partials/video-embed';

import { useLocation } from '@docusaurus/router';
import 'aos/dist/aos.css';
import '../css/style.css';

const WHAT_IS_OPENFEATURE_VIDEO_ID = 'heQ83k15ZE4';

export default function Home(): JSX.Element {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <Layout description={siteConfig.customFields.description as string}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          {/*  Page sections */}
          <HeroHome />
          <QuestionBlocks />
          <VideoEmbed videoId={WHAT_IS_OPENFEATURE_VIDEO_ID} />
          <FeaturesZigZag />
        </main>
      </div>
    </Layout>
  );
}
