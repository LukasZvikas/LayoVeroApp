import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

import { Star } from "../../svg";

import { baseStyle } from "../../../styles/base";
import { dashStyle } from "../../../styles/indexAfterLogin";

import RequiredAssets from "../../requiredImages";

export const FlatListRenderer = ({ data }) => {
  const renderStars = numberOfStars => {
    const starArray = [];

    while (numberOfStars > 0) {
      --numberOfStars;
      starArray.push(
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            margin: 4
          }}
        >
          <Star />
        </View>
      );
    }

    return starArray;
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        console.log(item.hours);
        return (
          <View style={[dashStyle.iconItemView, baseStyle.centerItems, baseStyle.mainShadow]}>
            <View style={[dashStyle.iconImageView, baseStyle.justifyFlexEnd, baseStyle.alignCenter]}>
              <Image
                style={[dashStyle.iconImage, baseStyle.justifyFlexEnd]}
                source={RequiredAssets[item.no]}
              />
            </View>
            <View style={[dashStyle.itemTextView, baseStyle.centerItems]}>
              <Text style={dashStyle.iconText}>{item.name}</Text>
              <Text style={dashStyle.iconText}>({item.hours} hours)</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 100 + " %",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5
              }}
            >
              {renderStars(item.stars)}
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.name}
      style={{ marginTop: 20, width: 100 + "%" }}
      contentContainerStyle={dashStyle.contentContainer}
      numColumns={2}
    />
  );
};
