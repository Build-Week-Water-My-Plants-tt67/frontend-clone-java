import { combineReducers } from 'redux';
import { plants } from './plants';
import { user } from './user';

export default combineReducers({
  user,
  plants
});