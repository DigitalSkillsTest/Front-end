import { CREATE_USER_REQ, CREATE_USER_FAIL, CREATE_USER_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currentUser: null,
};

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_REQ:
      return {
        ...state,
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.data,
      };
    default:
      return state;
  }
};

export default User;
