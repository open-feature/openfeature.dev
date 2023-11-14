import React from 'react';
import { usePagination, Pagination as InstantSearchPagination } from 'react-instantsearch';

import { SEARCH_ITEMS_PER_PAGE } from '../../datasets/constants';

export default function Pagination() {
  const { nbPages, refine, currentRefinement, nbHits } = usePagination({
    // The number of pages to display on each side of the current page.
    padding: 3,
  });

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentRefinement === 0 ? 'invisible' : ''
          }`}
          onClick={(event) => {
            event.preventDefault();
            refine(currentRefinement - 1);
          }}
        >
          Previous
        </a>
        <a
          href="#"
          className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentRefinement + 1 === nbPages ? 'invisible' : ''
          }`}
          onClick={(event) => {
            event.preventDefault();
            refine(currentRefinement + 1);
          }}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {/* 30 is set in the instance search config */}
          <p className="text-sm text-emphasis-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">{nbHits < SEARCH_ITEMS_PER_PAGE ? nbHits : SEARCH_ITEMS_PER_PAGE}</span> of{' '}
            <span className="font-medium">{nbHits}</span> results
          </p>
        </div>
        <div>
          <InstantSearchPagination
            padding={2}
            showFirst={false}
            showLast={false}
            classNames={{
              item: 'relative inline-flex items-center p-0 text-sm font-semibold ring-1 ring-inset ring-emphasis-300 hover:emphasis-100',
              selectedItem: 'bg-selected text-sm font-semibold',
              link: 'block px-4 py-2 text-content hover:bg-selected hover:no-underline',
              disabledItem: 'text-emphasis-300 cursor-not-allowed',
              previousPageItem: 'rounded-l-md font-bold p-0',
              nextPageItem: 'rounded-r-md font-bold p-0',
            }}
            translations={{
              previousPageItemText: '<',
              nextPageItemText: '>',
            }}
          />
        </div>
      </div>
    </div>
  );
}
