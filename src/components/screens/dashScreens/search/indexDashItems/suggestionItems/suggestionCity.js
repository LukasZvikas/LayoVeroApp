import React from "react";
import { Text } from "react-native";
import { suggestionStyle } from "../../../../../../styles/indexDashboard/suggestion";
import { baseStyle } from "../../../../../../styles/base";

export const SuggestionCity = ({ city }) => {
  return (
    <Text style={[suggestionStyle.suggestionText, baseStyle.justifyCenter]}>
      {city}
    </Text>
  );
};
