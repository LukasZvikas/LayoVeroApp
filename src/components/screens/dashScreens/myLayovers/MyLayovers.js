import React, { Component } from "react";
import { Text, View } from "react-native";
import { style } from "../../../../styles/authStyle";

class MyLayovers extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
    return (
      <View style={style.Gradient}>
        <Text>This is MyLayovers</Text>
      </View>
    );
  }
}

export default MyLayovers;