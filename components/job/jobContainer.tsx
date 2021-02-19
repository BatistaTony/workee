import { StyledContainer } from './style';
import { LinkedinFilled, FacebookFilled, TwitterCircleFilled } from '@ant-design/icons';
import { IJob } from '@/types/index';
import { printSalaryRange } from '@/utils/index';
import LastPostedDate from '@/elements/lastPosted';
import { useRouter } from 'next/router';
import jobs from '@/utils/jobs.json';
import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import CardJob from '../jobs/cardJob';

const JobContainer = () => {
  const cels = ['Remote', 'Seniority Level', 'Job Type', 'Market', 'Salary Range'];

  const [job, setJob] = useState<IJob>({
    company_name: '',
    advantageSkills: [],
    date: new Date(),
    description: '',
    email: '',
    id: '',
    job_title: '',
    job_type: '',
    job_seniority: '',
    location: '',
    markets: '',
    overview: '',
    isRemote: false,
    required_skills: [],
    salary_range: {
      to: 0,
      from: 0,
    },
    website: '',
    experience_years: 5,
    social_networks: {
      facebook: '',
      linkDin: '',
      twitter: '',
    },
  });

  const {
    company_name,
    advantageSkills,
    date,
    description,
    email,
    job_title,
    job_type,
    job_seniority,
    id,
    location,
    markets,
    overview,
    required_skills,
    salary_range,
    website,
    experience_years,
    social_networks,
    isRemote,
  } = job;

  const data = [
    isRemote ? 'yes' : 'Not',
    job_seniority,
    job_type,
    markets,
    printSalaryRange(salary_range),
  ];

  const router = useRouter();

  useEffect(() => {
    const jobFounded = jobs.filter((job: IJob) => job.id === router.query.id);
    setJob(jobFounded[0]);
  }, [router.query.id]);

  const similarJobs = jobs.filter(job => {
    const regex = RegExp(`${job_title}`, 'gi');

    if (job.job_title.match(regex) && job.id !== id) {
      return job;
    }
  });

  return (
    <StyledContainer>
      <div className="containerSec">
        <div className="cover"></div>
        {company_name.length > 0 && (
          <div className="infor">
            <div className="divWrapper">
              <h1 className="job_title">{job_title}</h1>
              <p className="name">
                {company_name} | <span className="address_">{location}</span>
              </p>
            </div>

            <div className="divWrapper">
              <p className="time_post">
                <LastPostedDate date={date} />
              </p>
            </div>
          </div>
        )}

        <Skeleton loading={company_name.length <= 0} active />

        <Skeleton loading={company_name.length <= 0} active />

        <Skeleton loading={company_name.length <= 0} active />

        {company_name.length > 0 && (
          <div className="table_rqr">
            {cels.map((item, index) => (
              <div className="cels" key={index}>
                <p>{item}</p>
              </div>
            ))}

            {data.map((item, index) => (
              <div className="data_" key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}

        {company_name.length > 0 && (
          <ul className="mobileTable">
            {cels.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <p>{data[index]}</p>
              </li>
            ))}
          </ul>
        )}

        {overview && (
          <div className="overview">
            <h1 className="title">Overview</h1>

            <p className="text">{overview}</p>
          </div>
        )}

        {description && (
          <div className="overview">
            <h1 className="title">Description</h1>

            <p className="text">{description}</p>
          </div>
        )}

        <div className="job_desc">
          {required_skills.length > 0 && (
            <ul className="list_skills">
              <h1 className="title">Skills Required</h1>
              {experience_years > 0 && (
                <li>
                  {experience_years} {experience_years > 1 ? ' years ' : ' year '} of experiences
                </li>
              )}
              {required_skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {advantageSkills.length > 0 && (
            <ul className="list_skills">
              <h1 className="title">Advantage who has</h1>
              {advantageSkills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="apply_">
          <h1 className="title">Apply here now</h1>
          {website && (
            <a className="text" href={website} target="_blank">
              {website}
            </a>
          )}
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fugiat quidem! Facere
            laudantium ad omnis? Dolore
            {email && (
              <a href={email}>
                <span className="email"> {email} </span>
              </a>
            )}
            excepturi delectus, a neque sunt vitae. Iure perspiciatis omnis commodi doloremque, enim
            asperiores quasi.
          </p>
        </div>

        {company_name.length > 0 && (
          <div className="links">
            <h1 className="title">Social Networks</h1>
            <ul className="networks">
              {social_networks?.linkDin && (
                <li>
                  <a href={social_networks?.linkDin} target="_blank">
                    <LinkedinFilled />
                  </a>
                </li>
              )}
              {social_networks?.twitter && (
                <li>
                  <a href={social_networks?.twitter} target="_blank">
                    <TwitterCircleFilled />
                  </a>
                </li>
              )}

              {social_networks?.facebook && (
                <li>
                  <a href={social_networks?.facebook} target="_blank">
                    <FacebookFilled />
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="similarJob">
        <h1 className="title">Similar Jobs</h1>
        <ul className="list">
          {similarJobs.slice(0, 5).map((job, index) => (
            <CardJob key={index} job={job} />
          ))}
        </ul>
      </div>
    </StyledContainer>
  );
};

export default JobContainer;
