import React from "react";
import { Text, View } from "react-native";
import styles from "./styles/itemDetails";

const ItemDetails = ({ name, hours }) => {
  return (
    <View style={styles.itemTextView}>
      <Text style={styles.iconText}>{name}</Text>
      <Text style={styles.iconText}>{hours} hours</Text>
    </View>
  );
};

export default ItemDetails;
