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

export const saveAnswerSuccess = data => ({
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
export const RESET_EXAM_STATUS = 'RESET_EXAM_STATUS';

export const setExamId = () => ({
  type: SET_EXAM_ID,
});

export const clearExam = () => ({
  type: CLEAR_EXAM,
});

export const resetExamStatus = () => ({
  type: RESET_EXAM_STATUS,
});


export const SET_EXAM_STATUS_REQ = 'SET_EXAM_STATUS_REQ';
export const SET_EXAM_STATUS_SUCCESS = 'SET_EXAM_STATUS_SUCCESS';
export const SET_EXAM_STATUS_FAIL = 'SET_EXAM_STATUS_FAIL';

export const setExamStatusReq = data => ({
  type: SET_EXAM_STATUS_REQ,
  data,
});
export const setExamStatusSuccess = data => ({
  type: SET_EXAM_STATUS_SUCCESS,
  data,
});
export const setExamStatusFail = data => ({
  type: SET_EXAM_STATUS_FAIL,
  data,
});

