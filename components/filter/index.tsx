import ListFilter from './listFilter';
import { CustomFilter } from './style';

const Filter = () => {
  const jobTypes = [
    'Remote Jobs',
    'Full-time Jobs',
    'Part-time Jobs',
    'Interniship Jobs',
    'Contract',
  ];
  const seniorityLevel = ['Student Level', 'Entry Level', 'Mid Level', 'Senior Level'];


  return (
    <CustomFilter>
      <ListFilter title="Job type" items={jobTypes} />
      <ListFilter title="Seniority Level" items={seniorityLevel} />
      <ListFilter title="Salary Range" items={jobTypes} />
    </CustomFilter>
  );
};

export default Filter;
