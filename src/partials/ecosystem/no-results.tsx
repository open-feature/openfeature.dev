import React from 'react';
import { useInstantSearch } from 'react-instantsearch';
import NoResultSvg from '@site/static/img/no-results.svg';

export default function NoResults() {
  const { results } = useInstantSearch();

  const hasRefinements = results.getRefinements().length > 0;
  const description = hasRefinements ? 'Try to reset your applied filters.' : 'Please try another query.';

  return (
    <div className="flex items-center flex-col">
      <NoResultSvg />

      <p className="text-2xl text-center">Sorry, we can&apos;t find any matches to your query!</p>
      <p className="text-sm font-semibold text-center">{description}</p>
    </div>
  );
}
