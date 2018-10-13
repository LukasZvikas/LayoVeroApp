import React from "react";
import { View } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";
import { Search } from "../../../../../svg";

export const SearchBarIcon = ({ showSearchIcon }) => {
  return showSearchIcon ? (
    <View style={{ paddingRight: 5 }}>
      <Search color="#686868" />
    </View>
  ) : null;
};
