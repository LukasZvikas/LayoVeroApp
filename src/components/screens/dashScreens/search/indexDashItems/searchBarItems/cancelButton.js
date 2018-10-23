import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles/cancelButton";

const CancelButton = ({ searchBarState, onPress }) => {
  return searchBarState ? (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text>Cancel</Text>
    </TouchableOpacity>
  ) : null;
};

export default CancelButton;
