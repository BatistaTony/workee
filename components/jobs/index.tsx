import { useEffect, useState } from 'react';
import { ListJobs, ListHeader, ListStyled } from './style';
import jobs from '@/utils/jobs.json';
import CardJob from './cardJob';
import { IFilterState, IJob } from '@/types/index';
import { useSelector } from 'react-redux';
import Pagination from 'react-js-pagination';
import { filterJobs } from './utils';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSimpeFilter, clearStore } from './../../store/actions/filter';

interface IRootState {
  filter: IFilterState;
  job: IJob;
}

const Jobs = () => {
  const filter = useSelector((state: IRootState) => state.filter);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  const dispatch = useDispatch();

  const compName = RegExp(`${filter.company_name}`, 'gi');
  const lction = RegExp(`${filter.location}`, 'gi');

  const filteredJobs = jobs.filter((job, index) => {
    return filterJobs(filter, job, compName, lction);
  });

  const checkIfIsFiltering = () => {
    return filter.company_name.length > 0 || filter.location.length > 0 || filter.skills.length > 0;
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const router = useRouter();

  const handlePaginationClick = number => {
    setCurrentPage(number);
  };

  useEffect(() => {
    dispatch(clearStore());
  }, [router.pathname]);

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
