import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { baseStyle } from "../../../../../styles/base";
import RequiredAssets from "../../../../requiredImages";
import { Button } from "../../../../customUiComponents/button";

export const RouteMap = ({ image, name, about, action, width }) => {
	console.log(name, image)
  return (
    <View style={[baseStyle.mainView, baseStyle.centerItems, width]}>
      <Text>Route Map</Text>
      <Button action={action} buttonName={"Back"} />
    </View>
  );
};
