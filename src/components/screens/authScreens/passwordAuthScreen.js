import React, { Component } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { style } from "../../../styles/authStyle";
import { connect } from "react-redux";
import { SignInAction } from "../../../actions/authActions";

class passwordAuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.state.params.email,
      password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FF3366",
      borderBottomWidth: 0
    },

    headerTintColor: "#fff"
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
              Almost there!
            </Text>
            <Text style={{ fontSize: 18, color: "#fff", textAlign: "center" }}>
              Enter password to sign in with email
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
              placeholder="Password (6+ characters)"
              placeholderTextColor="#fff"
              style={{
                fontSize: 20,
                height: 30,
                width: 280
              }}
              onChangeText={text => {
                this.setState({ password: text });
              }}
            />
            <View
              style={{
                backgroundColor: "#fff",
                height: 1.8,
                width: 280
              }}
            />
            <TouchableOpacity style={style.signinButton}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold" }}
                onPress={() =>
                  this.props.SignInAction(this.state.email, this.state.password)
                }
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default connect(null, {SignInAction})(passwordAuthScreen);
