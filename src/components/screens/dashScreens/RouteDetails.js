import React, { Component } from "react";
import { Text, View } from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";

class RouteDetails extends Component {
  render() {
    return <View style={[baseStyle.centerItems, baseStyle.mainView]}><Text>Route Details</Text></View>;
  }
}

export default RouteDetails;
