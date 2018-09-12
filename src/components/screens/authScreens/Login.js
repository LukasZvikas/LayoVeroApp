import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from "../../../styles/authStyle";
import { LinearGradient } from "expo";
import layoveroLogo from "../../../assets/images/layovero.png";
import { connect } from "react-redux";
import { SignInAction } from "../../../actions/authActions";
import { Facebook, Google } from "../../svg";

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

  render() {
    return (
      <View style={style.Gradient}>
        <Image
          style={{ width: 90, height: 90, marginBottom: 60 }}
          source={layoveroLogo}
        />
        //////////SIGNIN FIELDS
        <View style={(style.ScreenTextMainAlign, { padding: 20 })}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#000"
            style={style.FieldPlaceholder}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          <View style={style.FieldBottom} />
        </View>
        <View style={style.ScreenTextMainAlign}>
          <TextInput
            placeholder="Password (6+ characters)"
            placeholderTextColor="#000"
            style={style.FieldPlaceholder}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
          <View style={style.FieldBottom} />
        </View>
        <TouchableOpacity style={style.signinButton}>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", color: "#009092" }}
            onPress={() =>
              this.props.SignInAction(this.state.email, this.state.password)
            }
          >
            Sign in
          </Text>
        </TouchableOpacity>
        //////////////////////////////////////////////////
        //////////MIDDLE LINE
        <View style={style.MainScreenMiddle}>
          <View style={style.MainScreenMiddlePosition} />
          <Text style={style.MainScreenMiddleMargin}>or</Text>
          <View style={style.MainScreenMiddlePosition} />
        </View>
        //////////////////////////////////////////////////
        //////////OAUTH
        <TouchableOpacity style={style.buttonWrapperFb} onPress={this.onPress}>
          <View style={style.buttonView}>
            <View style={style.buttonIconView}>
              <Facebook />
            </View>
            <Text style={style.buttonText}>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonWrapperGoogle}
          onPress={this.onPress}
        >
          <View style={style.buttonView}>
            <View style={style.buttonIconView}>
              <Google />
            </View>
            <Text style={style.buttonText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        //////////////////////////////////////////////////
      </View>
    );
  }
}

export default connect(null, { SignInAction })(Login);
