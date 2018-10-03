export const FETCH_EXAM_RESULT_REQ = 'FETCH_EXAM_RESULT_REQ';
export const FETCH_EXAM_RESULT_SUCCESS = 'FETCH_EXAM_RESULT_SUCCESS';
export const FETCH_EXAM_RESULT_FAIL = 'FETCH_EXAM_RESULT_FAIL';

export const fetchExamResultReq = data => ({
  type: FETCH_EXAM_RESULT_REQ,
  data,
});

export const fetchExamResultSuccess = data => ({
  type: FETCH_EXAM_RESULT_SUCCESS,
  data,
});

export const fetchExamResultFail = error => ({
  type: FETCH_EXAM_RESULT_FAIL,
  error,
});


export const FETCH_RESULT_BY_CATEGORY_REQ = 'FETCH_RESULT_BY_CATEGORY_REQ';
export const FETCH_RESULT_BY_CATEGORY_SUCCESS = 'FETCH_RESULT_BY_CATEGORY_SUCCESS';
export const FETCH_RESULT_BY_CATEGORY_FAIL = 'FETCH_RESULT_BY_CATEGORY_FAIL';

export const fetchResultByCategoryReq = data => ({
  type: FETCH_RESULT_BY_CATEGORY_REQ,
  data,
});

export const fetchResultByCategorySuccess = data => ({
  type: FETCH_RESULT_BY_CATEGORY_SUCCESS,
  data,
});

export const fetchResultByCategoryFail = error => ({
  type: FETCH_RESULT_BY_CATEGORY_FAIL,
  error,
});

export const SEND_MAIL_REQ = 'SEND_MAIL_REQ';
export const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS';
export const SEND_MAIL_FAIL = 'SEND_MAIL_FAIL';

export const sendMailReq = data => ({
  type: SEND_MAIL_REQ,
  data,
});

export const sendMailSuccess = data => ({
  type: SEND_MAIL_SUCCESS,
  data,
});

export const sendMailFail = error => ({
  type: SEND_MAIL_FAIL,
  error,
});
