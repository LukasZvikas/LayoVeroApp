import React from "react";
import { View, TouchableOpacity } from "react-native";
import { shallow } from "enzyme";
import { Suggestions } from "../suggestions";
import SuggIcon from "../icon";
import SuggCity from "../city";

it("returns null if no suggestions passed", () => {
  const wrapper = shallow(<Suggestions />);
  expect(wrapper.type()).toEqual(null);
});

describe("Suggestions with suggestions prop passed", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      suggestions: ["London", "Losangeles"],
      setSearchBarState: jest.fn(),
      getCities: jest.fn(),
      clearSuggestions: jest.fn(),
      dismissKeyboard: jest.fn()
    };
    wrapper = shallow(<Suggestions {...props} />);
  });

  it("does not return null", () => {
    expect(wrapper.type()).not.toEqual(null);
  });

  it("has a main wrapper View", () => {
    expect(wrapper.find(View)).toHaveLength(1);
  });
  it("has 2 TouchableOpacities", () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(2);
  });
  it("has SuggIcon", () => {
    expect(wrapper.find(SuggIcon)).toHaveLength(2);
  });
  it("has SuggCity", () => {
    expect(wrapper.find(SuggCity)).toHaveLength(2);
  });

  describe("interactions", () => {
    beforeEach(() => {
      wrapper
        .find(TouchableOpacity)
        .first()
        .prop("onPress")();
    });
    it("setSearchBarState gets called onPress", () => {
      expect(props.setSearchBarState).toHaveBeenCalledTimes(1);
    });
    it("getCities gets called onPress", () => {
      expect(props.getCities).toHaveBeenCalledTimes(1);
    });
    it("clearSuggestions gets called onPress", () => {
      expect(props.clearSuggestions).toHaveBeenCalledTimes(1);
    });
    it("dismissKeyboard gets called onPress", () => {
      expect(props.dismissKeyboard).toHaveBeenCalledTimes(1);
    });
  });
});
