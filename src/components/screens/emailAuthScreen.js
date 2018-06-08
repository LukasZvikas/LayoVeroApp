import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { LinearGradient } from "expo";
import { style } from "../../styles/authStyle";

class emailAuthScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FF3366",
      borderBottomWidth: 0
    },

    headerTintColor: "#fff",
    headerRight: <Button title="Next" color="#fff" />
  };
  render() {
    return (
      <View>
        <LinearGradient
          colors={["#FF3366", "#BA265D"]}
          style={style.authGradient}
        >
          <View
            style={{
              marginBottom: 120,
              width: 170,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Welcome Back!
            </Text>
            <Text style={{ fontSize: 15, color: "#fff", textAlign: "center" }}>
              Enter your email to sign in to your account
            </Text>
          </View>
          <View
            style={{
              marginBottom: 380,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#fff"
              style={{
                fontSize: 20,

                height: 30,
                width: 280
              }}
            />
            <View
              style={{
                backgroundColor: "#fff",
                height: 1.8,
                width: 280
              }}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default emailAuthScreen;
