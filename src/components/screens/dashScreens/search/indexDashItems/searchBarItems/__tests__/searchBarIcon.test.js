import React from "react";
import { shallow } from "enzyme";
import { View } from "react-native";
import SearchBarIcon, { styles } from "../searchBarIcon";
import { Search } from "../../../../../../svg";
// import renderer from "react-test-renderer";
// import Root from "../../../../../../../root";

describe("SearchBar when showSearchIcon true", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBarIcon showSearchIcon={true} />);
  });
  it("shows a View wrapper if showSearchIcon is true", () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it("View has a style property", () => {
    expect(wrapper.find(View).prop("style")).toEqual(styles.padding);
  });

  it("shows SearchIcon", () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });
});

describe("SearchBar shen showSearchIcon is false", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBarIcon showSearchIcon={false} />);
  });
  it("does not show View if showSearchIcon is false", () => {
    expect(wrapper.find(View)).toHaveLength(0);
  });
});
