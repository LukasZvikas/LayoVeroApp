import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { SecureStore } from "expo";
import { connect } from "react-redux";
import { SignInAction, clearErrorMessages } from "../../../actions/authActions";
import { AuthButtons } from "./authButtons";
import { AuthHeader } from "./authHeader";

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

  errorCheck = () => {
    if (this.props.error)
      return (
        <Text style={{ color: "red", borderWidth: 1 }}>{this.props.error}</Text>
      );
    if (this.props.error === null) return null;

    return null;
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
          <AuthButtons
            action={() => {
              SignInAction(this.state.email, this.state.password);
            }}
            nav={() => navigation.navigate("signUp")}
            buttonName={"Sign In"}
          />
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

export default connect(mapStateToProps, { SignInAction, clearErrorMessages })(
  Login
);
