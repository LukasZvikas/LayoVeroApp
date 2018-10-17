import React from "react";
import { shallow } from "enzyme";
import { SearchBar } from "../SearchBar";
import SearchBarCancel from "../searchBarCancel";
import SearchBarInput from "../searchBarCancel";
import SearchBarIcon from "../searchBarCancel";
import Suggestions from "../../suggestionItems/suggestions";

// import Root from "../../../../../../../../root";

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
