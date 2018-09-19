import axios from "axios";
import { GET_CITIES } from "../reducers/types";

export const getCities = () => async dispatch => {
  const res = await axios.get("http://10.202.129.196:5000/getCities");

  dispatch({ type: GET_CITIES, payload: res.data });
};
