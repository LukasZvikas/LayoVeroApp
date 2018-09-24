import React, { Component } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { AuthButton } from "../../customUiComponents/authButton";
import layoveroLogo from "../../../assets/images/layovero.png";

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  render() {
    return (
      <View style={[baseStyle.mainView, baseStyle.centerItems]}>
        <Image
          style={{ width: 90, height: 90, marginBottom: 60 }}
          source={layoveroLogo}
        />
        <Text>Forgot your password? </Text>
        <Text style={{ marginRight: 50, marginLeft: 50, textAlign: "center" }}>
          Don't worry! Just fill in your email and we will help you to reset it.
        </Text>
        <View style={[authStyle.inputView, baseStyle.centerItems]}>
          <TextInput
            placeholder="Password (6+ characters)"
            placeholderTextColor="#009092"
            style={authStyle.fieldInput}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
        </View>
        <AuthButton buttonName={"Send"} />
      </View>
    );
  }
}

export default ForgotPass;
