import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { authHeader } from "../../../styles/authHeaderStyle";
import { baseStyle } from "../../../styles/base";
import { LogoWhite } from "../../svg";
import three from "../../../assets/images/three_resized.jpg";
import threeTn from "../../../assets/images/three_tn.jpg";
import ProgressiveImage from "../../ProgressiveImage";

export const AuthHeader = ({ name }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={authHeader(width, height).mainView}>
      <View style={baseStyle.centerItems}>
        <ProgressiveImage
          heightAndWidth={{}}
          style={[
            baseStyle.centerItems,
            ,
            authHeader(width, height).backgroundImage
          ]}
          source={three}
          thumbnail={threeTn}
        />

        <View style={authHeader(width, height).logoAndNameView}>
          <LogoWhite />
          <Text style={authHeader(width, height).nameText}>{name}</Text>
        </View>
      </View>

      <View style={authHeader(width, height).extendedHeaderView} />
    </View>
  );
};
