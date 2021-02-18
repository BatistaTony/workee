import { StyledContainer } from './style';
import { LinkedinFilled, FacebookFilled, TwitterCircleFilled } from '@ant-design/icons';
import { IJob } from '@/types/index';
import { printSalaryRange } from '@/utils/index';

const JobContainer = () => {
  const cels = ['Remote', 'Seniority Level', 'Job Type', 'Market', 'Salary Range'];

  const job: IJob = {
    company_name: 'Google Inc',
    advantageSkills: ['Html', 'basic French', 'Aws', 'Azure', 'Kubernetes'],
    date: new Date(),
    description:
      'The platform also provide information about the most required area on the market to people see what to study to match perfectly on job that they want or if they are on top with their skills, it can be useful too for people that want change their professional area.',
    email: 'google.recruitment@gmail.com',
    id: '6546dfgd6',
    job_title: 'Front End Engineer',
    job_type: 'Contract',
    level: 'Mid Level',
    location: 'Usa, California',
    markets: 'software',
    overview:
      'Workeé is a platform where everyone can have access to new job opportunities in their area and profession, with this platform people can find the jobs to work on every part of the world in wherever they are.',
    isRemote: false,
    required_skills: [
      'Reactjs',
      'TYpescript',
      'Css',
      'Style components',
      'jira',
      'cypress',
      'jest',
      'React Testing library',
    ],
    salary_range: {
      to: 1500,
      from: 5000,
    },
    website: 'http://www.google.console.com',
    experience_years: 5,
    social_networks: {
      facebook: 'http://www.facebook.com',
      linkDin: 'http://www.linkDin.com',
      twitter: 'http://www.twitter.com',
    },
  };

  const {
    company_name,
    advantageSkills,
    date,
    description,
    email,
    id,
    job_title,
    job_type,
    level,
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

  const data = [isRemote ? 'yes' : 'Not', level, job_type, markets, printSalaryRange(salary_range)];

  return (
    <StyledContainer>
      <div className="containerSec">
        <div className="cover"></div>
        <div className="infor">
          <div className="divWrapper">
            <h1 className="job_title">{job_title}</h1>
            <p className="name">
              {company_name} | <span className="address_">{location}</span>
            </p>
          </div>

          <div className="divWrapper">
            <p className="time_post">3d</p>
          </div>
        </div>

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

        <ul className="mobileTable">
          {cels.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <p>{data[index]}</p>
            </li>
          ))}
        </ul>

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
      </div>
    </StyledContainer>
  );
};

export default JobContainer;
