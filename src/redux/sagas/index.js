import {
  fork,
  all,
} from 'redux-saga/effects';
import { watcherCreateUser, watcherFetchUser } from './user';
import { watcherExamStart, watcherFetchQuestion, watcherSaveAnswer, watcherSetExamStatus } from './exam';
import { watcherFetchExamResult, watcherFetchResultByCategory, watcherSendMail } from './result';

export default function* root() {
  yield all([
    fork(watcherCreateUser),
    fork(watcherFetchUser),
    fork(watcherExamStart),
    fork(watcherFetchQuestion),
    fork(watcherSaveAnswer),
    fork(watcherFetchExamResult),
    fork(watcherFetchResultByCategory),
    fork(watcherSetExamStatus),
    fork(watcherSendMail),
  ]);
}
