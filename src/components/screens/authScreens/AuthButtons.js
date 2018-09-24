import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { Facebook, Google } from "../../svg";
import { SignInAction } from "../../../actions/authActions";
import {AuthButton} from "../../customUiComponents/authButton";
import NavigationService from "../../../../NavigationService";

export const AuthButtons = ({ action, nav, buttonName }) => {
  return (
    <View style={baseStyle.centerItems}>
     <AuthButton action={action} buttonName={buttonName} />
      <View style={[baseStyle.centerItems, baseStyle.flexRow]}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate("forgotPass")}
          style={{ width: 70 }}
        >
          <Text
            style={{
              color: "#009092",
              fontWeight: "bold"
            }}
          >
            Password
          </Text>
        </TouchableOpacity>
        <View style={authStyle.middleLineCenter} />
        <TouchableOpacity onPress={nav} style={{ width: 70 }}>
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
      <View
        style={[
          authStyle.middleLineView,
          baseStyle.centerItems,
          baseStyle.flexRow
        ]}
      >
        <View style={authStyle.middleLinePosition} />
        <Text style={authStyle.middleLineMargin}>or</Text>
        <View style={authStyle.middleLinePosition} />
      </View>
      ////////////////////////////////////////////////// //////////OAUTH
      <TouchableOpacity
        style={[authStyle.oauthButtonMainView, authStyle.facebookButtonColor]}
        onPress={this.onPress}
      >
        <View
          style={[
            authStyle.buttonView,
            baseStyle.centerItems,
            baseStyle.flexRow
          ]}
        >
          <View style={authStyle.buttonIconView}>
            <Facebook />
          </View>
          <Text style={authStyle.buttonText}>Sign in with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[authStyle.oauthButtonMainView, authStyle.googleButtonColor]}
        onPress={this.onPress}
      >
        <View
          style={[
            authStyle.buttonView,
            baseStyle.centerItems,
            baseStyle.flexRow
          ]}
        >
          <View style={authStyle.buttonIconView}>
            <Google />
          </View>
          <Text style={authStyle.buttonText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
    //////////////////////////////////////////////////
  );
};
