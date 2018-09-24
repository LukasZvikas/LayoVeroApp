import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { LinearGradient, SecureStore } from "expo";
import layoveroLogo from "../../../assets/images/layovero.png";
import { SignUpAction } from "../../../actions/authActions";
import { AuthButtons } from "./authButtons";

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

  render() {
    return (
      <View style={[baseStyle.mainView, baseStyle.centerItems]}>
        <Image
          style={{ width: 90, height: 90, marginBottom: 60 }}
          source={layoveroLogo}
        />
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
        <AuthButtons
          action={() =>
            this.props.SignUpAction(this.state.email, this.state.password)
          }
          nav={() => this.props.navigation.navigate("login")}
          buttonName={"Sign Up"}
        />
      </View>
    );
  }
}

export default connect(null, { SignUpAction })(SignUp);
