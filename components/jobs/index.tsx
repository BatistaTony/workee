import { useEffect, useState } from 'react';
import JobTimeSelect from './select-job-time';
import { ListJobs, ListHeader, ListStyled } from './style';
import jobs from '@/utils/jobs.json';
import CardJob from './cardJob';
import { IFilterState, IJob } from '@/types/index';
import { useSelector } from 'react-redux';

interface IRootState {
  filter: IFilterState;
  job: IJob;
}

const Jobs = () => {
  const filter = useSelector((state: IRootState) => state.filter);

  const compName = RegExp(`${filter.company_name}`, 'gi');
  const lction = RegExp(`${filter.location}`, 'gi');

  const isAllFilled = () => {
    return filter.company_name && filter.location && filter.skills.length > 0;
  };

  const filteredJobs = jobs.filter((job, index) => {
    if (isAllFilled()) {
      if (
        (job.location.match(lction) && job.job_title.match(compName)) ||
        job.company_name.match(compName)
      ) {
        const skillJob = job.required_skills;
        const filterSkill = filter.skills;
        return contains(skillJob, filterSkill);
      }
    } else if (
      filter.company_name &&
      filter.location &&
      job.location.match(lction) &&
      job.job_title.match(compName)
    ) {
      return job;
    } else if (filter.company_name && job.company_name.match(compName)) {
      return job;
    } else if (filter.company_name && job.job_title.match(compName)) {
      return job;
    } else if (filter.location && job.location.match(lction)) {
      return job;
    } else if (filter.skills.length) {
      const skillJob = job.required_skills;
      const filterSkill = filter.skills;
      return contains(skillJob, filterSkill);
    }
  });

  function contains(a, b) {
    let counter = 0;
    for (var i = 0; i < b.length; i++) {
      if (a.includes(b[i])) counter++;
    }
    if (counter === b.length) return true;
    return false;
  }

  const checkIfIsFiltering = () => {
    return filter.company_name.length > 0 || filter.location.length > 0 || filter.skills.length > 0;
  };

  useEffect(() => {
    const h = filteredJobs.filter(job => {
      const jbtypes = filter.job_type;

      console.log(jbtypes.includes(job.job_type));
    });

    console.log(h);
  }, [filter.job_type]);

  return (
    <ListJobs>
      <ListHeader>
        <h1 className="title">
          Showing {!checkIfIsFiltering() ? jobs.length : filteredJobs.length} jobs
        </h1>
        <JobTimeSelect />
      </ListHeader>

      {filteredJobs.length > 0 && (
        <ListStyled>
          {filteredJobs.map((job: IJob, index) => (
            <CardJob key={index} job={job} />
          ))}
        </ListStyled>
      )}

      {!checkIfIsFiltering() && (
        <ListStyled>
          {jobs.map((job: IJob, index) => (
            <CardJob key={index} job={job} />
          ))}
        </ListStyled>
      )}
    </ListJobs>
  );
};

export default Jobs;
