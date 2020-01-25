import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_SUCCESS
} from "../constants/action-types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  loading: true,
  user: {
    name: "",
    email: "",
    password: "",
    avatar: ""
  }
};
const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false
      };

    // default:
    //   return state;

    case REGISTER_SUCCESS:
      return {
        ...state,
        data: payload,
        isAuth: true,
        loading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        isAuth: true,
        loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        data: payload,
        isAuth: false,
        loading: false
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        data: payload,
        isAuth: true,
        loading: false
      };
    default:
      return state;
  }
};
export default auth;
