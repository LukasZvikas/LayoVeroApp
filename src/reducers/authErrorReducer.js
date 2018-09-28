import { CLEAR_ERRORS, AUTH_ERROR } from "./types";

export default function(state = { errorMessage: null }, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload.message };
    case CLEAR_ERRORS:
      return { errorMessage: null };
    default:
      return state;
  }
}
