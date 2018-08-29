import {
  FETCH_EXAM_RESULT_REQ,
  FETCH_EXAM_RESULT_FAIL,
  FETCH_EXAM_RESULT_SUCCESS,
  FETCH_RESULT_BY_CATEGORY_REQ,
  FETCH_RESULT_BY_CATEGORY_FAIL,
  FETCH_RESULT_BY_CATEGORY_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  overallResult: null,
  resultByCategory: null,
};

const Result = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EXAM_RESULT_REQ:
    case FETCH_RESULT_BY_CATEGORY_REQ:
      return state;
    case FETCH_EXAM_RESULT_FAIL:
    case FETCH_RESULT_BY_CATEGORY_FAIL:
      return state;
    case FETCH_EXAM_RESULT_SUCCESS:
      return {
        ...state,
        overallResult: action.data,
      };
    case FETCH_RESULT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        resultByCategory: action.data,
      };
    default:
      return state;
  }
};

export default Result;
