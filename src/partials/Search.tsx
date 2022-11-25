/** @jsxImportSource react */

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

import CustomHits from './CustomHits';

const Search = () => {
  const searchClient = algoliasearch(
    import.meta.env.ALGOLIA_APP_ID,
    import.meta.env.ALGOLIA_SEARCH_KEY
  );

  return (
    <InstantSearch indexName={'web3job'} searchClient={searchClient}>
      <SearchBox
        autoFocus
        placeholder="Worauf hast du Appetit ..."
        classNames={{
          form: '!h-12 !bg-transparent before:!hidden max-w-md mx-auto',
          input:
            '!rounded-xl !bg-base-100 focus:!border-current !border-neutral-focus !shadow-lg !text-current !caret-current placeholder:!text-neutral-focus !pl-4',
          resetIcon: '!fill-current',
        }}
      />
      <CustomHits />
    </InstantSearch>
  );
};

export { Search };
