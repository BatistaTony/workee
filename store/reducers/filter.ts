import { IFilterState } from '@/types/index';
import {
  SET_SIMPLE_FILTER,
  SET_FIELD_SENIORITY,
  SET_JOB_TYPE,
  SET_FIELD_SALARY,
  SET_FIELD_TIME
} from './../actions/filter';

const initialState: IFilterState = {
  company_name: '',
  location: '',
  skills: [],
  job_type: [],
  job_senerioty: [],
  salary_range: [],
  time: 20,
};

interface IAction {
  type: string;
  payload: any;
}

const filter = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_SIMPLE_FILTER: {
      return { ...state, ...action.payload };
    }

    case SET_JOB_TYPE: {
      const oldTypes: string[] | any = state.job_type;

      if (oldTypes.includes(action.payload)) {
        const newTypes = state.job_type.filter(item => item !== action.payload);

        return {
          ...state,
          job_type: [...newTypes],
        };
      } else {
        return {
          ...state,
          job_type: [...state.job_type, action.payload],
        };
      }
    }

    case SET_FIELD_SENIORITY: {
      const oldLevels: string[] | any = state.job_senerioty;

      if (oldLevels.includes(action.payload)) {
        const newLevels = state.job_senerioty.filter(item => item !== action.payload);

        return {
          ...state,
          job_senerioty: [...newLevels],
        };
      } else {
        return {
          ...state,
          job_senerioty: [...state.job_senerioty, action.payload],
        };
      }
    }

    case SET_FIELD_SALARY: {
      const oldRange: string[] | any = state.salary_range;

      if (oldRange.includes(action.payload)) {
        const newRange = state.salary_range.filter(item => item !== action.payload);

        return {
          ...state,
          salary_range: [...newRange],
        };
      } else {
        return {
          ...state,
          salary_range: [...state.salary_range, action.payload],
        };
      }
    }

    case SET_FIELD_TIME : {
      return {
        ...state, time: action.payload
      }
    }

    default: {
      return state;
    }
  }
};

export default filter;
