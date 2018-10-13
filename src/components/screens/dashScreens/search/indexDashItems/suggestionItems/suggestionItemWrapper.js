import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { suggestionStyle } from "../../../../../../styles/indexDashboard/suggestion";
import { baseStyle } from "../../../../../../styles/base";

export default props => {
  return (
    <TouchableOpacity
      key={props.city}
      style={[
        suggestionStyle.suggestionItemView,
        baseStyle.justifyFlexStart,
        baseStyle.flexRow
      ]}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};
