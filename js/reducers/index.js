
import { combineReducers } from 'redux';

import user from './user';
import barList from './barList';
import time from './time';

export default combineReducers({
  user,
  barList,
  time
});
