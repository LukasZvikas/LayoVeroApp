import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { authStyle } from "../../../../styles/authStyle";
import { baseStyle } from "../../../../styles/base";
import NavigationService from "../../../../../NavigationService";

export const MiddleNav = ({ leftTitle, rightTitle, leftNav, rightNav, width }) => {
  return (
    <View style={[baseStyle.centerItems, baseStyle.flexRow]}>
      <TouchableOpacity
        onPress={leftNav}
        style={{ width: width }}
      >
        <Text style={[authStyle.middleNavText, baseStyle.tertiaryColorText]}>
          {leftTitle}
        </Text>
      </TouchableOpacity>
      <View
        style={[authStyle.middleNavCenter, baseStyle.tertiaryColorBackground]}
      />
      <TouchableOpacity onPress={rightNav} style={{ width: width }}>
        <Text style={[authStyle.middleNavText, baseStyle.tertiaryColorText]}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
