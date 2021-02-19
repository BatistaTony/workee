import { useState } from 'react';
import { ListJobs, ListHeader, ListStyled } from './style';
import jobs from '@/utils/jobs.json';
import CardJob from './cardJob';
import { IFilterState, IJob } from '@/types/index';
import { useSelector } from 'react-redux';
import * as R from 'ramda';
import Pagination from 'react-js-pagination';

interface IRootState {
  filter: IFilterState;
  job: IJob;
}

const Jobs = () => {
  const filter = useSelector((state: IRootState) => state.filter);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const compName = RegExp(`${filter.company_name}`, 'gi');
  const lction = RegExp(`${filter.location}`, 'gi');

  const isAllFilled = () => {
    return filter.company_name && filter.location && filter.skills.length > 0;
  };

  const filterWithAllFields = job => {
    if (
      (job.location.match(lction) && job.job_title.match(compName)) ||
      job.company_name.match(compName)
    ) {
      const skillJob = job.required_skills;
      const filterSkill = filter.skills;

      return contains(skillJob, filterSkill) && job;
    }
  };

  const [jobsState, setJobsState] = useState(jobs);

  const filteredJobs = jobsState.filter((job, index) => {
    if (filter.job_type.length > 0) {
      if (isAllFilled() && filter.job_type.includes(job.job_type)) {
        filterWithAllFields(job);
      } else if (
        filter.company_name &&
        filter.location &&
        job.location.match(lction) &&
        job.job_title.match(compName) &&
        filter.job_type.includes(job.job_type)
      ) {
        return job;
      } else if (
        filter.company_name &&
        job.company_name.match(compName) &&
        filter.job_type.includes(job.job_type)
      ) {
        return job;
      } else if (
        filter.company_name &&
        job.job_title.match(compName) &&
        filter.job_type.includes(job.job_type)
      ) {
        return job;
      } else if (
        filter.location &&
        job.location.match(lction) &&
        filter.job_type.includes(job.job_type)
      ) {
        return job;
      } else if (filter.skills.length) {
        const skillJob = job.required_skills;
        const filterSkill = filter.skills;
        return contains(skillJob, filterSkill);
      }
    } else if (filter.job_seniority.length > 0) {
      if (isAllFilled() && filter.job_seniority.includes(job.job_seniority)) {
        filterWithAllFields(job);
      } else if (
        filter.company_name &&
        filter.location &&
        job.location.match(lction) &&
        job.job_title.match(compName) &&
        filter.job_seniority.includes(job.job_seniority)
      ) {
        return job;
      } else if (
        filter.company_name &&
        job.company_name.match(compName) &&
        filter.job_seniority.includes(job.job_seniority)
      ) {
        return job;
      } else if (
        filter.company_name &&
        job.job_title.match(compName) &&
        filter.job_seniority.includes(job.job_seniority)
      ) {
        return job;
      } else if (
        filter.location &&
        job.location.match(lction) &&
        filter.job_seniority.includes(job.job_seniority)
      ) {
        return job;
      } else if (filter.skills.length) {
        const skillJob = job.required_skills;
        const filterSkill = filter.skills;
        return contains(skillJob, filterSkill);
      }
    } else if (filter.salary_range.length > 0) {
      if (isAllFilled() && R.includes(job.salary_range, filter.salary_range)) {
        filterWithAllFields(job);
      } else if (
        filter.company_name &&
        filter.location &&
        job.location.match(lction) &&
        job.job_title.match(compName) &&
        R.includes(job.salary_range, filter.salary_range)
      ) {
        return job;
      } else if (
        filter.company_name &&
        job.company_name.match(compName) &&
        R.includes(filter.salary_range, job.salary_range)
      ) {
        return job;
      } else if (
        filter.company_name &&
        job.job_title.match(compName) &&
        R.includes(job.salary_range, filter.salary_range)
      ) {
        return job;
      } else if (
        filter.location &&
        job.location.match(lction) &&
        R.includes(job.salary_range, filter.salary_range)
      ) {
        return job;
      } else if (filter.skills.length) {
        const skillJob = job.required_skills;
        const filterSkill = filter.skills;
        return contains(skillJob, filterSkill);
      }
    } else if (isAllFilled()) {
      filterWithAllFields(job);
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

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const handlePaginationClick = number => {
    setCurrentPage(number);
  };

  return (
    <ListJobs>
      <ListHeader>
        <h1 className="title">
          Showing {!checkIfIsFiltering() ? jobs.length : filteredJobs.length} jobs
        </h1>
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
          {jobs.slice(indexOfFirstJob, indexOfLastJob).map((job: IJob, index) => (
            <CardJob key={index} job={job} />
          ))}
        </ListStyled>
      )}

      {!checkIfIsFiltering() && (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={6}
          totalItemsCount={jobs.length}
          pageRangeDisplayed={6}
          onChange={handlePaginationClick}
        />
      )}
    </ListJobs>
  );
};

export default Jobs;
