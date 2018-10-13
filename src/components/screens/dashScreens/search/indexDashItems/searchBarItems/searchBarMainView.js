import React from "react";
import { View } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";

export default props => {
  return (
    <View
      style={
        props.searchBarState
          ? [
              searchBarStyle.focusedSearchBarView,
              baseStyle.justifyFlexStart,
              baseStyle.alignCenter
            ]
          : {}
      }
    >
      {props.children}
    </View>
  );
};
