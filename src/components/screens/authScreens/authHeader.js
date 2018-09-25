import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { authHeader } from "../../../styles/authHeaderStyle";
import { LogoWhite } from "../../svg";
import three from "../../../assets/images/three.jpg";

export const AuthHeader = ({ name }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={authHeader(width, height).mainView}>
      <View style={{justifyContent: "center", alignItems: "center"}}>
          <Image style={{ alignItems: "center",
            justifyContent: "center",
            width: width + 40,
            height: height * 0.5,
            zIndex: 2,
            overflow: 'hidden', resizeMode: 'cover'}} source={three} />
 
        <View style={{ marginTop: 60, position: "absolute", top: 50, zIndex: 5 }}>
          <LogoWhite />
          <Text style={authHeader(width, height).nameText}>{name}</Text>
        </View>


        
      </View>

      <View style={authHeader(width, height).extendedHeaderView} />
    </View>
  );
};
