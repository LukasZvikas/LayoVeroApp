import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { LinearGradient, SecureStore } from "expo";
import layoveroLogo from "../../../assets/images/layovero.png";
import { connect } from "react-redux";
import { SignInAction } from "../../../actions/authActions";
import AuthButtons from "./AuthButtons";

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

  render() {
    return (
      <View style={baseStyle.mainView}>
        <Image
          style={{ width: 90, height: 90, marginBottom: 60 }}
          source={layoveroLogo}
        />
        //////////SIGNIN FIELDS
        <View>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#009092"
            style={style.fieldInput}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          {/*<View style={style.FieldBottom} />*/}
        </View>
        <View style={style.inputView}>
          <TextInput
            placeholder="Password (6+ characters)"
            placeholderTextColor="#009092"
            style={style.fieldInput}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
        </View>
        <View>
          <TextInput
            placeholder="Repeat password"
            placeholderTextColor="#009092"
            style={[style.fieldInput, style.passRepeatMargin]}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
        </View>
        <AuthButtons
          action={() => {
            this.props.SignInAction(this.state.email, this.state.password);
          }}
          nav={() => this.props.navigation.navigate("login")}
        />
      </View>
    );
  }
}

export default SignUp;
