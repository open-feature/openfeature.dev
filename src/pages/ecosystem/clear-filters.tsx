import React from 'react';
import { useClearRefinements } from 'react-instantsearch-hooks-web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export function ClearFilters() {
  const { refine, canRefine } = useClearRefinements();

  return (
    <button
      className={`border-none bg-transparent ${
        !canRefine ? 'cursor-not-allowed text-emphasis-300' : 'cursor-pointer text-emphasis-800 hover:text-emphasis-700'
      }`}
      disabled={!canRefine}
      type="button"
      onClick={refine}
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faRotateRight} />
        Clear filters
      </div>
    </button>
  );
}
