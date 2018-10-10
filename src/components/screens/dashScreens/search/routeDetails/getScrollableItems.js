import React from "react";
import { Text, View, Animated, StyleSheet, Dimensions } from "react-native";
import { scrollableBarStyle } from "../../../../../styles/indexDashboard/scrollableBar";
import { baseStyle } from "../../../../../styles/base";

export default (getScrollableProperties = (
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
      <View style={[baseStyle.centerItems, { width: 120 }]}>
        <Text style={{ fontSize: 17 }}>{barNames[i]}</Text>
        <View
          key={`bar${i}`}
          style={[
            scrollableBarStyle.scrollableTrack,
            baseStyle.centerItems,
            {
              width: itemWidth
            }
          ]}
        >
          <Text style={{ fontSize: 17 }}>{barNames[i]}</Text>
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
        </View>
      </View>
    );
    barArray.push(thisBar);
  });

  return { views: viewsArray, bars: barArray };
});
