import { combineReducers } from 'redux';
import job from './job';
import filter from './filter';

const allReducers = combineReducers({
  job,
  filter,
});

export default allReducers;
