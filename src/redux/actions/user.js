export const CREATE_USER_REQ = 'CREATE_USER_REQ';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const createUserReq = data => ({
  type: CREATE_USER_REQ,
  data,
});

export const createUserSuccess = data => ({
  type: CREATE_USER_SUCCESS,
  data,
});

export const createUserFail = error => ({
  type: CREATE_USER_FAIL,
  error,
});


export const FETCH_USER_REQ = 'FETCH_USER_REQ';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const fetchUserReq = data => ({
  type: FETCH_USER_REQ,
  data,
});

export const fetchUserSuccess = data => ({
  type: FETCH_USER_SUCCESS,
  data,
});

export const fetchUserFail = error => ({
  type: FETCH_USER_FAIL,
  error,
});


export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';

export const clearCurrentUser = () => ({
  type: CLEAR_CURRENT_USER,
});
