const PostJob = () => (
  <section className=" p-6 md:px-16">
    <div className="mx-auto w-full max-w-xl">
      <form action="" method="post">
        <h1 className="mb-2 text-2xl">Post new job</h1>

        <div className=" mb-5 border-b-2 py-2">
          {/* Title */}
          <div className="mb-4">
            <label className="mb-2 block text-sm text-gray-700">Title</label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
              type="email"
              id="job-title"
              name="job-title"
              placeholder="Frontend Developer"
            />
          </div>

          {/* <!--     Link to apply     --> */}
          <div className="mb-4">
            <label className="mb-2 block text-sm text-gray-700">
              Link to apply
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
              type="email"
              id="apply-link"
              name="apply-link"
              placeholder="https://www.djangoproject.com/apply"
            />
          </div>

          <div className="md:flex md:justify-between">
            {/* <!--      Job Type      --> */}
            <div className="mb-4 w-full md:mb-0 md:w-3/12">
              <label className="mb-2 block text-sm text-gray-700">
                Job Type
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
                  id="job-type"
                  name="job-type"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Freelance</option>
                  <option>Contract</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* <!--     Location       --> */}
            <div className="mb-4 w-full md:mb-0 md:w-8/12">
              <label className="mb-2 block text-sm text-gray-700">
                Location
              </label>
              <input
                type="text"
                className="mb-3 block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
                id="location"
                name="location"
                placeholder="Schwerin"
              />

              <div>
                <label className="flex items-center text-gray-600">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="remote"
                  />
                  <span className="text-sm">Work can be done remotely</span>
                </label>
              </div>
            </div>
          </div>
          {/* <!-- end group --> */}

          {/* <!--    Description      --> */}
          <div>
            <label className="mb-2 block text-sm text-gray-700">
              Description
            </label>
            <textarea name="description" id="description"></textarea>
          </div>

          <div className="-mx-3 flex flex-wrap">
            {/* <!--     Company       --> */}
            <div className="mb-4 w-full px-3 md:mb-0 md:w-1/2">
              <label className="mb-2 block text-sm text-gray-700">
                Company
              </label>
              <input
                type="text"
                className="mb-3 block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
                id="company"
                name="company"
                placeholder="Company"
              />
            </div>

            {/* <!--      Company Website      --> */}
            <div className="mb-4 w-full px-3 md:mb-0 md:w-1/2">
              <label className="mb-2 block text-sm text-gray-700">
                Company Website
              </label>
              <input
                type="text"
                className="mb-3 block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
                id="company"
                name="company"
                placeholder="https://www.web3job.work/"
              />
            </div>
          </div>
          {/* <!-- end group --> */}

          {/* <!--      Company Website      --> */}
          <div className="mb-4 md:mb-0">
            <label className="mb-2 block text-sm text-gray-700">
              Logo Image
            </label>
            <input
              type="file"
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 p-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="company-logo"
              name="company-logo"
            />
          </div>
        </div>
        {/* <!-- end job-info --> */}

        <div className="  mb-6">
          <h4 className="mb-2">Payment</h4>
          <p className="bg-gray-200 py-3 text-center text-sm">
            <span>
              <i className=""></i>
            </span>
            All jobs cost <strong>€300</strong> for 30 days.
          </p>
        </div>

        {/* <!--     Submit     --> */}
        <div>
          <button
            className="rounded bg-teal-500 py-2 px-3 text-white hover:bg-teal-600"
            type="submit"
          >
            Create job
          </button>
        </div>
      </form>
    </div>
  </section>
);

export { PostJob };
