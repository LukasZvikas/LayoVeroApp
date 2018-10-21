import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import { Suggestions } from "../suggestions";
import SuggCity from "../city";

describe("SuggCity", () => {
  beforeEach(() => {
    wrapper = shallow(<SuggCity />);
  });
  it("renders Text", () => {
    expect(wrapper.find(Text)).toHaveLength(1);
  });
});
