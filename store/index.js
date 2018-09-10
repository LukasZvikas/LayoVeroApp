import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../src/reducers";
import reduxThunk from "redux-thunk"


import { AsyncStorage } from "react-native";

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
