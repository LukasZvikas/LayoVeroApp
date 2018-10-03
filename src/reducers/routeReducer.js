import { GET_CITIES, PARTIAL_QUERY, CLEAR_SUGGESTIONS} from "./types";

const initialState = { suggestions: "" };
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return { ...state, routesArray: action.payload };
    case PARTIAL_QUERY:
      console.log("redux", action.payload);
      return { ...state, options: action.payload };
    case CLEAR_SUGGESTIONS: 
      return initialState;
    default:
      return state;
  }
}
