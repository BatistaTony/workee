import { IJob } from '@/types/index';

const initialState: IJob = {
  company_name: '',
  location: '',
  jot_title: '',
  description: '',
  overview: '',
  required_skills: [],
  advantageSkills: [],
  job_type: [],
  salary_range: {
    to: 0,
    from: 0,
  },
  markets: '',
};

interface IAction {
  type: string;
  payload: IJob;
}

const job = (state: IJob = initialState, action: IAction) => {
  switch (action.type) {
    case 'set_job': {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export default job;
