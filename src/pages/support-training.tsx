import React from 'react';
import { OpenFeatureComponentCard } from '../components/custom/OpenFeatureComponentCard';
import { faEbay, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Layout from '@theme/Layout';

export default function Support(): JSX.Element {
    return (
        <Layout title="Support" description="Support & Training">
        <section>
            <div>
                <h2>Support & Training</h2>
            </div>
            <div>
                <h3>Courses</h3>
                <div className="flex">
                    <OpenFeatureComponentCard title='OpenFeature Basics and Core concepts' description='This youtube playlist covers the fundamental of openFeature' href='https://www.youtube.com/watch?v=heQ83k15ZE4&list=PLiQt8D1ofl8zs2zoiMNI8WRdNQ8GUy84I' iconDefinition={faYoutube} />
                </div>
            </div>
            <div>
                <h3>Commercial Support</h3>
                <div className="flex">
                    <OpenFeatureComponentCard title='Ebay' description='Ebay is a proud adopter of the OpenFeature project' href='https://engineering.dynatrace.com/open-source/standards/openfeature/' iconDefinition={faEbay} />
                </div>
            </div>
        </section>
        </Layout>
    )
  }
  