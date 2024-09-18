import React from 'react';
import { OpenFeatureComponentCard } from '../components/custom/OpenFeatureComponentCard';
import Layout from '@theme/Layout';
import { CommercialSupportList } from '../datasets/support/commercial-support';
import { TrainingResources } from '../datasets/support/training';
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
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {TrainingResources.map((resource) => (
              <OpenFeatureComponentCard
                title={resource.title}
                href={resource.href}
                description={resource.description}
                iconDefinition={resource.iconDefinition}
              />
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3>Commercial Support</h3>
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {CommercialSupportList.map(({ href, name, svg: Svg }) => (
              <Link
                to={href}
                title={name}
                className="card card-container padding--lg dark:bg-white w-[362px] h-44 relative"
              >
                <div style={{ height: 0, position: 'absolute', right: 10, top: 10 }}>{'🔗'}</div>
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
            Anyone who has developed an OpenFeature training program or offers related services can add themselves to
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
  