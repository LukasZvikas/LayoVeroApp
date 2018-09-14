import React, { Component } from "react";
import { Text, View } from "react-native";
import { style } from "../../../styles/authStyle";

class Saved extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
    return (
      <View style={style.Gradient}>
        <Text>This is Favorites</Text>
      </View>
    );
  }
}

export default Saved;