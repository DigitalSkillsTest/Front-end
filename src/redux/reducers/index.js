import { combineReducers } from 'redux';
import currentUser from './user';
import loader from './loader';
import exam from './exam';
import result from './result';

const reducer = combineReducers({
  currentUser,
  loader,
  exam,
  result,
});

export default reducer;
