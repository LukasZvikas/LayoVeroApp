
import axios from "axios";

import {SIGN_IN} from "../reducers/types";

export const SignInAction =  (email, password) =>  async dispatch => {
	console.log(email, password)
	const res = await axios.post("http://localhost:5000/signin", {email, password});
	console.log(res);

	dispatch({ type: SIGN_IN, payload: res });

	console.log(res);
}