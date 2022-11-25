import { RichTextRenderer } from '@webiny/react-rich-text-renderer';
import { Section } from 'astro-boilerplate-components';

const JobSection = ({ job }: any) => (
  <Section>
    <div className="job_details_area">
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap ">
          <div className="px-4 lg:w-2/3">
            <div className="job_details_header">
              <div className="single_jobs white-bg flex justify-between">
                <div className="jobs_left flex items-center">
                  <div className="thumb">
                    {/* <img src="img/svg_icon/1.svg" alt="" /> */}
                  </div>
                  <div className="jobs_conetent">
                    <a href="#">
                      <h2>{job.title}</h2>
                    </a>
                    <div className="links_locat flex items-center">
                      <div className="location">
                        <p>
                          {' '}
                          <i className="fa fa-map-marker"></i>
                        </p>
                      </div>
                      <div className="location">
                        <p>
                          {' '}
                          <i className="fa fa-clock-o"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="jobs_right">
                  <div className="apply_now">
                    <a className="heart_mark" href="#">
                      {' '}
                      <i className="ti-heart"></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="descript_wrap white-bg">
              <RichTextRenderer data={job.description} />
            </div>
            <div className="apply_job_form white-bg">
              <h4>Apply for the job</h4>
            </div>
          </div>
          <div className="px-4 lg:w-1/3">
            <div className="job_sumary">
              <div className="summery_header">
                <h3>Job Summery</h3>
              </div>
              <div className="job_content">
                <ul>
                  <li>
                    Published on: <span>{job.createdOn}</span>
                  </li>
                  <li>
                    Vacancy: <span>2 Position</span>
                  </li>
                  <li>
                    Salary:{' '}
                    <span>
                      {job.compensation[0]} - {job.compensation[1]}
                    </span>
                  </li>
                  <li>
                    Location: <span>{job.location}</span>
                  </li>
                  <li>
                    Job Nature: <span> {job.type}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="share_wrap flex">
              <span>Share at:</span>
              <ul>
                <li>
                  <a href="#">
                    {' '}
                    <i className="fa fa-facebook"></i>
                  </a>{' '}
                </li>
                <li>
                  <a href="#">
                    {' '}
                    <i className="fa fa-google-plus"></i>
                  </a>{' '}
                </li>
                <li>
                  <a href="#">
                    {' '}
                    <i className="fa fa-twitter"></i>
                  </a>{' '}
                </li>
                <li>
                  <a href="#">
                    {' '}
                    <i className="fa fa-envelope"></i>
                  </a>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { JobSection };
