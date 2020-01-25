import { createStore, compose, applyMiddleware } from "redux";
import combineReducers from "../reducers/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  token: null,
  isAuth: null,
  loading: true,
  user: {
    name: "",
    email: "",
    password: "",
    avatar: ""
  }
};
const store = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(...middleWare))
);
export default store;
