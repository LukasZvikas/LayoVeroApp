import React from "react";
import { Text, View } from "react-native";
import { baseStyle } from "../../../../../../styles/base";
import { routeItemsStyle } from "../../../../../../styles/indexDashboard/routeItems";

const ItemDetails = ({ name, hours }) => {
  return (
    <View
      style={[
        routeItemsStyle.itemTextView,
        baseStyle.centerItems,
        baseStyle.secondaryColorBackground
      ]}
    >
      <Text style={routeItemsStyle.iconText}>{name}</Text>
      <Text style={routeItemsStyle.iconText}>({hours} hours)</Text>
    </View>
  );
};

export default ItemDetails;
