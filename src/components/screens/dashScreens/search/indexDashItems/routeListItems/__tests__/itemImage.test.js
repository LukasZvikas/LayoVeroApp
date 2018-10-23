import React from "react";
import { View, Image } from "react-native";
import { shallow } from "enzyme";
import ItemImage from "../ItemImage";

describe("ItemImage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ItemImage />);
  });

  it("render a View", () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it("renders Image", () => {
    expect(wrapper.find(Image)).toHaveLength(1);
  });
});
