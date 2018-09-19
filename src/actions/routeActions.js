import axios from "axios";
import { GET_CITIES } from "../reducers/types";

export const getCities = () => async dispatch => {
  const res = await axios.get("http://128.235.85.32:5000/getCities");

  dispatch({ type: GET_CITIES, payload: res.data });
};
