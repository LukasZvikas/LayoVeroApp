import React from "react";
import { View, Image } from "react-native";
import { baseStyle } from "../../../../../../styles/base";
import { routeItemsStyle } from "../../../../../../styles/indexDashboard/routeItems";

const ItemImage = ({ source }) => {
  return (
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
        source={source}
      />
    </View>
  );
};

export default ItemImage;
