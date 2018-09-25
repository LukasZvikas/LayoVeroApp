import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { authStyle } from "../../styles/authStyle";
import { baseStyle } from "../../styles/base";


export const AuthButton = ({ action, buttonName }) => {
  return (
    <View>
    {/*<LinearGradient style={[authStyle.signinButton, baseStyle.centerItems]} start={[0.1, 0.6 ]}colors={["#02787a", "#78B7B1"]}>*/}
      <TouchableOpacity
        style={[authStyle.signinButton, baseStyle.centerItems]}
        onPress={action}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
          {buttonName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
