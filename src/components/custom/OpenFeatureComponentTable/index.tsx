import clsx from 'clsx';
import React from 'react';
import { OpenFeatureComponentCard, OpenFeatureComponentCardData } from '../OpenFeatureComponentCard/';

export class OpenFeatureComponentTable extends React.Component<{
  items: OpenFeatureComponentCardData[];
}> {
  override render() {
    return (
      <section className={clsx('row')}>
        {this.props.items
          .sort((a, b) => a.title.localeCompare(b.title))
          // webkit and chrome both do sort a bit differently in terms of counting all the elements, need ot check both a and b...lol
          .sort((a, b) => a.showLast ? 1 : b.showLast ? -1 : 0) 
          .map((item) => {
            return (
              <article key={item.title} className="col col--5 margin-bottom--lg">
                <OpenFeatureComponentCard {...item} />
              </article>
            );
          })}
      </section>
    );
  }
}
