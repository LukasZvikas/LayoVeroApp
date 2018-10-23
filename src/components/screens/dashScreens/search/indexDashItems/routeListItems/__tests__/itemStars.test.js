import React from "react";
import { View } from "react-native";
import { shallow } from "enzyme";
import ItemStars from "../itemStars";

describe("ItemStars", () => {
  describe("ItemStars without props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ItemStars />);
    });

    it("renders 1 View if no stars prop provided", () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });
  });
  describe("ItemStars with props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ItemStars stars={5} />);
    });
    it("renders 6 Views if 5 stars provided", () => {
      expect(wrapper.find(View)).toHaveLength(6);
    });
  });
});
