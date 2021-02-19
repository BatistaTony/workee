import { IFilterState, IJob } from '@/types/index';

function contains(a, b) {
  let counter = 0;
  for (var i = 0; i < b.length; i++) {
    if (a.includes(b[i])) counter++;
  }
  if (counter === b.length) return true;
  return false;
}

export const isAllFilled = (filter: IFilterState) => {
  return filter.company_name && filter.location && filter.skills.length > 0;
};

export const filterWithAllFields = (job: IJob, filter: IFilterState) => {
  const compName = RegExp(`${filter.company_name}`, 'gi');
  const lction = RegExp(`${filter.location}`, 'gi');

  if (
    (job.location.match(lction) && job.job_title.match(compName)) ||
    job.company_name.match(compName)
  ) {
    const skillJob = job.required_skills;
    const filterSkill = filter.skills;

    return contains(skillJob, filterSkill) && job;
  }
};

export const filterWithJobType = (job, filter) => {
  const compName = RegExp(`${filter.company_name}`, 'gi');
  const lction = RegExp(`${filter.location}`, 'gi');

  if (isAllFilled(filter) && filter.job_type.includes(job.job_type)) {
    filterWithAllFields(job, filter);
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
};
