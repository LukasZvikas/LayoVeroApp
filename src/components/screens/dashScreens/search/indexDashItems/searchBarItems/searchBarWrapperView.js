import React from "react";
import { View } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";

export default props => {
  return (
    <View
      style={[
        searchBarStyle.searchBarWrappper,
        baseStyle.flexRow,
        baseStyle.centerItems
      ]}
    >
      {props.children}
    </View>
  );
};
