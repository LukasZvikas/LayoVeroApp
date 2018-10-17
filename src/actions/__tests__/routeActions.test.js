import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getCities,
  getCityFromPartialQuery,
  clearSuggestions
} from "../routeActions";
import "isomorphic-fetch";

export const mockStore = configureMockStore([thunk]);

const fetchCities = () => {
  return dispatch => {
    return fetch("http://localhost:5000/getCities").then(() =>
      dispatch(getCities("London"))
    );
  };
};

const fetchSuggestions = () => {
  return dispatch => {
    return fetch("http://localhost:5000/partialQuery").then(() =>
      dispatch(getCityFromPartialQuery("Lon"))
    );
  };
};

describe("RouteActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it("getCities action dispatches correct type and payload", () => {
    return store.dispatch(fetchCities()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual("get_cities");
      expect(actions[0].payload.length).toBeGreaterThan(1);
    });
  });
  it("getCityFromPartialQuery action dispatches correct type and payload", () => {
    return store.dispatch(fetchSuggestions()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "partial_query",
        payload: ["London"]
      });
    });
  });
  it("clearSuggestions action dispatches correct type", () => {
    store.dispatch(clearSuggestions());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "clear_suggestions" });
  });
});
