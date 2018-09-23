import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { style } from "../../../styles/authStyle";
import { Facebook, Google } from "../../svg";

class authButtons extends Component {
  constructor(props) {
    super(props);

    this.state = { email: this.props.email, password: this.props.password };
  }

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View>
          <TouchableOpacity
            style={style.signinButton}
            onPress={() => {
              this.props.SignInAction(this.state.email, this.state.password);
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#009092" }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={{ width: 70 }}>
            <Text
              style={{
                color: "#009092",
                fontWeight: "bold"
              }}
            >
              Password
            </Text>
          </TouchableOpacity>
          <View style={style.middleLineCenter} />
          <TouchableOpacity onPress={this.props.nav} style={{ width: 70 }}>
            <Text
              style={{
                color: "#009092",
                fontWeight: "bold"
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        ////////////////////////////////////////////////// //////////MIDDLE LINE
        <View style={style.middleLineView}>
          <View style={style.middleLinePosition} />
          <Text style={style.middleLineMargin}>or</Text>
          <View style={style.middleLinePosition} />
        </View>
        ////////////////////////////////////////////////// //////////OAUTH
        <TouchableOpacity style={style.buttonViewFb} onPress={this.onPress}>
          <View style={style.buttonView}>
            <View style={style.buttonIconView}>
              <Facebook />
            </View>
            <Text style={style.buttonText}>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonViewGoogle} onPress={this.onPress}>
          <View style={style.buttonView}>
            <View style={style.buttonIconView}>
              <Google />
            </View>
            <Text style={style.buttonText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      //////////////////////////////////////////////////
    );
  }
}

export default authButtons;
