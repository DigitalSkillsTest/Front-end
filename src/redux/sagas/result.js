import {
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';
import {
  FETCH_EXAM_RESULT_REQ,
  fetchExamResultSuccess,
  fetchExamResultFail,
  FETCH_RESULT_BY_CATEGORY_REQ,
  fetchResultByCategorySuccess,
  fetchResultByCategoryFail,
} from '../actions';
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
    yield put(fetchResultByCategoryFail(error));
  }
}

export function* watcherFetchExamResult() {
  yield takeEvery(FETCH_EXAM_RESULT_REQ, fetchExamResult);
}

export function* watcherFetchResultByCategory() {
  yield takeEvery(FETCH_RESULT_BY_CATEGORY_REQ, fetchResultByCategory);
}
