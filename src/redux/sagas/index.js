import {
  fork,
  all,
} from 'redux-saga/effects';
import watchCreateUser from './CreateUser';

export default function* root() {
  yield all([
    fork(watchCreateUser),
  ]);
}
