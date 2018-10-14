import React from "react";
import { ScrollView, Animated } from "react-native";

export const RouteDetailsScrollView = ({
  deviceHeight,
  animVal,
  scrollableObject
}) => {

	console.log(scrollableObject)
  return (
    <ScrollView
      style={{ height: deviceHeight }}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={10}
      pagingEnabled
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: animVal } } }
      ])}
    >
      {scrollableObject}
    </ScrollView>
  );
};
