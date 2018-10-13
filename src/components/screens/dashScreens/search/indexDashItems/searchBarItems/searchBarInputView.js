import React from "react";
import { View } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";

export default props => {
  return (
    <View
      style={[
        searchBarStyle.searchBarView,
        baseStyle.centerItems,
        props.searchBarState ? { width: 70 + "%" } : { width: 80 + "%" }
      ]}
    >
      {props.children}
    </View>
  );
};
