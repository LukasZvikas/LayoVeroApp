import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { baseStyle } from "../../../styles/base";
import RequiredAssets from "../../requiredImages";
import { Button } from "../../customUiComponents/button";

export const RouteAbout = ({ image, name, about, action, width }) => {
  console.log(name, image);
  return (
    <View style={[baseStyle.mainView, { alignItems: "center" }, width]}>
      <View
        style={[
          baseStyle.alignCenter,

          {
            justifyContent: "space-around",
            marginTop: 40,
            marginBottom: 30,
            height: 50,
            width: 100 + "%",
            flexDirection: "row"
          }
        ]}
      />

      <View
        style={[
          baseStyle.centerItems,
          {
            height: 170,
            width: 85 + "%",
            backgroundColor: "#59c0c1",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }
        ]}
      >
        <Image
          style={{
            height: 100 + "%",
            resizeMode: "contain"
          }}
          source={RequiredAssets[image]}
        />
      </View>
      <View
        style={[
          baseStyle.centerItems,
          {
            height: 40,
            width: 85 + "%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: "#98d3ce"
          }
        ]}
      >
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
      </View>

      <View style={{ width: 85 + "%", marginTop: 5 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 15,
            marginBottom: 5
          }}
        >
          {name}
        </Text>
        <Text style={{ lineHeight: 25, fontSize: 15 }}>{about}</Text>
      </View>

      <Button action={action} buttonName={"Back"} />
    </View>
  );
};
