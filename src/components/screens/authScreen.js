import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "../../styles/authStyle";
import { LinearGradient } from "expo";

class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <LinearGradient
          colors={["#FF3366", "#BA265D"]}
          style={style.authGradient}
        >
          <TouchableOpacity style={style.buttonStyle} onPress={ () => this.props.navigation.navigate("emailAuth")}>
            <Text> Sign in with Email </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              marginBottom: 30,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                height: 3,
                width: 100
              }}
            />
            <Text style={{ marginLeft: 15, marginRight: 15, color: "#fff" }}>
              or
            </Text>
            <View
              style={{
                backgroundColor: "#fff",
                height: 3,
                width: 100
              }}
            />
          </View>
          <TouchableOpacity style={style.buttonStyle} onPress={this.onPress}>
            <Text> Sign in with Facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonStyle} onPress={this.onPress}>
            <Text> Sign in with Google </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

export default AuthScreen;
