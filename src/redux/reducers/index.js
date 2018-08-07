import { combineReducers } from 'redux';
import currentUser from './user';
import loader from './loader';

const reducer = combineReducers({
  currentUser,
  loader,
});

export default reducer;
