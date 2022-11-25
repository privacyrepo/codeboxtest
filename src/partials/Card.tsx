import type { JobDetails } from './JobList';

const Card = ({ job }: JobDetails) => (
  <div className="bg-gray-100">
    <section className="body-font text-gray-600">
      <div className="container mx-auto">
        <div className="mx-auto mb-2 flex flex-col items-center rounded-lg  border-b border-gray-200 bg-white p-5 sm:flex-row">
          <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center sm:mr-10 sm:h-32 sm:w-32">
            <a href={job.slug}>
              {' '}
              <img src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939" />
            </a>
          </div>
          <div className="mt-6 grow text-center sm:mt-0 sm:text-left">
            <h1 className="title-font mb-2 text-2xl font-bold text-black">
              {job.title}
            </h1>
            <p className="text-base leading-relaxed">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <div className="py-4">
              <div className=" mr-2 inline-block">
                <div className="flex  h-full items-center pr-2">
                  <svg
                    className="mr-1 h-6 w-6 text-yellow-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <button className="title-font font-medium">Python</button>
                </div>
              </div>
              <div className="mr-2 inline-block">
                <div className="flex  h-full items-center pr-2">
                  <svg
                    className="mr-1 h-6 w-6 text-yellow-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <p className="title-font font-medium">C</p>
                </div>
              </div>
              <div className=" mr-2 inline-block">
                <div className="flex  h-full items-center pr-2">
                  <svg
                    className="mr-1 h-6 w-6 text-yellow-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                  <p className="title-font font-medium">Php</p>
                </div>
              </div>
              <div className=" mr-2 inline-block">
                <div className="flex  h-full items-center pr-2">
                  <svg
                    className="mr-1 h-6 w-6 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <p className="title-font font-medium">Swift</p>
                </div>
              </div>

              <div className=" mr-2 inline-block">
                <div className="flex  h-full items-center pr-2">
                  <svg
                    className="mr-1 h-6 w-6 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <p className="title-font font-medium">Java</p>
                </div>
              </div>
              <div className=" mr-2 inline-block">
                <div className="flex  h-full items-center pr-2">
                  <svg
                    className="mr-1 h-6 w-6 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  <p className="title-font font-medium">Javascript</p>
                </div>
              </div>
            </div>
            <div className="font-bold text-gray-800 md:flex">
              <div className="flex w-full space-x-3 md:w-1/2">
                <div className="w-1/2">
                  <h2 className="text-gray-500">Title</h2>
                  <p>description</p>
                </div>
                <div className="w-1/2">
                  <h2 className="text-gray-500">Title</h2>
                  <p>description</p>
                </div>
              </div>
              <div className="flex w-full space-x-3 md:w-1/2">
                <div className="w-1/2">
                  <h2 className="text-gray-500">Title</h2>
                  <p>description</p>
                </div>
                <div className="w-1/2">
                  <h2 className="text-gray-500">Title</h2>
                  <p>description</p>
                </div>
              </div>
            </div>
            <a className="mt-3 inline-flex items-center text-indigo-500">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export { Card };
