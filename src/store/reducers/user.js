import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, EDIT_USER_START, EDIT_USER_SUCCESS, EDIT_USER_FAILURE, USER_LOGOUT } from '../actions';

const initialState = {
  user: {},
  error: '',
  isCallingAPI: false,
  isLoggedIn: false
};

export const user = (state=initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
        return {
          ...state,
          error: '',
          isCallingAPI: true
        };
      case USER_LOGIN_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          user: action.payload,
          isCallingAPI: false,
          isLoggedIn: true
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          isCallingAPI: false
        };
      case EDIT_USER_START:
        return {
          ...state,
          error: '',
          isCallingAPI: true
        };
      case EDIT_USER_SUCCESS:
        return {
          ...state,
          plants: action.payload,
          isCallingAPI: false
        };
      case EDIT_USER_FAILURE:
        return {
          ...state,
          error: action.payload,
          isCallingAPI: false
        };
    case USER_LOGOUT:
      return {
        ...state,
        state: initialState,
        isLoggedIn: false
      };
    default:
      return state;
  }
} 
