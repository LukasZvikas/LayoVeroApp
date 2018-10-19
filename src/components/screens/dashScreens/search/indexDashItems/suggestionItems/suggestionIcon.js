import React from "react";
import { Text } from "react-native";
import { Location } from "../../../../../svg";

const SuggestionIcon = () => {
  return (
    <Text style={{ marginRight: 10 }}>
      <Location />
    </Text>
  );
};

export default SuggestionIcon;
