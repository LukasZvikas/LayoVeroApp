import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { SecureStore } from "expo";
import { connect } from "react-redux";
import {
  SignInAction,
  showEmailError,
  clearErrorMessages
} from "../../../actions/authActions";
import { AuthButtons } from "./authButtons";
import { AuthHeader } from "./authHeader";
import emailValidation from "../../../utilities/emailValidation";

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

  isSignedIn = async () => {
    await SecureStore.getItemAsync("jwt").then(token => {
      if (token != null) this.props.navigation.navigate("afterAuth");
    });
  };

  async componentDidMount() {
    this.isSignedIn();
  }

  buttonCheck = () => {
    if ((this.state.email && this.state.password) !== "") {
      return (
        <AuthButtons
          action={() => {
            if (emailValidation(this.state.email)) {
              console.log("here!")
              this.props.SignInAction(this.state.email, this.state.password);
            } else {
              console.log("bad!")
              this.props.showEmailError();
            }
          }}
          nav={() => this.props.navigation.navigate("signUp")}
          buttonName={"Sign In"}
          middleNavLinkName={"Sign Up"}
          disabled={false}
          opacity={1}
        />
      );
    }
    return (
      <AuthButtons
        disabled={true}
        opacity={0.5}
        buttonName={"Sign In"}
        middleNavLinkName={"Sign Up"}
        nav={() => this.props.navigation.navigate("signUp")}
      />
    );
  };

  errorCheck = () => {
    if (this.props.error)
      return (
        <Text style={{ color: "red", fontSize: 15 }}>{this.props.error}</Text>
      );
    if (this.props.error === null) return <Text> </Text>;

    return <Text> </Text>;
  };

  render() {
    const { error, clearErrorMessages, SignInAction, navigation } = this.props;
    return (
      <View style={authStyle.authMainView}>
        <AuthHeader name={"Sign In"} />
        <View style={[authStyle.authFormView, authStyle.authCenterItems]}>
          {this.errorCheck()}
          <View style={[authStyle.inputView, baseStyle.centerItems]}>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#009092"
              style={authStyle.fieldInput}
              onChangeText={text => {
                this.setState({ email: text });
                if (error) {
                  clearErrorMessages();
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
                  clearErrorMessages();
                }
              }}
            />
          </View>
          {this.buttonCheck()}
        </View>
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
  clearErrorMessages
})(Login);
