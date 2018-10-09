import React from "react";
import { View, Text } from "react-native";
import { authStyle } from "../../../../styles/authStyle";
import { baseStyle } from "../../../../styles/base";

export const MiddleLine = () => {
  return (
    <View
      style={[
        authStyle.middleLineView,
        baseStyle.centerItems,
        baseStyle.flexRow
      ]}
    >
      <View style={authStyle.middleLinePosition} />
      <Text style={authStyle.middleLineMargin}>or</Text>
      <View style={authStyle.middleLinePosition} />
    </View>
  );
};
