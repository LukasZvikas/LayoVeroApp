import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";

export const styles = StyleSheet.create({
  inputWidth: { width: 80 + "%" }
});

const SearchBarInput = ({ onFocus, textState, onChange }) => {
  return (
    <TextInput
      style={styles.inputWidth}
      placeholder="Try London"
      onFocus={onFocus}
      value={textState}
      onChange={onChange}
    />
  );
};

export default SearchBarInput;
