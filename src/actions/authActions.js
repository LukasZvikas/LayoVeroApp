import axios from "axios";
import { SecureStore } from "expo";
import NavigationService from "../../NavigationService";

import { SIGN_IN } from "../reducers/types";

export const SignInAction = (email, password) => async dispatch => {
  const res = await axios
    .post("http://localhost:5000/signin", {
      email,
      password
    })
    .then(res => {
      SecureStore.setItemAsync("jwt", res.data.token);
    })
    .then(() => {
      NavigationService.navigate("afterAuth");
    });

  dispatch({ type: SIGN_IN, payload: res.data.token });
};


