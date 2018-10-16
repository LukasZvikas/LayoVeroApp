import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { baseStyle } from "../../../../../styles/base";
import { routeAboutStyle } from "../../../../../styles/indexDashboard/routeAbout";
import RequiredAssets from "../../../../requiredImages";
import { Button } from "../../../../customUiComponents/button";

export const RouteAbout = ({ image, name, about, action, width }) => {
  return (
    <View style={[baseStyle.mainView, baseStyle.alignCenter, width]}>
      <View style={[baseStyle.alignCenter, routeAboutStyle.mainView]} />

      <View style={[baseStyle.centerItems, routeAboutStyle.imageView]}>
        <Image
          style={routeAboutStyle.imageStyle}
          source={RequiredAssets[image]}
        />
      </View>
      <View style={[baseStyle.centerItems, routeAboutStyle.imageViewTextView]}>
        <Text style={routeAboutStyle.imageViewText}>{name}</Text>
      </View>

      <View style={routeAboutStyle.mainTextView}>
        <Text style={routeAboutStyle.textHeading}>{name}</Text>
        <Text style={routeAboutStyle.text}>{about}</Text>
      </View>
    </View>
  );
};


