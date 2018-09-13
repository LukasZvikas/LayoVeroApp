import React, { Component } from "react";
import { Text, View } from "react-native";

class IndexDash extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
    return <Text>This is Dashboard</Text>;
  }
}

export default IndexDash;
