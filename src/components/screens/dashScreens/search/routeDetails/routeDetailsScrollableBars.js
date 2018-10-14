import React from "react";
import { View } from "react-native";
import { scrollableBarStyle } from "../../../../../styles/indexDashboard/scrollableBar";
import { baseStyle } from "../../../../../styles/base";

export const RouteDetailsScrollableBars = ({ scrollableBarsObject }) => {
  return (
    <View
      style={[
        scrollableBarStyle.scrollableBarsContainer,
        baseStyle.centerItems
      ]}
    >
      {scrollableBarsObject}
    </View>
  );
};
