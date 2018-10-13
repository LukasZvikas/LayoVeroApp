import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { suggestionStyle } from "../../../../../../styles/indexDashboard/suggestion";
import { baseStyle } from "../../../../../../styles/base";

export default props => {
  return (
    <View style={[suggestionStyle.suggestionMainView, baseStyle.justifyCenter]}>
      {props.children}
    </View>
  );
};
