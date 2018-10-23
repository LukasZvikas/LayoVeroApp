import React from "react";
import { View, Image } from "react-native";
import styles from "./styles/itemImage";

const ItemImage = ({ source }) => {
  return (
    <View style={styles.iconImageView}>
      <Image style={styles.iconImage} source={source} />
    </View>
  );
};

export default ItemImage;
