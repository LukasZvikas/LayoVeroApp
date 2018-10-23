import React from "react";
import { TextInput, View } from "react-native";
import { shallow } from "enzyme";
import SearchBar from "../searchBar";
import SearchBarView from "../SearchBarView";
import CancelButton from "../cancelButton";
import InputText from "../inputText";
import InputIcon from "../cancelButton";
import Suggestions from "../../suggestionItems/suggestions";
import { baseStyle } from "../../../../../../../styles/base";

// const setSearchState = (setTo, wrapper) => {
//   mockFn = jest.fn(() => wrapper.setState({ searchBarState: setTo }));
//   wrapper.instance().changeSearchState = mockFn;
//   wrapper
//     .find(Suggestions)
//     .props()
//     .setSearchBarState();
// };

describe("SearchBar", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      searchBarState: false,
      showSearchIcon: true,
      text: "",
      actions: jest.fn(),
      suggestions: []
    };
    wrapper = shallow(<SearchBar />);
  });

  describe("SearchBarView renders components", () => {
    let searchBarWrapper;
    beforeEach(() => {
      searchBarWrapper = shallow(
        wrapper.find(SearchBarView).prop("children")(
          false,
          true,
          "",
          jest.fn(),
          ["London"]
        )
      );
    });

    it("renders 2 Views inside a main View", () => {
      console.log(searchBarWrapper.find(View).length);
      expect(searchBarWrapper.find(View)).toHaveLength(2);
    });

    it("renders InputIcon", () => {
      expect(searchBarWrapper.find(InputIcon)).toHaveLength(1);
    });

    it("renders InputText", () => {
      expect(searchBarWrapper.find(InputText)).toHaveLength(1);
    });

    it("renders CancelButton", () => {
      expect(searchBarWrapper.find(CancelButton)).toHaveLength(1);
    });

    it("render Suggestions", () => {
      expect(searchBarWrapper.find(Suggestions)).toHaveLength(1);
    });
  });
});
