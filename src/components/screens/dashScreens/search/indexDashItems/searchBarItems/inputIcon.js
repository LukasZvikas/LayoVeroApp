import React from "react";
import { View, StyleSheet } from "react-native";
import { Search } from "../../../../../svg";

export const styles = StyleSheet.create({
  padding: {
    paddingRight: 5
  }
});

const InputIcon = ({ showSearchIcon }) => {
  return showSearchIcon ? (
    <View style={styles.padding}>
      <Search color="#686868" />
    </View>
  ) : null;
};

export default InputIcon;
