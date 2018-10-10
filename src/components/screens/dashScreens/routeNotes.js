import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import RequiredAssets from "../../requiredImages";
import { Button } from "../../customUiComponents/button";

export const RouteNotes = ({ image, name, about, action, width }) => {
  console.log(name, image, width)
  return (
    <View style={[baseStyle.mainView,baseStyle.centerItems, width]}>
      
      <Text>Route Notes </Text>
      <Button action={action} buttonName={"Back"} />
    </View>
  );
};
