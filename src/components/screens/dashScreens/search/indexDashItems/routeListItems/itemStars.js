import React from "react";
import { View, StyleSheet } from "react-native";
import { baseStyle } from "../../../../../../styles/base";
import { routeItemsStyle } from "../../../../../../styles/indexDashboard/routeItems";
import { Star } from "../../../../../svg";

const ItemStars = ({ stars }) => {
  const renderStars = numberOfStars => {
    const starArray = [];
    let num = 0;

    while (numberOfStars > 0) {
      --numberOfStars;
      starArray.push(
        <View key={num} style={routeItemsStyle.starView}>
          <Star />
        </View>
      );
      num++;
    }
    return starArray;
  };
  return (
    <View style={[routeItemsStyle.starMainView, baseStyle.centerItems]}>
      {renderStars(stars)}
    </View>
  );
};

export default ItemStars;
