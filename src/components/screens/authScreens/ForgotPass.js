import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import {
  showSuccessMessage,
  clearMessages
} from "../../../actions/authActions";
import { Button } from "../../customUiComponents/button";
import layoveroLogo from "../../../assets/images/layovero.png";
import { AuthHeader } from "./authViewComponents/authHeader";
import { MiddleNav } from "./authViewComponents/middleNav";

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  isSuccess = () => {
    if (this.props.successMessage)
      return (
        <Text
          style={{
            color: "#009092",
            fontSize: 15,
            marginRight: 30,
            marginLeft: 30,
            textAlign: "center"
          }}
        >
          {this.props.successMessage}
        </Text>
      );
    if (this.props.error) {
      return (
        <Text style={{ color: "red", fontSize: 15 }}>{this.props.error}</Text>
      );
    }
    if ((this.props.error || this.props.successMessage) === null)
      return <Text> </Text>;

    return <Text> </Text>;
  };

  render() {
    const {
      showSuccessMessage,
      clearMessages,
      error,
      successMessage,
      navigation
    } = this.props;
    return (
      <View style={authStyle.authMainView}>
        <AuthHeader name={"Reset Password"} />
        <View style={[authStyle.authFormView, authStyle.authCenterItems]}>
          {this.isSuccess()}
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
                if (error || successMessage) {
                  clearMessages();
                }
              }}
            />
          </View>
          <Button
            action={() => {
              showSuccessMessage(this.state.email);
            }}
            isDisabled={false}
            buttonName={"Send"}
          />
          <MiddleNav
            leftTitle={"Sign Up"}
            rightTitle={"Sign In"}
            leftNav={() => {
              navigation.navigate("signUp");
            }}
            rightNav={() => {
              navigation.navigate("login");
            }}
            width={54}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    successMessage: state.authErrors.successMessage,
    error: state.authErrors.errorMessage
  };
};

export default connect(mapStateToProps, { showSuccessMessage, clearMessages })(
  ForgotPass
);
