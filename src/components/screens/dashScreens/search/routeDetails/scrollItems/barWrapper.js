import React from "react";
import { View, Text, Animated } from "react-native";
import { scrollableBarStyle } from "../../../../../../styles/indexDashboard/scrollableBar";
import { baseStyle } from "../../../../../../styles/base";
import { AnimView } from "./animView";
import { BarText } from "./barText";

export const BarWrapper = ({ barname, itemWidth, scrollBarVal, key }) => {
  return (
    <View style={[baseStyle.centerItems, { width: 120 }]}>
      <BarText barname={barname} />
      <View
        key={key}
        style={[
          scrollableBarStyle.scrollableTrack,
          baseStyle.centerItems,
          {
            width: itemWidth
          }
        ]}
      >
        <BarText barname={barname} />
        <AnimView itemWidth={itemWidth} scrollBarVal={scrollBarVal} />
      </View>
    </View>
  );
};
