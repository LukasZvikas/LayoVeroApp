import React, { Component } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { AuthButton } from "../../customUiComponents/authButton";
import layoveroLogo from "../../../assets/images/layovero.png";
import { AuthHeader } from "./authHeader";

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  render() {
    return (
      <View style={authStyle.authMainView}>
        <AuthHeader name={"Reset Password"} />
        <View style={[authStyle.authFormView, authStyle.authCenterItems]}>
          <Text style={authStyle.forgotMainHeading}>Forgot your password?</Text>
          <Text style={authStyle.forgotSecondaryHeading}>
            Don't worry! Just fill in your email and we will help you to reset
            it.
          </Text>
          <View style={[authStyle.inputView, baseStyle.centerItems]}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#009092"
              style={authStyle.fieldInput}
              onChangeText={text => {
                this.setState({ email: text });
              }}
            />
          </View>
          <AuthButton buttonName={"Send"} />
          <View style={[baseStyle.centerItems, baseStyle.flexRow]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signUp")}
            >
              <Text style={authStyle.middleNavText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={authStyle.middleNavCenter} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <Text style={authStyle.middleNavText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ForgotPass;
