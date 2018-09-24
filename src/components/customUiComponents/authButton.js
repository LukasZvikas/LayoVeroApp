import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { authStyle } from "../../styles/authStyle";
import { baseStyle } from "../../styles/base";

export const AuthButton = ({ action, buttonName }) => {
  return (
    <View>
      <TouchableOpacity
        style={[authStyle.signinButton, baseStyle.centerItems]}
        onPress={action}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#009092" }}>
          {buttonName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
