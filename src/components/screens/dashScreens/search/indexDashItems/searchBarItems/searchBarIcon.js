import React from "react";
import { View, StyleSheet } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";
import { Search } from "../../../../../svg";

export const styles = StyleSheet.create({
  padding: {
    paddingRight: 5
  }
});

const SearchBarIcon = ({ showSearchIcon }) => {
  return showSearchIcon ? (
    <View style={styles.padding}>
      <Search color="#686868" />
    </View>
  ) : null;
};

export default SearchBarIcon;
