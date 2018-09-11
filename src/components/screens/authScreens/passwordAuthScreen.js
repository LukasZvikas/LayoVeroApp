import React, { Component } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { style } from "../../../styles/authStyle";
import { connect } from "react-redux";
import { SignInAction } from "../../../actions/authActions";

class passwordAuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.state.params.email,
      password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "",
      borderBottomWidth: 0
    },

    headerTintColor: "#000"
  };
  render() {
    return (
      <View style={style.Gradient}>
        {/*<LinearGradient
          colors={["#FF3366", "#BA265D"]}
          style={style.authGradient}
        >*/}
        <View style={style.PassScreenFieldView}>
          <Text style={style.FieldText}>Almost there!</Text>
          <Text style={style.ScreenTextMain}>
            Enter password to sign in with email
          </Text>
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
          <TouchableOpacity style={style.signinButton}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold" }}
              onPress={() =>
                this.props.SignInAction(this.state.email, this.state.password)
              }
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        {/*</LinearGradient>*/}
      </View>
    );
  }
}

export default connect(null, { SignInAction })(passwordAuthScreen);
