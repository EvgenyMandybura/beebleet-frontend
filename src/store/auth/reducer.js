import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actionTypes";

const initialState = {
  error: "",
  message: "",
  user: null,
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        loading: false,
      };
      break;
    case LOGIN_ERROR:
      state = {
        ...state,
        loading: false,
      };
      break;

    case LOGOUT_USER:
      state = { ...state };
      break;
    case LOGOUT_USER_SUCCESS:
      state = { ...state };
      break;
    case LOGOUT_ERROR:
      state = { ...state, loading: false };
      break;

    case REGISTER_USER:
      return { ...state, loading: true, error: "" };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: "" };
    case REGISTER_USER_ERROR:
      return { ...state, loading: false };

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default auth;
