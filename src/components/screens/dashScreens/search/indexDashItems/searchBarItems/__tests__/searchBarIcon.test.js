import React from "react";
import { shallow } from "enzyme";
import { View } from "react-native";
import SearchBar from "../SearchBar";
import SearchBarIcon, { styles } from "../searchBarIcon";
import { Search } from "../../../../../../svg";
// import renderer from "react-test-renderer";
// import Root from "../../../../../../../root";

const searchIconRenderer = type => {
  return shallow(<SearchBarIcon showSearchIcon={type} />);
};

describe("SearchBar", () => {
  it("has a View wrapper", () => {
    const wrapper = searchIconRenderer(true);
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it("has style property", () => {
    const wrapper = searchIconRenderer(true);
    expect(wrapper.find(View).prop("style")).toEqual(styles.padding);
  });
  it("shows SearchIcon if showSearchIcon is true", () => {
    const wrapper = searchIconRenderer(true);
    expect(wrapper.find(Search)).toHaveLength(1);
  });

  it("does not show SearchIcon if showSearchIcon is false", () => {
    const wrapper = searchIconRenderer(false);
    expect(wrapper.find(Search)).toHaveLength(0);
  });
});
