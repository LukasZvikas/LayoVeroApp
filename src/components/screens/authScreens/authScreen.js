import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "../../../styles/authStyle";
import { LinearGradient } from "expo";

class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={style.Gradient}>
        {/* /// <LinearGradient
       ///  colors={["#FF3366", "#BA265D"]}
       ///  style={style.authGradient}
       ///*/}
        <TouchableOpacity
          style={style.buttonStyle}
          onPress={() => this.props.navigation.navigate("emailAuth")}
        >
          <Text> Sign in with Email </Text>
        </TouchableOpacity>
        <View style={style.MainScreenMiddle}>
          <View
            style={{
              backgroundColor: "#000",
              height: 3,
              width: 100
            }}
          />
          <Text style={style.MainScreenMiddleMargin}>or</Text>
          <View style={style.MainScreenMiddlePosition} />
        </View>
        <TouchableOpacity style={style.buttonStyle} onPress={this.onPress}>
          <Text> Sign in with Facebook </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonStyle} onPress={this.onPress}>
          <Text> Sign in with Google </Text>
        </TouchableOpacity>
        {/* //</LinearGradient>*/}
      </View>
    );
  }
}

export default AuthScreen;
