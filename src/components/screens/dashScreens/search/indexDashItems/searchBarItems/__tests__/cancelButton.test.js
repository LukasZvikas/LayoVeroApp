import React from "react";
import { shallow } from "enzyme";
import { TouchableOpacity, Text } from "react-native";
import CancelButton, { styles } from "../cancelButton";

describe("SearchBarCancel when searchBarState true", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CancelButton searchBarState={true} />);
  });
  it("shows TouchableOpacity", () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  });

  it("TouchableOpacity has a style prop", () => {
    expect(wrapper.find(TouchableOpacity).prop("style")).toEqual(
      styles.wrapper
    );
  });

  it("shows Text inside TouchableOpacity", () => {
    expect(wrapper.find(Text)).toHaveLength(1);
  });
});

describe("CancelButton when searchBarState false", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CancelButton searchBarState={false} />);
  });

  it("does not show TouchableOpacity if searchBarState is false", () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(0);
  });
});

describe("CancelButton interaction", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      searchBarState: true,
      onPress: jest.fn()
    };
    wrapper = shallow(<CancelButton {...props} />);
  });

  describe("pressing the cancel button", () => {
    beforeEach(() => {
      wrapper.find(TouchableOpacity).prop("onPress")();
    });
    it("calls onPress callback", () => {
      expect(props.onPress).toHaveBeenCalledTimes(1);
    });
  });
});
