import React from "react";
import { Text, View, Animated, StyleSheet, Dimensions } from "react-native";
import { BarWrapper } from "./barWrapper";

export default (ScrollItemsRenderer = (
  list,
  itemWidth,
  animVal,
  deviceWidth
) => {
  const barNames = ["About", "Notes", "Map"];
  const viewsArray = [];
  const barArray = [];

  list.forEach((listItem, i) => {
    const item = listItem;
    viewsArray.push(item);

    const scrollBarVal = animVal.interpolate({
      inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
      outputRange: [-itemWidth, itemWidth],
      extrapolate: "clamp"
    });

    const thisBar = (
      <BarWrapper
        key={`bar${i}`}
        barname={barNames[i]}
        itemWidth={itemWidth}
        scrollBarVal={scrollBarVal}
      />
    );
    barArray.push(thisBar);
  });

  return { views: viewsArray, bars: barArray };
});
