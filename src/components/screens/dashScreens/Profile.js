import React, { Component } from "react";
import { Text, View } from "react-native";
import { style } from "../../../styles/authStyle";

class Profile extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
    return (
      <View style={style.Gradient}>
        <Text>This is Profile</Text>
      </View>
    );
  }
}

export default Profile;