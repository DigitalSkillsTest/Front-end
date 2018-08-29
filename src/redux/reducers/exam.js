import { FETCH_QUESTION_REQ, FETCH_QUESTION_FAIL, FETCH_QUESTION_SUCCESS, EXAM_START_REQ, EXAM_START_FAIL, EXAM_START_SUCCESS, NEXT_QUESTION, PREVIOUS_QUESTION, SET_EXAM_ID, CLEAR_EXAM, SET_EXAM_STATUS } from '../actions';

const INITIAL_STATE = {
  currentQuestion: null,
  examId: null,
  QIndex: 1,
  isexamCompleted: false,
};

function decrement(index) {
  if (index <= 1) {
    return 1;
  }
  return index - 1;
}

function increment(index) {
  if (index >= 30) {
    return 30;
  }
  return index + 1;
}

const exam = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUESTION_REQ:
    case EXAM_START_REQ:
      return { ...state };
    case FETCH_QUESTION_FAIL:
    case EXAM_START_FAIL:
      return { ...state };
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        currentQuestion: action.data.data,
      };
    case EXAM_START_SUCCESS:
      return {
        ...state,
        examId: action.data.data.examId,
        QIndex: 1,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        QIndex: increment(state.QIndex),
      };
    case PREVIOUS_QUESTION:
      return {
        ...state,
        QIndex: decrement(state.QIndex),
      };
    case SET_EXAM_ID:
      return {
        ...state,
        examId: localStorage.getItem('examId'),
      };
    case CLEAR_EXAM:
      localStorage.removeItem('examId');
      return {
        ...state,
        currentQuestion: null,
        examId: null,
        QIndex: 1,
      };
    case SET_EXAM_STATUS:
      return {
        ...state,
        isexamCompleted: !state.isexamCompleted,
      };
    default:
      return state;
  }
};

export default exam;
