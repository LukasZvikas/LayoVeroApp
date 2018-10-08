import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";
import { authStyle } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { Facebook, Google } from "../../svg";
import { SignInAction } from "../../../actions/authActions";
import { Button } from "../../customUiComponents/button";
import NavigationService from "../../../../NavigationService";

export const AuthLowerView = ({
  action,
  nav,
  buttonName,
  middleNavLinkName,
  disabled,
  opacity
}) => {
  return (
    //VIEW FROM AUTH BUTTON TO OAUTH BUTTONS
    <View style={baseStyle.centerItems}>
      {/*AUTHBUTTON*/}
      <Button
        action={action}
        buttonName={buttonName}
        isDisabled={disabled}
        opacity={opacity}
      />
      {/**/}
      {/*MIDDLE NAV*/}
      <View style={[baseStyle.centerItems, baseStyle.flexRow]}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate("forgotPass")}
          style={{ width: 70 }}
        >
          <Text style={authStyle.middleNavText}>Password</Text>
        </TouchableOpacity>
        <View style={authStyle.middleNavCenter} />
        <TouchableOpacity onPress={nav} style={{ width: 70 }}>
          <Text style={authStyle.middleNavText}>{middleNavLinkName}</Text>
        </TouchableOpacity>
      </View>
       {/**/}
      {/*MIDDLE LINE*/}
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
      {/**/} 
      {/*OAUTH*/}
      <View
        style={[
          authStyle.oauthWidth,
          baseStyle.flexRow,
          baseStyle.spaceBetweenHorizontal
        ]}
      >
        <TouchableOpacity
          style={[authStyle.oauthButtonMainView, authStyle.facebookButtonColor]}
          onPress={this.onPress}
        >
          <View style={[authStyle.buttonView, baseStyle.centerItems]}>
            <Facebook />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[authStyle.oauthButtonMainView, authStyle.googleButtonColor]}
          onPress={this.onPress}
        >
          <View style={[authStyle.buttonView, baseStyle.centerItems]}>
            <Google />
          </View>
        </TouchableOpacity>
      </View>
      {/*OAUTH END*/}
    </View>
    
  );
};
