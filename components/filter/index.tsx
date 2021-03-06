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
    { to: 3500, from: 4500 },
    { to: 4500, from: 5500 },
    { to: 6500, from: 7500 },
    { to: 7500, from: 10500 },
  ];
  const markets = [
    'Sells',
    'Cars',
    'Software',
    'Computer',
    'Consultant',
    'Healthcare',
    'Television',
    'Agriculture',
    'Food',
  ];

  return (
    <CustomFilter isMobile={isMobile}>
      <ListFilter title="Job type" items={jobTypes} />
      <ListFilter title="Seniority" items={seniorityLevel} />
      <ListFilter title="Salary Range" items={salaries_range} />
      <ListFilter title="Markets" items={markets} />
    </CustomFilter>
  );
};

export default Filter;
