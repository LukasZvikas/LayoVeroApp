import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { LinearGradient } from "expo";
import { style } from "../../../styles/authStyle";

class emailAuthScreen extends Component {

  static navigationOptions = ({ navigation, state }) => {
    return {
      headerStyle: {
        backgroundColor: "#FF3366",
        borderBottomWidth: 0
      },

      headerTintColor: "#fff",
      headerRight: (
        <Text
          style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
          onPress={() => navigation.navigate("passwordAuth", {email: navigation.state.params})}
        >
          Next
        </Text>
      )
    };
  };

  onNext(email) {
    if (email != "") {
      return this.state.email;
    }
  }

  render() {
    return (
      <View>
        <LinearGradient
          colors={["#FF3366", "#BA265D"]}
          style={style.authGradient}
        >
          <View
            style={{
              marginBottom: 65,
              width: 200,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 22,
                marginBottom: 10,
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Welcome Back!
            </Text>
            <Text style={{ fontSize: 18, color: "#fff", textAlign: "center" }}>
              Enter your email to sign in to your account
            </Text>
          </View>
          <View
            style={{
              marginTop: 100,
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
              onChangeText={text => {
                
                this.props.navigation.setParams({ email: text });
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
