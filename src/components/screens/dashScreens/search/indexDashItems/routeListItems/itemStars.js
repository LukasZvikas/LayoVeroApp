import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "./styles/itemStars";
import { Star } from "../../../../../svg";

const ItemStars = ({ stars }) => {
  const renderStars = numberOfStars => {
    const starArray = [];
    let num = 0;

    while (numberOfStars > 0) {
      --numberOfStars;
      starArray.push(
        <View key={num} style={styles.starView}>
          <Star />
        </View>
      );
      num++;
    }
    return starArray;
  };
  return <View style={styles.starMainView}>{renderStars(stars)}</View>;
};

export default ItemStars;
