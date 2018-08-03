import { combineReducers } from 'redux';
import currentUser from './user';

const reducer = combineReducers({
  currentUser,
});

export default reducer;
