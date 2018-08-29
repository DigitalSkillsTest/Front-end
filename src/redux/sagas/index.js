import {
  fork,
  all,
} from 'redux-saga/effects';
import { watcherCreateUser, watcherFetchUser } from './user';
import { watcherExamStart, watcherFetchQuestion, watcherSaveAnswer } from './exam';
import { watcherFetchExamResult, watcherFetchResultByCategory } from './result';

export default function* root() {
  yield all([
    fork(watcherCreateUser),
    fork(watcherFetchUser),
    fork(watcherExamStart),
    fork(watcherFetchQuestion),
    fork(watcherSaveAnswer),
    fork(watcherFetchExamResult),
    fork(watcherFetchResultByCategory),
  ]);
}
