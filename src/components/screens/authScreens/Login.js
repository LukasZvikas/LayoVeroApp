import React, { Component } from "react";
import { View, Text, TextInput} from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { connect } from "react-redux";
import {
  SignInAction,
  showEmailError,
  clearMessages
} from "../../../actions/authActions";
import { AuthHeader } from "./authHeader";
import loginCheck from "../../../utilities/loginCheck";
import { ButtonCheck, ErrorCheck } from "./authViewComponents";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    loginCheck();
  }

  render() {
    const {
      error,
      clearMessages,
      SignInAction,
      showEmailError,
      navigation
    } = this.props;
    return (
      <View style={authStyle.authMainView}>
        <AuthHeader name={"Sign In"} />
        <View style={[authStyle.authFormView, authStyle.authCenterItems]}>
          <ErrorCheck error={error} />
          //LOGIN FIELDS
          <View style={[authStyle.inputView, baseStyle.centerItems]}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#009092"
              style={authStyle.fieldInput}
              onChangeText={text => {
                this.setState({ email: text });
                if (error) {
                  clearMessages();
                }
              }}
            />
          </View>
          <View style={[authStyle.inputView, baseStyle.centerItems]}>
            <TextInput
              placeholder="Password (6+ characters)"
              placeholderTextColor="#009092"
              style={authStyle.fieldInput}
              onChangeText={text => {
                this.setState({ password: text });
                if (error) {
                  clearMessages();
                }
              }}
            />
          </View>
          <ButtonCheck
            authAction={() =>
              SignInAction(this.state.email, this.state.password)
            }
            emailErrorAction={() => showEmailError()}
            navigateTo={() => navigation.navigate("signUp")}
            email={this.state.email}
            password={this.state.password}
          />
        </View>
        //LOGIN FIELDS END
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.authErrors.errorMessage
  };
};

export default connect(mapStateToProps, {
  SignInAction,
  showEmailError,
  clearMessages
})(Login);
