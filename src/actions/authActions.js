import axios from "axios";
import { SecureStore } from "expo";
import NavigationService from "../../NavigationService";

import {
  AUTH_ERROR,
  EMAIL_ERROR,
  SUCCESS_MESSAGE,
  CLEAR_MESSAGES
} from "../reducers/types";

export const SignInAction = (email, password) => async dispatch => {
  const res = await axios.post("http://localhost:5000/signin", {
    email,
    password
  });
  if (res.data.token) {
    SecureStore.setItemAsync("jwt", res.data.token);
    NavigationService.navigate("afterAuth");
  } else {
    dispatch({ type: AUTH_ERROR, payload: res.data.error });
  }
};

export const SignUpAction = (email, password) => async dispatch => {
  const res = await axios.post("http://localhost:5000/signup", {
    email,
    password
  });

  if (res.data.token) {
    NavigationService.navigate("login");
  } else {
    dispatch({ type: AUTH_ERROR, payload: res.data.error });
  }
};

export const showEmailError = () => {
  return { type: EMAIL_ERROR };
};

export const showSuccessMessage = email => async dispatch => {
  const res = await axios.post("http://localhost:5000/forgot", {
    email
  });

  if (res.data.message) {
    dispatch({ type: SUCCESS_MESSAGE, payload: res.data.message });
  }
  else{
    dispatch({type: AUTH_ERROR, payload: res.data.error})
  }
};

export const clearMessages = () => {
  return { type: CLEAR_MESSAGES };
};
