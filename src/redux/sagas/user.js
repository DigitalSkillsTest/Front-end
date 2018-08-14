import {
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';
import {
  CREATE_USER_REQ,
  createUserSuccess,
  createUserFail,
  FETCH_USER_REQ,
  fetchUserSuccess,
  fetchUserFail,
} from '../actions';
import { userService } from '../../services';
import * as routes from '../../routes/path';

function* createUser(action) {
  const { history, ...restData } = action.data;
  try {
    const response = yield call(userService.createUser, restData);
    if (response.status === 200) {
      localStorage.setItem('userId', response.data.data.id);
      localStorage.setItem('userToken', response.data.data.token);
      yield put(createUserSuccess(response.data));
      yield history.push(routes.HowTestWorks);
    } else {
      throw response.message;
    }
  } catch (error) {
    yield put(createUserFail(error));
  }
}

function* fetchUser(action) {
  try {
    const response = yield call(userService.fetchUser, action.data);
    if (response.status === 200) {
      yield put(fetchUserSuccess(response.data));
    } else {
      throw response.message;
    }
  } catch (error) {
    yield put(fetchUserFail(error));
  }
}

export function* watcherCreateUser() {
  yield takeEvery(CREATE_USER_REQ, createUser);
}

export function* watcherFetchUser() {
  yield takeEvery(FETCH_USER_REQ, fetchUser);
}
