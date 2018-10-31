import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  FETCH_QUESTION_REQ,
  fetchQuestionSuccess,
  fetchQuestionFail,
  EXAM_START_REQ,
  examStartSuccess,
  examStartFail,
  SAVE_ANSWER_REQ,
  saveAnswerSuccess,
  saveAnswerFail,
  SET_EXAM_STATUS_REQ,
  setExamStatusSuccess,
  setExamStatusFail,
  nextQuestion,
} from '../actions';
import { examService } from '../../services';
import { IconNotification } from '../../components/CommonComponent';

function* examStart(action) {
  try {
    const response = yield call(examService.examStart);
    if (response.status === 200) {
      localStorage.setItem('examId', response.data.data.examId);
      yield put(examStartSuccess(response.data));
    } else {
      throw response.message;
    }
  } catch (error) {
    yield put(examStartFail(error));
  }
}

function* fetchQuestion(action) {
  try {
    const response = yield call(examService.fetchQuestion, action.data);
    if (response.status === 200) {
      yield put(fetchQuestionSuccess(response.data));
    } else {
      throw response.message;
    }
  } catch (error) {
    yield put(fetchQuestionFail(error));
  }
}

function* saveAnswer(action) {
  try {
    const response = yield call(examService.saveAnswer, action.data);
    if (response.status === 200) {
      yield put(saveAnswerSuccess(response.data));
      yield put(nextQuestion());
    } else {
      throw response.message;
    }
  } catch (error) {
    IconNotification('error', 'Your answer not submitted successfully. Please try again.');
    yield put(saveAnswerFail(error));
  }
}

function* setExamStatus(action) {
  try {
    const response = yield call(examService.setExamStatus, action.data);
    if (response.status === 200) {
      yield put(setExamStatusSuccess(response.data));
    } else {
      throw response.message;
    }
  } catch (error) {
    yield put(setExamStatusFail(error));
  }
}


export function* watcherExamStart() {
  yield takeEvery(EXAM_START_REQ, examStart);
}

export function* watcherFetchQuestion() {
  yield takeEvery(FETCH_QUESTION_REQ, fetchQuestion);
}

export function* watcherSaveAnswer() {
  yield takeEvery(SAVE_ANSWER_REQ, saveAnswer);
}

export function* watcherSetExamStatus() {
  yield takeEvery(SET_EXAM_STATUS_REQ, setExamStatus);
}
