import authErrorReducer from "./authErrorReducer";
import routeReducer from "./routeReducer";
import { combineReducers } from "redux";

export default combineReducers({
  authErrors: authErrorReducer,
  routes: routeReducer
});