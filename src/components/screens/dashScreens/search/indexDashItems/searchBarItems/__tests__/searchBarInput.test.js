import React from "react";
import { TextInput } from "react-native";
import { shallow } from "enzyme";
import SearchBarInput, { styles } from "../searchBarInput";

describe("SearchBarInput", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = { textState: "haha" };
    wrapper = shallow(<SearchBarInput {...props} />);
  });
  it("has a TextInput", () => {
    expect(wrapper.find(TextInput)).toHaveLength(1);
  });

  it("has a style propery", () => {
    expect(wrapper.find(TextInput).prop("style")).toEqual(styles.inputWidth);
  });

  it("textState prop matches a value property", () => {
    expect(wrapper.props().value).toEqual(props.textState);
  });
});

describe("SearchBarInput interaction", () => {
  let wrapper;
  let props;
  let event;
  beforeEach(() => {
    state = {};
    props = {
      onFocus: jest.fn(),
      textState: "",
      onChange: jest.fn()
    };
    wrapper = shallow(<SearchBarInput {...props} />);
  });

  describe("onFocus", () => {
    beforeEach(() => {
      wrapper.find(TextInput).prop("onFocus")();
    });

    it("triggers onFocus successfully", () => {
      expect(props.onFocus).toHaveBeenCalledTimes(1);
    });
  });

  describe("onChange", () => {
    beforeEach(() => {
      wrapper.find(TextInput).prop("onChange")();
    });
    it("triggers onChange successfully", () => {
      expect(props.onChange).toHaveBeenCalledTimes(1);
    });
  });
});
