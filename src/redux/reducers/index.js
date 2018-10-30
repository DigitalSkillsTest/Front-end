import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';
import currentUser from './user';
import loader from './loader';
import exam from './exam';
import result from './result';

const reducer = combineReducers({
  localize: localizeReducer,
  currentUser,
  loader,
  exam,
  result,
});

export default reducer;
