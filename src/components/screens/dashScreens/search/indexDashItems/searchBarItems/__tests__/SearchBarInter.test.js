import React from "react";
import { TextInput, View } from "react-native";
import { shallow } from "enzyme";
import SearchBar from "../searchBar";
import SearchBarView from "../SearchBarView";
import CancelButton from "../cancelButton";
import InputText from "../inputText";
import InputIcon from "../cancelButton";
import Suggestions from "../../suggestionItems/suggestions";

const beforeEachHelper = (wrapper, actions, searchBarState) => {
  return shallow(
    wrapper.find(SearchBarView).prop("children")(
      searchBarState,
      true,
      "",
      actions,
      ["London"]
    )
  );
};

describe("SearchBar interactions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });
  describe("SearchBarInput interactions", () => {
    let searchBarWrapper;
    let setSearchState;
    beforeEach(() => {
      actions = {
        setTextState: jest.fn(() => {
          searchBarWrapper.setState({ text: "Lond" });
        }),
        handleInputChange: jest.fn(),
        setSearchState: jest.fn(() => {
          searchBarWrapper.setState({ searchBarState: true });
        })
      };
      searchBarWrapper = beforeEachHelper(wrapper, actions, false);
    });

    it("onChange sets text state and calls handleInputChange", () => {
      searchBarWrapper
        .find(InputText)
        .props()
        .onChange();

      expect(actions.setTextState).toHaveBeenCalledTimes(1);
      expect(actions.handleInputChange).toHaveBeenCalledTimes(1);
      expect(searchBarWrapper.state().text).toBe("Lond");
    });

    it("onFocus sets searchBarState", () => {
      searchBarWrapper
        .find(InputText)
        .props()
        .onFocus();

      expect(actions.setSearchState).toHaveBeenCalledTimes(1);
      expect(searchBarWrapper.state().searchBarState).toBe(true);
    });
  });

  describe("CancelButton interactions", () => {
    let searchBarWrapper;
    let setSearchState;
    beforeEach(() => {
      actions = {
        keyboardDismiss: jest.fn(),
        clearSuggestions: jest.fn(),
        clearTextState: jest.fn(() => {
          searchBarWrapper.setState({ text: "" });
        }),
        getCity: jest.fn(),
        setSearchState: jest.fn()
      };
      searchBarWrapper = beforeEachHelper(wrapper, actions, false);
    });

    it("onPress calls functions", () => {
      searchBarWrapper
        .find(CancelButton)
        .props()
        .onPress();
      expect(actions.keyboardDismiss).toHaveBeenCalledTimes(1);
      expect(actions.clearSuggestions).toHaveBeenCalledTimes(1);
      expect(actions.clearTextState).toHaveBeenCalledTimes(1);
      expect(actions.getCity).toHaveBeenCalledTimes(1);
      expect(actions.setSearchState).toHaveBeenCalledTimes(1);
    });
  });

  describe("Suggestion interactions when searchBarState true", () => {
    let searchBarWrapper;
    let setSearchState;
    beforeEach(() => {
      actions = {
        keyboardDismiss: jest.fn(),
        clearSuggestions: jest.fn(),
        changeSearchState: jest.fn(() => {
          searchBarWrapper.setState({ searchBarState: true });
        })
      };
      searchBarWrapper = beforeEachHelper(wrapper, actions, false);
    });

    it("Suggestions setSearchBarState sets searchBarState to true", () => {
      searchBarWrapper
        .find(Suggestions)
        .props()
        .setSearchBarState();
      expect(actions.changeSearchState).toHaveBeenCalledTimes(1);
      expect(searchBarWrapper.state().searchBarState).toBe(true);
    });

    it("calls clearSuggestions", () => {
      searchBarWrapper
        .find(Suggestions)
        .props()
        .clearSuggestions();
      expect(actions.clearSuggestions).toHaveBeenCalledTimes(1);
    });

    it("calls keyboardDismiss", () => {
      searchBarWrapper
        .find(Suggestions)
        .props()
        .dismissKeyboard();
      expect(actions.keyboardDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe("Suggestion interactions when searchBarState true", () => {
    beforeEach(() => {
      actions = {
        keyboardDismiss: jest.fn(),
        clearSuggestions: jest.fn(),
        changeSearchState: jest.fn(() => {
          searchBarWrapper.setState({ searchBarState: false });
        })
      };
      searchBarWrapper = beforeEachHelper(wrapper, actions, true);
    });
    it("Suggestions setSearchBarState sets searchBarState to false", () => {
      searchBarWrapper
        .find(Suggestions)
        .props()
        .setSearchBarState();
      expect(actions.changeSearchState).toHaveBeenCalledTimes(1);
      expect(searchBarWrapper.state().searchBarState).toBe(false);
    });
  });
});
