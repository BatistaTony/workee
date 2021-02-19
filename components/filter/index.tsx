import ListFilter from './listFilter';
import { CustomFilter } from './style';

interface IFilter {
  isMobile?: boolean;
}

const Filter = ({ isMobile }: IFilter) => {
  const jobTypes = ['Full-time', 'Part-time', 'Interniship', 'Contract'];
  const seniorityLevel = ['Student Level', 'Entry Level', 'Mid Level', 'Senior Level'];
  const salaries_range = [
    { to: 1500, from: 2500 },
    { to: 2500, from: 3500 },
    { to: 3500, from: 5500 },
  ];

  return (
    <CustomFilter isMobile={isMobile}>
      <ListFilter title="Job type" items={jobTypes} />
      <ListFilter title="Seniority" items={seniorityLevel} />
      <ListFilter title="Salary Range" items={salaries_range} />
    </CustomFilter>
  );
};

export default Filter;
