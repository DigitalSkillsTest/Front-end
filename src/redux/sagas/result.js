import {
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';
import * as routes from '../../routes/path';
import {
  FETCH_EXAM_RESULT_REQ,
  fetchExamResultSuccess,
  fetchExamResultFail,
  FETCH_RESULT_BY_CATEGORY_REQ,
  fetchResultByCategorySuccess,
  fetchResultByCategoryFail,
  sendMailSuccess,
  sendMailFail,
  SEND_MAIL_REQ,
} from '../actions';
import { IconNotification } from '../../components/CommonComponent';
import { ResultService } from '../../services';


function* fetchExamResult(action) {
  try {
    const response = yield call(ResultService.fetchExamResult, action.data);
    if (response.status === 200) {
      yield put(fetchExamResultSuccess(response.data));
    } else {
      throw response.message;
    }
  } catch (error) {
    IconNotification('error', 'Internal Server Error');
    yield put(fetchExamResultFail(error));
  }
}

function* fetchResultByCategory(action) {
  try {
    const response = yield call(ResultService.fetchResultByCategory, action.data);
    if (response.status === 200) {
      yield put(fetchResultByCategorySuccess(response.data));
    } else {
      throw response.message;
    }
  } catch (error) {
    IconNotification('error', 'Internal Server Error');
    yield put(fetchResultByCategoryFail(error));
  }
}

function* sendMail(action) {
  const { formData, history } = action.data;
  try {
    const response = yield call(ResultService.sendMail, formData);
    if (response.status === 200) {
      yield put(sendMailSuccess(response.data));
      IconNotification('success', 'Mail Sent Successfully.');
      // localStorage.clear();
      // history.push(routes.WelComepage);
    } else {
      throw response.message;
    }
  } catch (error) {
    yield put(sendMailFail(error));
  }
}

export function* watcherFetchExamResult() {
  yield takeEvery(FETCH_EXAM_RESULT_REQ, fetchExamResult);
}

export function* watcherFetchResultByCategory() {
  yield takeEvery(FETCH_RESULT_BY_CATEGORY_REQ, fetchResultByCategory);
}

export function* watcherSendMail() {
  yield takeEvery(SEND_MAIL_REQ, sendMail);
}
