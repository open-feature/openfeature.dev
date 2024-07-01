import React from 'react';
import { OpenFeatureComponentCard } from '../components/custom/OpenFeatureComponentCard';
import Layout from '@theme/Layout';
import { Adopters } from '../datasets/adopters';
import { LearningResources } from '../datasets/learning-resources';
import Link from '@docusaurus/Link';

export default function Support(): JSX.Element {
    return (
        <Layout title="Support" description="Support & Training">
        <section className='m-16'>
            <div className='text-center'>
                <h1>Support & Training</h1>
            </div>
            <div className='mb-16'>
                <h3>Courses</h3>
                <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                {LearningResources.map(resource => (
                        <OpenFeatureComponentCard title={resource.title} href={resource.href} description={resource.description} iconDefinition={resource.iconDefinition} />
                    ))}
                </div>
            </div>
            <div className='mb-16'>
                <h3>Commercial Support</h3>
                <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                    {Adopters.map(adopter => (
                        <OpenFeatureComponentCard title={adopter.name} href={adopter.href} svgImage={adopter.svg} />
                    ))}
                    
                </div>
            </div>
            <div className='mb-16'>
                <h3>Add a resource</h3>
                <p>Anyone who has developed an OpenFeature training program or offers related services can add themselves to this page by opening a pull request against it.</p>
                <div className="flex justify-center mt-16">
                <Link
                  className="btn text-white hover:text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  to="https://github.com/open-feature/openfeature.dev"
                >
                  ADD YOUR COMPANY
                </Link>
                </div>
            </div>
        </section>
        </Layout>
    );
  }
  