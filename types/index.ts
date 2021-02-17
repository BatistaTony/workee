export interface IListFilter {
  title: string;
  items: Array<string> | Array<ISalary>;
}

export interface ISalary {
  to: number;
  from: number;
}

export interface IJob {
  company_name: string;
  location: string;
  jot_title: string;
  overview: string;
  description: string;
  required_skills: string[];
  advantageSkills: string[];
  job_type: string[];
  salary_range: ISalary;
  markets: string;
}
