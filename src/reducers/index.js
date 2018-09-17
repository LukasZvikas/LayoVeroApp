import authReducer from "./authReducer";
import routeReducer from "./routeReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  routes: routeReducer
});