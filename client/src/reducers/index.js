import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import leads from './leads';

const rootReducer = combineReducers({
  user,
  flash,
  leads,
});

export default rootReducer;
