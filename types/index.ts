export interface IListFilter {
  title: string;
  items: Array<string> | Array<ISalary>;
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
  job_type: string[];
  salary_range: ISalary;
  markets: string;
  date: Date | string;
  level: string;
}
