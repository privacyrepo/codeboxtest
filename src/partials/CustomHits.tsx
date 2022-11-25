/** @jsxImportSource react */
import type { UseHitsProps } from 'react-instantsearch-hooks-web';
import { Highlight, useHits } from 'react-instantsearch-hooks-web';

export default function CustomHits(props: UseHitsProps) {
  const { hits, results } = useHits(props);
  const validQuery = results && results.query?.length >= 2;

  return (
    <section className="grid gap-4">
      {hits.length === 0 && validQuery && (
        <div className="toast toast-center">
          <div className="alert alert-error shadow-lg">
            <div>
              <span>
                <b>Deine Suche ergab leider keinen Treffer.</b>
                <br />
                Nicht aufgeben – überprüfe die Rechtschreibung oder versuche es
                mit einem anderen Suchbegriff.
              </span>
            </div>
          </div>
        </div>
      )}
      {hits.length > 0 && validQuery && (
        <>
          {hits.map((hit) => (
            <a key={hit.objectID} href={`${hit.url as string}/`}>
              <article className="card card-side bg-base-100 shadow-xl">
                <figure className="bg-neutral w-2/5 flex-none">
                  {(hit.image as string) ? (
                    <img width="150" height="150" src={hit.image as string} />
                  ) : (
                    <img
                      width="150"
                      height="150"
                      src="assets/placeholder.png"
                      alt="Platzhalter Bild"
                    />
                  )}
                </figure>
                <div className="card-body gap-1 p-2">
                  <h2 className="card-title inline-block leading-6 [hyphens:auto] [-webkit-hyphens:auto]">
                    <Highlight
                      attribute="title"
                      hit={hit}
                      classNames={{
                        highlighted: '!text-[#355200] !bg-secondary',
                      }}
                    />
                  </h2>
                  <p className="text-xs [hyphens:auto] [-webkit-hyphens:auto]">
                    <Highlight
                      attribute="ingredients"
                      hit={hit}
                      classNames={{
                        highlighted: '!text-[#355200] !bg-secondary',
                      }}
                    />
                  </p>
                </div>
              </article>
            </a>
          ))}
        </>
      )}
    </section>
  );
}
