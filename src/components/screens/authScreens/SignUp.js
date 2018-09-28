import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { SecureStore } from "expo";
import { SignUpAction, clearErrorMessages } from "../../../actions/authActions";
import { AuthButtons } from "./authButtons";
import { AuthHeader } from "./authHeader";

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
          action={() =>
            this.prop.SignUpAction(this.state.email, this.state.password)
          }
          nav={() => this.props.navigation.navigate("login")}
          buttonName={"Sign Up"}
          disabled={false}
        />
      );
    }
    return (
      <AuthButtons
        disabled={true}
        opacity={0.5}
        buttonName={"Sign Up"}
        nav={() => this.props.navigation.navigate("login")}
      />
    );
  };

  render() {
    const { width, height } = Dimensions.get("window");
    const { error, clearErrorMessages, SignUpAction, navigation } = this.props;
    return (
      <View style={authStyle.authMainView}>
        <AuthHeader name={"Sign Up"} />

        <View style={[authStyle.authFormView, authStyle.authCenterItems]}>
          //////////SIGNIN FIELDS
          <View>
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
          {this.buttonCheck()}
        </View>
      </View>
    );
  }
}

export default connect(null, { SignUpAction, clearErrorMessages })(SignUp);
