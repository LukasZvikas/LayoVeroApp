import React from "react";
import { View, Text, Dimensions } from "react-native";
import { authHeader } from "../../../styles/authHeaderStyle";
import { LogoWhite } from "../../svg";

export const AuthHeader = ({ name }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={authHeader(width, height).mainView}>
      <View style={authHeader(width, height).logoAndNameView}>
        <View style={{ marginTop: 60 }}>
          <LogoWhite />
        </View>

        <Text style={authHeader(width, height).nameText}>{name}</Text>
      </View>

      <View style={authHeader(width, height).extendedHeaderView} />
    </View>
  );
};
