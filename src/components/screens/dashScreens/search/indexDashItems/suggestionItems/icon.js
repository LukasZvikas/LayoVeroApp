import React from "react";
import { Text, StyleSheet } from "react-native";
import { Location } from "../../../../../svg";

export const styles = StyleSheet.create({
  textMargin: { marginRight: 10 }
});

const SuggIcon = () => {
  return (
    <Text style={styles.textMargin}>
      <Location />
    </Text>
  );
};

export default SuggIcon;
