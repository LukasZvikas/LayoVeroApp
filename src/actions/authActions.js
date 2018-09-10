
import axios from "axios";

import {SIGN_IN} from "../reducers/types";

export const SignInAction =  (email, password) =>  async dispatch => {

	const res = await axios.post("http://10.236.97.137/signin", {email, password});

	dispatch({ type: SIGN_IN, payload: res });

	console.log(res);
}