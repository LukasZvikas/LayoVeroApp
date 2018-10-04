import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Location } from "../../svg";

export const Suggestions = ({ suggestions }) => {
  const renderCityNames = cities => {
    return cities.map(city => {
      return (
        <View
          key={city}
          style={[
            dashStyle.suggestionItemView,
            baseStyle.justifyFlexStart,
            baseStyle.flexRow
          ]}
        >
          <Text style={{ marginRight: 10 }}>
            <Location />
          </Text>
          <Text style={[dashStyle.suggestionText, baseStyle.justifyCenter]}>
            {city}
          </Text>
        </View>
      );
    });
  };

  return suggestions ? (
    <View style={[dashStyle.suggestionMainView, baseStyle.justifyCenter]}>
      {renderCityNames(suggestions)}
    </View>
  ) : null;
};
