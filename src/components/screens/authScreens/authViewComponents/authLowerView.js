import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";
import { authStyle } from "../../../../styles/authStyle";
import { baseStyle } from "../../../../styles/base";
import { SignInAction } from "../../../../actions/authActions";
import { MiddleNav } from "./middleNav";
import { MiddleLine } from "./middleLine";
import { FacebookButton, GoogleButton } from "./oauthButtons";

export const AuthLowerView = ({
  leftTitle,
  rightTitle,
  leftNav,
  rightNav,
  midNavWidth
}) => {
  return (
    //VIEW FROM AUTH BUTTON TO OAUTH BUTTONS
    <View style={baseStyle.centerItems}>
      {/*MIDDLE NAV*/}
      <MiddleNav
        leftTitle={leftTitle}
        rightTitle={rightTitle}
        leftNav={leftNav}
        rightNav={rightNav}
        width={midNavWidth}
      />
      {/**/}
      {/*MIDDLE LINE*/}
      <MiddleLine />
      {/**/}
      {/*OAUTH*/}
      <View
        style={[
          authStyle.oauthWidth,
          baseStyle.flexRow,
          baseStyle.spaceBetweenHorizontal
        ]}
      >
        <FacebookButton />
        <GoogleButton />
      </View>
      {/*OAUTH END*/}
    </View>
  );
};
