import { CLEAR_ERRORS, AUTH_ERROR, EMAIL_ERROR } from "./types";

export default function(state = { errorMessage: null }, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload.error };
    case EMAIL_ERROR:
      return { ...state, errorMessage: "Please enter a valid email" };
    case CLEAR_ERRORS:
      return { errorMessage: null };
    default:
      return state;
  }
}
