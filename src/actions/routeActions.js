import axios from "axios";
import { GET_CITIES } from "../reducers/types";

export const getCities = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/getCities");

  dispatch({ type: GET_CITIES, payload: res.data });
};
