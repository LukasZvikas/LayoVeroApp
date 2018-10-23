import React from "react";
import { Text, View } from "react-native";
import { shallow } from "enzyme";
import ItemDetails from "../itemDetails";

describe("ItemDetails", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = { name: "London Tour", hours: 5 };
    wrapper = shallow(<ItemDetails {...props} />);
  });

  it("has a View", () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });

  it("has 2 Texts", () => {
    expect(wrapper.find(Text)).toHaveLength(2);
  });

  it("first Text renders name", () => {
    expect(
      wrapper
        .find(Text)
        .first()
        .props().children
    ).toEqual("London Tour");
  });

  it("second Text renders hours", () => {
    expect(
      wrapper
        .find(Text)
        .at(1)
        .props().children[0]
    ).toEqual(5);
  });
});
