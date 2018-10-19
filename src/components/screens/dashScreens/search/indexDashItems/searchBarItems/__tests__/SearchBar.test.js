import React from "react";
import { TextInput } from "react-native";
import { shallow } from "enzyme";
import { SearchBar } from "../SearchBar";
import SearchBarCancel from "../searchBarCancel";
import SearchBarInput from "../searchBarCancel";
import SearchBarIcon from "../searchBarCancel";
import Suggestions from "../../suggestionItems/suggestions";

const setSearchState = (setTo, wrapper) => {
  mockFn = jest.fn(() => wrapper.setState({ searchBarState: setTo }));
  wrapper.instance().changeSearchState = mockFn;
  wrapper
    .find(Suggestions)
    .props()
    .setSearchBarState();
};

describe("SearchBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it("renders SearchBarIcon component", () => {
    expect(wrapper.find(SearchBarIcon)).toHaveLength(1);
  });

  it("renders SearchBarInput component", () => {
    expect(wrapper.find(SearchBarInput)).toHaveLength(1);
  });

  it("renders SearchBarCancel component", () => {
    expect(wrapper.find(SearchBarCancel)).toHaveLength(1);
  });

  it("render Suggestions component", () => {
    expect(wrapper.find(Suggestions)).toHaveLength(1);
  });
});

describe("Suggestions interaction", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });
  it("Suggestions setSearchBarState sets searchBarState to true", () => {
    setSearchState(true, wrapper);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapper.state().searchBarState).toBe(true);
  });
  it("Suggestions setSearchBarState sets searchBarState to false", () => {
    wrapper.setState({ searchBarState: true });
    setSearchState(false, wrapper);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapper.state().searchBarState).toBe(false);
  });
});
