import React, { Component } from "react";
import { Text, View } from "react-native";
import { style } from "../../../styles/authStyle";

class IndexDash extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
    return (
      <View style={style.Gradient}>
        <Text>This is Dashboard</Text>
      </View>
    );
  }
}

export default IndexDash;
