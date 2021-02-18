import { IJob } from '@/types/index';
// import { Skeleton } from 'antd';
import { CardStyled, ButtonApply } from './style';
import Link from 'next/link';
import LastPostedDate from '@/elements/lastPosted';

const CardJob = ({ job }: { job: IJob }) => {
  const items = [...job.required_skills, job.job_type];

  return (
    <CardStyled>
      <div className="header_">
        <img src="./bg.jpg" alt="W" className="avatar" />
        <div className="info">
          <h1 className="job_title">{job.job_title}</h1>
          <p className="companyName_address">
            {job.company_name} | {job.location}{' '}
          </p>
        </div>
      </div>

      <ul className="items">
        {job.isRemote && <li className="item">Remote</li>}
        {items.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <div className="footerCard">
        <Link href={`/job?id=${job.id}`}>
          <ButtonApply>Apply now</ButtonApply>
        </Link>
        <p className="timePost">
          <LastPostedDate date={job.date} />
        </p>
      </div>
    </CardStyled>
  );
};

export default CardJob;
