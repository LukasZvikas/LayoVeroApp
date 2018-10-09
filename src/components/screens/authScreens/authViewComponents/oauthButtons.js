import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { authStyle } from "../../../../styles/authStyle";
import { baseStyle } from "../../../../styles/base";
import { Facebook, Google } from "../../../svg";

export const GoogleButton = () => {
  return (
    <TouchableOpacity
      style={[authStyle.oauthButtonMainView, authStyle.googleButtonColor]}
      onPress={this.onPress}
    >
      <View style={[authStyle.buttonView, baseStyle.centerItems]}>
        <Google />
      </View>
    </TouchableOpacity>
  );
};

export const FacebookButton = () => {
  return (
    <TouchableOpacity
      style={[authStyle.oauthButtonMainView, authStyle.facebookButtonColor]}
      onPress={this.onPress}
    >
      <View style={[authStyle.buttonView, baseStyle.centerItems]}>
        <Facebook />
      </View>
    </TouchableOpacity>
  );
};
