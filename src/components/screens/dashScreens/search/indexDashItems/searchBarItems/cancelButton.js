import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 20,
    alignItems: "center"
  }
});
const CancelButton = ({ searchBarState, onPress }) => {
  return searchBarState ? (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text>Cancel</Text>
    </TouchableOpacity>
  ) : null;
};

export default CancelButton;
