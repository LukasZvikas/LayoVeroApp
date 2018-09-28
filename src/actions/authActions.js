import axios from "axios";
import { SecureStore } from "expo";
import NavigationService from "../../NavigationService";

import { AUTH_ERROR, CLEAR_ERRORS } from "../reducers/types";

export const SignInAction = (email, password) => async dispatch => {
  const res = await axios.post("http://localhost:5000/signin", {
    email,
    password
  });

  if (res.data.token) {
    SecureStore.setItemAsync("jwt", res.data.token);
    NavigationService.navigate("afterAuth");
  } else {
    dispatch({ type: AUTH_ERROR, payload: res.data });
  }
};

export const SignUpAction = (email, password) => async dispatch => {
  const res = await axios
    .post("http://localhost:5000/signup", {
      email,
      password
    })
    .then(() => {
      NavigationService.navigate("login");
    });

  console.log(res.data);
  dispatch({ type: SIGN_IN, payload: res.data });
};

export const clearErrorMessages = () => {
  return { type: CLEAR_ERRORS };
};
