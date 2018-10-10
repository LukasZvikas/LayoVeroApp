import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";

import { Star } from "../../../../svg";
import { baseStyle } from "../../../../../styles/base";
import { routeItemsStyle } from "../../../../../styles/indexDashboard/routeItems";
import RequiredAssets from "../../../../requiredImages";
import NavigationService from "../../../../../../NavigationService";

export const FlatListRenderer = ({ data }) => {
  const renderStars = numberOfStars => {
    const starArray = [];
    let num = 0;

    while (numberOfStars > 0) {
      --numberOfStars;
      starArray.push(
        <View
          key={num}
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            margin: 4
          }}
        >
          <Star />
        </View>
      );
      num++;
    }

    return starArray;
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            key={item.name}
            onPress={() => {
              NavigationService.navigate("routeDetails", {
                name: item.name,
                about: item.about,
                image: item.no
              });
            }}
            style={[
              routeItemsStyle.iconItemView,
              baseStyle.centerItems,
              baseStyle.mainShadow
            ]}
          >
            <View
              style={[
                routeItemsStyle.iconImageView,
                baseStyle.justifyFlexEnd,
                baseStyle.alignCenter,
                baseStyle.mainColorBackground
              ]}
            >
              <Image
                style={[routeItemsStyle.iconImage, baseStyle.justifyFlexEnd]}
                source={RequiredAssets[item.no]}
              />
            </View>
            <View
              style={[
                routeItemsStyle.itemTextView,
                baseStyle.centerItems,
                baseStyle.secondaryColorBackground
              ]}
            >
              <Text style={routeItemsStyle.iconText}>{item.name}</Text>
              <Text style={routeItemsStyle.iconText}>({item.hours} hours)</Text>
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
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.name}
      style={{ marginTop: 20, width: 100 + "%" }}
      contentContainerStyle={routeItemsStyle.contentContainer}
      numColumns={2}
    />
  );
};
