import { SIGN_IN } from "./types";

export default function(state = [], action) {
  switch (action.type) {
    case SIGN_IN:
    	console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}
