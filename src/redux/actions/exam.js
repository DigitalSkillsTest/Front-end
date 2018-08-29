export const EXAM_START_REQ = 'EXAM_START_REQ';
export const EXAM_START_SUCCESS = 'EXAM_START_SUCCESS';
export const EXAM_START_FAIL = 'EXAM_START_FAIL';

export const examStartReq = () => ({
  type: EXAM_START_REQ,
});

export const examStartSuccess = data => ({
  type: EXAM_START_SUCCESS,
  data,
});

export const examStartFail = data => ({
  type: EXAM_START_FAIL,
  data,
});

export const FETCH_QUESTION_REQ = 'FETCH_QUESTION_REQ';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_FAIL = 'FETCH_QUESTION_FAIL';

export const fetchQuestionReq = data => ({
  type: FETCH_QUESTION_REQ,
  data,
});

export const fetchQuestionSuccess = data => ({
  type: FETCH_QUESTION_SUCCESS,
  data,
});

export const fetchQuestionFail = data => ({
  type: FETCH_QUESTION_FAIL,
  data,
});

export const SAVE_ANSWER_REQ = 'SAVE_ANSWER_REQ';
export const SAVE_ANSWER_SUCCESS = 'SAVE_ANSWER_SUCCESS';
export const SAVE_ANSWER_FAIL = 'SAVE_ANSWER_FAIL';

export const saveAnswerReq = data => ({
  type: SAVE_ANSWER_REQ,
  data,
});

export const saveAnserSuccess = data => ({
  type: SAVE_ANSWER_SUCCESS,
  data,
});

export const saveAnswerFail = data => ({
  type: SAVE_ANSWER_FAIL,
  data,
});

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREVIOUS_QUESTION = 'PREVIOUS_QUESTION';

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});
export const previousQuestion = () => ({
  type: PREVIOUS_QUESTION,
});

export const SET_EXAM_ID = 'SET_EXAM_ID';
export const CLEAR_EXAM = 'CLEAR_EXAM';
export const SET_EXAM_STATUS = 'SET_EXAM_STATUS';
export const setExamId = () => ({
  type: SET_EXAM_ID,
});

export const clearExam = () => ({
  type: CLEAR_EXAM,
});

export const setExamStatus = () => ({
  type: SET_EXAM_STATUS,
});
