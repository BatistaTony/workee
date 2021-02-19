import { useState } from 'react';
import { ListJobs, ListHeader, ListStyled } from './style';
import jobs from '@/utils/jobs.json';
import CardJob from './cardJob';
import { IFilterState, IJob } from '@/types/index';
import { useSelector } from 'react-redux';
import * as R from 'ramda';
import Pagination from 'react-js-pagination';
import { filterJobs } from './utils';

interface IRootState {
  filter: IFilterState;
  job: IJob;
}

const Jobs = () => {
  const filter = useSelector((state: IRootState) => state.filter);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  const compName = RegExp(`${filter.company_name}`, 'gi');
  const lction = RegExp(`${filter.location}`, 'gi');

  const [jobsState, setJobsState] = useState(jobs);

  const filteredJobs = jobsState.filter((job, index) => {
    return filterJobs(filter, job, compName, lction);
  });

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
          itemsCountPerPage={jobsPerPage}
          totalItemsCount={jobs.length}
          pageRangeDisplayed={jobsPerPage}
          onChange={handlePaginationClick}
        />
      )}
    </ListJobs>
  );
};

export default Jobs;
