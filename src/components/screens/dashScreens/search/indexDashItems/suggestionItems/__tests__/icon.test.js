import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";
import { Suggestions } from "../suggestions";
import SuggIcon from "../icon";
import { Location } from "../../../../../../svg";

describe("suggestionIcon", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SuggIcon />);
  });
  it("renders Text", () => {
    expect(wrapper.find(Text)).toHaveLength(1);
  });

  it("renders Location Logo", () => {
    expect(wrapper.find(Location)).toHaveLength(1);
  });
});
