import React from "react";
import { Animated, View } from "react-native";
import { scrollableBarStyle } from "../../../../../../styles/indexDashboard/scrollableBar";
import { baseStyle } from "../../../../../../styles/base";

export const AnimView = ({ scrollBarVal, itemWidth }) => {
  return (
    <Animated.View
      style={[
        scrollableBarStyle.scrollableBar,
        {
          borderWidth: 1,
          borderColor: "#59c0c1",
          width: itemWidth,
          transform: [{ translateX: scrollBarVal }]
        }
      ]}
    />
  );
};
