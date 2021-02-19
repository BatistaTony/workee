export interface IListFilter {
  title: string;
  items: Array<string> | Array<ISalary> | any;
}

export interface ISalary {
  to: number;
  from: number;
}

export interface IJob {
  id: string;
  company_name: string;
  location: string;
  job_title: string;
  overview: string;
  description: string;
  required_skills: string[];
  advantageSkills: string[];
  job_type: string;
  salary_range: ISalary;
  markets: string;
  date: Date | string;
  isRemote: boolean;
  job_seniority: string;
  experience_years: number;
  email: string;
  website: string;
  social_networks?: {
    linkDin: string;
    facebook: string;
    twitter: string;
  };
}

export interface IFilterState {
  company_name: string;
  location: string;
  skills: string[];
  job_type: string[];
  job_seniority: string[];
  salary_range: string[];
  time: number;
}
