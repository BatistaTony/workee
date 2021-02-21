import * as R from 'ramda';

function contains(a, b) {
  let counter = 0;
  for (var i = 0; i < b.length; i++) {
    if (a.includes(b[i])) counter++;
  }
  if (counter === b.length) return true;
  return false;
}

const isAllFilled = filter => {
  return filter.company_name && filter.location && filter.skills.length > 0;
};

const filterWithAllFields = (job, lction, compName, filter) => {
  if (
    (job.location.match(lction) && job.job_title.match(compName)) ||
    job.company_name.match(compName)
  ) {
    const skillJob = job.required_skills;
    const filterSkill = filter.skills;

    return contains(skillJob, filterSkill) && job;
  }
};

export const filterJobs = (filter, job, compName, lction) => {
  if (filter.job_type.length > 0) {
    if (isAllFilled(filter) && filter.job_type.includes(job.job_type)) {
      filterWithAllFields(job, lction, compName, filter);
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
    if (isAllFilled(filter) && filter.job_seniority.includes(job.job_seniority)) {
      filterWithAllFields(job, lction, compName, filter);
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
    if (isAllFilled(filter) && R.includes(job.salary_range, filter.salary_range)) {
      filterWithAllFields(job, lction, compName, filter);
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
  } else if (filter.market.length > 0) {
    if (isAllFilled(filter) && R.includes(job.markets, filter.market)) {
      filterWithAllFields(job, lction, compName, filter);
    } else if (
      filter.company_name &&
      filter.location &&
      job.location.match(lction) &&
      job.job_title.match(compName) &&
      R.includes(job.markets, filter.market)
    ) {
      return job;
    } else if (
      filter.company_name &&
      job.company_name.match(compName) &&
      R.includes(filter.market, job.markets)
    ) {
      return job;
    } else if (
      filter.company_name &&
      job.job_title.match(compName) &&
      R.includes(job.markets, filter.market)
    ) {
      return job;
    } else if (
      filter.location &&
      job.location.match(lction) &&
      R.includes(job.markets, filter.market)
    ) {
      return job;
    } else if (filter.skills.length) {
      const skillJob = job.required_skills;
      const filterSkill = filter.skills;
      return contains(skillJob, filterSkill);
    }
  } else if (isAllFilled(filter)) {
    filterWithAllFields(job, lction, compName, filter);
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
};
