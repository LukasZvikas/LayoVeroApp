import React from "react";
import { TextInput, View } from "react-native";
import { shallow } from "enzyme";
import { SearchBar, styles } from "../SearchBar";
import CancelButton from "../cancelButton";
import InputText from "../inputText";
import InputIcon from "../cancelButton";
import Suggestions from "../../suggestionItems/suggestions";
import { baseStyle } from "../../../../../../../styles/base";

const setSearchState = (setTo, wrapper) => {
  mockFn = jest.fn(() => wrapper.setState({ searchBarState: setTo }));
  wrapper.instance().changeSearchState = mockFn;
  wrapper
    .find(Suggestions)
    .props()
    .setSearchBarState();
};

describe("SearchBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it("renders InputIcon component", () => {
    expect(wrapper.find(InputIcon)).toHaveLength(1);
  });

  it("renders InputText component", () => {
    expect(wrapper.find(InputText)).toHaveLength(1);
  });

  it("renders CancelButton component", () => {
    expect(wrapper.find(CancelButton)).toHaveLength(1);
  });

  it("render Suggestions component", () => {
    expect(wrapper.find(Suggestions)).toHaveLength(1);
  });
});

// describe("SearchBar styles", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<SearchBar />);
//   });

//   it("renders main View style", () => {
//     console.log(
//       wrapper
//         .find(View)
//         .at(2)
//         .prop("style")
//     );
//     expect(
//       wrapper
//         .find(View)
//         .at(2)
//         .prop("style")
//     ).toEqual([styles.searchBarView, baseStyle.centerItems, {width: 80+""}]);
//   });
// });
