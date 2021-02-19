import { IListFilter, ISalary } from '@/types/index';
import { CustomListFilter, ListItemsFilter } from './style';
import { useDispatch } from 'react-redux';
import { setFieldSeniority, setFieldJobType, setFieldSalary } from './../../store/actions/filter';
import { printSalaryRange } from '@/utils/index';
import jobs from '@/utils/jobs.json';
import { useEffect } from 'react';

const ListFilter = ({ title, items }: IListFilter) => {
  const dispatch = useDispatch();

  const handleFilter = value => {
    if (title === 'Job type') {
      dispatch(setFieldJobType(value));
    }

    if (title === 'Seniority') {
      dispatch(setFieldSeniority(value));
    }

    if (title === 'Salary Range') {
      dispatch(setFieldSalary(value));
    }
  };

  const getNumberOfJobsByValue = value => {
    if (title === 'Job type') {
      const result = jobs.filter(job => job.job_type === value);
      return result.length;
    } else if (title === 'Seniority') {
      const result = jobs.filter(job => job.job_seniority === value);
      return result.length;
    } else if (title === 'Salary Range') {
      const result = jobs.filter(job => JSON.stringify(job.salary_range) === JSON.stringify(value));
      return result.length;
    }
  };

  useEffect(() => {}, []);

  return (
    <CustomListFilter>
      <h1 className="title">{title} </h1>
      <ListItemsFilter className="menu">
        {items.map((item, index) => (
          <li className="item" key={index}>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id={title === 'Salary Range' ? item.from + 'j' : item}
                className="checkbox-input"
                name={title === 'Salary Range' ? 'salary' : ''}
                onClick={() => handleFilter(item)}
              />{' '}
              <label className="label_" htmlFor={title === 'Salary Range' ? item.from + 'j' : item}>
                {title === 'Salary Range' ? printSalaryRange(item) : item}
              </label>
            </div>
            <span className="jobNumbers">{getNumberOfJobsByValue(item)}</span>
          </li>
        ))}
      </ListItemsFilter>
    </CustomListFilter>
  );
};

export default ListFilter;
