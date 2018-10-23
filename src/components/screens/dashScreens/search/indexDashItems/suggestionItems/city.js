import React from "react";
import { Text } from "react-native";
import styles from "./styles/city";

const SuggCity = ({ city }) => {
  return <Text style={styles.itemText}>{city}</Text>;
};

export default SuggCity;
