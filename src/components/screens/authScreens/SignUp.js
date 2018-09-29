import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Dimensions
} from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import {
  SignUpAction,
  showEmailError,
  clearMessages
} from "../../../actions/authActions";
import { AuthHeader } from "./authHeader";
import { ButtonCheck, ErrorCheck } from "./authViewComponents";
import loginCheck from "../../../utilities/loginCheck";

class SignUp extends Component {
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
    const { width, height } = Dimensions.get("window");
    const {
      error,
      clearMessages,
      SignUpAction,
      showEmailError,
      navigation
    } = this.props;
    return (
      <View style={authStyle.authMainView}>
        <AuthHeader name={"Sign Up"} />
        <View style={[authStyle.authFormView, authStyle.authCenterItems]}>
          <ErrorCheck error={error} />
          //SIGNIN FIELDS
          <View style={[authStyle.inputView, baseStyle.centerItems]}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#009092"
              style={authStyle.fieldInput}
              onChangeText={text => {
                this.setState({ email: text });
              }}
            />
          </View>
          <View style={authStyle.inputView}>
            <TextInput
              placeholder="Password (6+ characters)"
              placeholderTextColor="#009092"
              style={authStyle.fieldInput}
              onChangeText={text => {
                this.setState({ password: text });
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Repeat password"
              placeholderTextColor="#009092"
              style={[authStyle.fieldInput, authStyle.passRepeatMargin]}
              onChangeText={text => {
                this.setState({ password: text });
              }}
            />
          </View>
          <ButtonCheck
            authAction={() =>
              SignUpAction(this.state.email, this.state.password)
            }
            emailErrorAction={() => showEmailError()}
            navigateTo={() => navigation.navigate("login")}
            email={this.state.email}
            password={this.state.password}
          />
        </View>
        //SIGNIN FIELD END
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
  SignUpAction,
  showEmailError,
  clearMessages
})(SignUp);
