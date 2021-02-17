export const SET_SIMPLE_FILTER = 'SET_SIMPLE_FILTER';
export const SET_JOB_TYPE = 'SET_JOB_TYPE';
export const SET_FIELD_SENIORITY = 'SET_FIELD_SENIORITY';
export const SET_FIELD_SALARY = 'SET_FIELD_SALARY';

interface IPayload {
  company_name: string;
  location: string;
  skills: string[];
}

export const setSimpeFilter = (payload: IPayload) => {
  return {
    type: SET_SIMPLE_FILTER,
    payload,
  };
};

export const setFieldJobType = value => {
  return {
    type: SET_JOB_TYPE,
    payload: value,
  };
};

export const setFieldSeniority = value => {
  return {
    type: SET_FIELD_SENIORITY,
    payload: value,
  };
};

export const setFieldSalary = value => {
  return {
    type: SET_FIELD_SALARY,
    payload: value,
  };
};
