import React from "react";
import { TextInput } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";

export const SearchBarInput = ({ setSearchBarState, textState, onChange }) => {
  return (
    <TextInput
      style={{ width: 80 + "%" }}
      placeholder="Try London"
      onFocus={setSearchBarState}
      value={textState}
      onChange={onChange}
    />
  );
};
