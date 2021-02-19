import { combineReducers } from 'redux';
import filter from './filter';

const allReducers = combineReducers({
  filter,
});

export default allReducers;
