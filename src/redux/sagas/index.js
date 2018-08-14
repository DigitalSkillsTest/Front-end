import {
  fork,
  all,
} from 'redux-saga/effects';
import { watcherCreateUser, watcherFetchUser } from './user';
import { watcherExamStart, watcherFetchQuestion, watcherSaveAnswer } from './exam';

export default function* root() {
  yield all([
    fork(watcherCreateUser),
    fork(watcherFetchUser),
    fork(watcherExamStart),
    fork(watcherFetchQuestion),
    fork(watcherSaveAnswer),
  ]);
}
