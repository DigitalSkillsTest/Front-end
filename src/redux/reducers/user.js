import {
  CREATE_USER_REQ,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  FETCH_USER_REQ,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  CLEAR_CURRENT_USER,
} from '../actions';

const currentUser = (state = null, action) => {
  switch (action.type) {
    case CREATE_USER_REQ:
    case FETCH_USER_REQ:
      return state;
    case CREATE_USER_FAIL:
    case FETCH_USER_FAIL:
      return state;
    case CREATE_USER_SUCCESS:
    case FETCH_USER_SUCCESS:
      return {
        ...state, ...action.data,
      };
    case CLEAR_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default currentUser;
