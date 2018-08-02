import { combineReducers } from 'redux';
import User from './user';

const reducer = combineReducers({
  currentUser: User,
});

export default reducer;
