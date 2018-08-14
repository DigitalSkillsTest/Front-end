import { combineReducers } from 'redux';
import currentUser from './user';
import loader from './loader';
import exam from './exam';

const reducer = combineReducers({
  currentUser,
  loader,
  exam,
});

export default reducer;
