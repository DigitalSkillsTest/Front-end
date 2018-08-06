import {
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';
import { CREATE_USER_REQ, createUserSuccess, createUserFail } from '../actions';
import userService from '../../services';
import * as routes from '../../routes/path';

function* createUser(action) {
  const { history, ...restData } = action.data;
  try {
    const response = yield call(userService.createUser, restData);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
      yield history.push(routes.HowTestWorks);
    } else {
      throw response.message;
    }
  } catch (error) {
    yield put(createUserFail(error));
  }
}

export default function* watcherUserUpdate() {
  yield takeEvery(CREATE_USER_REQ, createUser);
}
