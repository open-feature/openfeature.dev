import React from 'react';
import { CourseCard } from '../components/custom/CourseCard';
import Layout from '@theme/Layout';
import { CommercialSupportList } from '../datasets/support/commercial-support';
import Link from '@docusaurus/Link';

export default function Support(): JSX.Element {
  return (
    <Layout title="Support" description="Support and Training">
      <section className="max-w-6xl mx-auto m-16 px-16 xl:px-0">
        <div className="text-center">
          <h1>Support & Training</h1>
        </div>
        <div className="mb-16">
          <h3>Courses</h3>
          <div className="flex flex-col gap-8">
            <CourseCard
              href="https://training.linuxfoundation.org/training/feature-flagging-with-openfeature-lfs140/"
              imageUrl={
                require('@site/static/img/blog/2025-11-18-kubecon-na-recap-and-new-cncf-training/lfs140.png').default
              }
              imageAlt="LFS140 Course"
              title="Feature Flagging with OpenFeature (LFS140)"
              subtitle="Linux Foundation Training Course"
              description={[
                "10 hours of self-paced content, including hands-on labs.",
                "Learn how to apply feature flagging in real-world projects using OpenFeature. Integrate with any flag management system, support canary and dark launches, run experiments, instrument flags with observability, and maintain clean, testable code."
              ]}
            />
            <CourseCard
              href="https://www.youtube.com/watch?v=heQ83k15ZE4&list=PLiQt8D1ofl8zs2zoiMNI8WRdNQ8GUy84I"
              imageUrl="https://i.ytimg.com/vi/heQ83k15ZE4/maxresdefault.jpg"
              imageAlt="OpenFeature Fundamentals"
              title="OpenFeature Fundamentals"
              subtitle="YouTube Video Series"
              description={[
                "A series of short videos introducing the core concepts of OpenFeature.",
                "Learn about the evaluation API, providers, context, hooks, and how to integrate OpenFeature into your code."
              ]}
            />
          </div>
        </div>
        <div className="mb-16">
          <h3>Commercial support</h3>
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {CommercialSupportList.map(({ href, name, svg: Svg }) => (
              <Link
                to={href}
                title={name}
                className="card card-container padding--lg dark:bg-white w-[362px] h-44 relative"
              >
                <div className="h-0 absolute right-2.5 top-2.5">{'🔗'}</div>
                <div className="flex justify-center items-center h-full">
                  <Svg className="w-full h-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3>Add a resource</h3>
          <p>
            If you have developed an OpenFeature training program or offer related services, you can add yourself to
            this page with a pull request.
          </p>
          <div className="flex justify-center mt-16">
            <Link
              className="btn text-white hover:text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
              to="https://github.com/open-feature/openfeature.dev"
            >
              Add your company
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
