import algoliasearch from 'algoliasearch/lite';
import { Section } from 'astro-boilerplate-components';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
  import.meta.env.ALGOLIA_APP_ID,
  import.meta.env.ALGOLIA_SEARCH_KEY
);
// const Hit = ({ hit }: any) => {
//   return (
//     <article>
//       <img src={hit.image} alt={hit.name} />
//       <p>{hit.title}</p>
//       <h1>{hit.slug}</h1>
//       <p>${hit.type}</p>
//     </article>
//   );
// };
const Search = () => (
  <Section>
    <InstantSearch searchClient={searchClient} indexName="web3job">
      <SearchBox />
      <Hits />
    </InstantSearch>
    <h1>hello1111111111111111111111111111111111111</h1>
  </Section>
);

export { Search };
