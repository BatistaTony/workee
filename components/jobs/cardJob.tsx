import { IJob } from '@/types/index';
// import { Skeleton } from 'antd';
import { CardStyled, ButtonApply } from './style';
import Link from 'next/link';
import LastPostedDate from '@/elements/lastPosted';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CardJob = ({ job }: { job: IJob }) => {
  const items = [...job.required_skills, job.job_type];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const animationStyle = { opacity: 1, y: 0 };

  return (
    <CardStyled
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={inView ? animationStyle : {}}
      exit={{ opacity: 0, y: -100 }}
    >
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
