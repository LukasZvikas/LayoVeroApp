import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export const SearchBarCancel = ({ searchBarState, onPress }) => {
  return searchBarState ? (
    <TouchableOpacity
      style={{
        marginLeft: 20,
        alignItems: "center"
      }}
      onPress={onPress}
    >
      <Text>Cancel</Text>
    </TouchableOpacity>
  ) : null;
};
