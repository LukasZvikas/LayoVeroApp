import {
  CLEAR_MESSAGES,
  AUTH_ERROR,
  SUCCESS_MESSAGE,
  EMAIL_ERROR
} from "./types";

export default function(state = { errorMessage: null }, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case EMAIL_ERROR:
      return { ...state, errorMessage: "Please enter a valid email" };
    case SUCCESS_MESSAGE:
      return { ...state, successMessage: action.payload };
    case CLEAR_MESSAGES:
      return { errorMessage: null };
    default:
      return state;
  }
}
