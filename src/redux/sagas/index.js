import {
  fork,
  all,
} from 'redux-saga/effects';
import { watcherCreateUser, watcherFetchUser } from './user';

export default function* root() {
  yield all([
    fork(watcherCreateUser),
    fork(watcherFetchUser),
  ]);
}
