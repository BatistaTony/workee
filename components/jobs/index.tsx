import { useEffect, useState } from 'react';
import JobTimeSelect from './select-job-time';
import { ListJobs, ListHeader, ListStyled } from './style';
import jobs from '@/utils/jobs.json';
import CardJob from './cardJob';
import { IJob } from '@/types/index';

const Jobs = () => {
  return (
    <ListJobs>
      <ListHeader>
        <h1 className="title">Showing {jobs.length} jobs</h1>
        <JobTimeSelect />
      </ListHeader>

      <ListStyled>
        {jobs.map((job: IJob, index) => (
          <CardJob key={index} job={job} />
        ))}
      </ListStyled>
    </ListJobs>
  );
};

export default Jobs;
