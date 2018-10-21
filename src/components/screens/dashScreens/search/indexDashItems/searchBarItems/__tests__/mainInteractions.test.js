import React from "react";
import { TextInput, View } from "react-native";
import { shallow } from "enzyme";
import { SearchBar } from "../SearchBar";
import CancelButton from "../cancelButton";
import InputText from "../inputText";
import InputIcon from "../cancelButton";
import Suggestions from "../../suggestionItems/suggestions";

const setAndCallMock = (setTo, wrapper, type) => {
  switch (type) {
    case "suggestionSetState":
      mockFn = jest.fn(() => wrapper.setState({ searchBarState: setTo }));
      wrapper.instance().changeSearchState = mockFn;
      wrapper
        .find(Suggestions)
        .props()
        .setSearchBarState();
      break;
    case "suggestionClear":
      mockFn = jest.fn();
      wrapper.instance().clearSuggestions = mockFn;
      wrapper
        .find(Suggestions)
        .props()
        .clearSuggestions();
      break;
    case "suggestionDismiss":
      mockFn = jest.fn();
      wrapper.instance().keyboardDismiss = mockFn;
      wrapper
        .find(Suggestions)
        .props()
        .dismissKeyboard();
      break;
    case "inputTextChange":
      mockFn = jest.fn(() => {
        wrapper.setState({ text: setTo });
      });
      mockFn2 = jest.fn();
      wrapper.instance().setTextState = mockFn;
      wrapper.instance().handleInputChange = mockFn2;
      wrapper
        .find(InputText)
        .props()
        .onChange();
      break;

    case "inputTextFocus":
      mockFn = jest.fn(() => {
        wrapper.setState({ searchBarState: true });
      });
      wrapper.instance().setSearchState = mockFn;
      wrapper
        .find(InputText)
        .props()
        .onFocus();
      break;
    case "cancelButton":
      mockFn = jest.fn();
      mockFn2 = jest.fn();
      mockFn3 = jest.fn();
      mockFn4 = jest.fn();
      mockFn5 = jest.fn();

      wrapper.instance().keyboardDismiss = mockFn;
      wrapper.instance().clearSuggestions = mockFn2;
      wrapper.instance().clearTextState = mockFn3;
      wrapper.instance().getCity = mockFn4;
      wrapper.instance().setSearchState = mockFn5;
      wrapper
        .find(CancelButton)
        .props()
        .onPress();
      break;
    default:
      break;
  }
};

const createMock = func => {
  mockFn = jest.fn();

  wrapper.instance().func = mockFn;
};
describe("SearchBar interactions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });
  describe("SearchBarInput interactions", () => {
    it("onChange sets text state and call handleInputChange", () => {
      setAndCallMock("Lond", wrapper, "inputTextChange");
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn2).toHaveBeenCalledTimes(1);
      expect(wrapper.state().text).toBe("Lond");
    });

    it("onFocus sets searchBarState", () => {
      setAndCallMock(null, wrapper, "inputTextFocus");
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(wrapper.state().searchBarState).toBe(true);
    });
  });

  describe("CancelButton interactions", () => {
    it("onPress calls functions", () => {
      setAndCallMock(null, wrapper, "cancelButton");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe("Suggestion interactions", () => {
    it("Suggestions setSearchBarState sets searchBarState to true", () => {
      setAndCallMock(true, wrapper, "suggestionSetState");
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(wrapper.state().searchBarState).toBe(true);
    });
    it("Suggestions setSearchBarState sets searchBarState to false", () => {
      wrapper.setState({ searchBarState: true });
      setAndCallMock(false, wrapper, "suggestionSetState");
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(wrapper.state().searchBarState).toBe(false);
    });
    it("calls clearSuggestions", () => {
      setAndCallMock(null, wrapper, "suggestionClear");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("calls keyboardDismiss", () => {
      setAndCallMock(null, wrapper, "suggestionDismiss");
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
