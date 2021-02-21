import { IFilterState } from '@/types/index';
import {
  SET_SIMPLE_FILTER,
  SET_FIELD_SENIORITY,
  SET_JOB_TYPE,
  SET_FIELD_SALARY,
  SET_FIELD_MARKET,
} from './../actions/filter';

const initialState: IFilterState = {
  company_name: '',
  location: '',
  skills: [],
  job_type: [],
  job_seniority: [],
  salary_range: [],
  market: [],
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

    case 'CLEAR': {
      console.log('clear');
      return { ...initialState };
    }

    case SET_FIELD_SENIORITY: {
      const oldLevels: string[] | any = state.job_seniority;

      if (oldLevels.includes(action.payload)) {
        const newLevels = state.job_seniority.filter(item => item !== action.payload);

        return {
          ...state,
          job_seniority: [...newLevels],
        };
      } else {
        return {
          ...state,
          job_seniority: [...state.job_seniority, action.payload],
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

    case SET_FIELD_MARKET: {
      const oldMarket: string[] | any = state.market;

      if (oldMarket.includes(action.payload)) {
        const newMArket = state.market.filter(item => item !== action.payload);

        return {
          ...state,
          market: [...newMArket],
        };
      } else {
        return {
          ...state,
          market: [...state.market, action.payload],
        };
      }
    }

    default: {
      return state;
    }
  }
};

export default filter;
