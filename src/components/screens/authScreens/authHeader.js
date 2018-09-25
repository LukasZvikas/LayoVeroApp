import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LogoWhite } from "../../svg";

export const AuthHeader = ({ name }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: width + width * 0.15,
        height: height * 0.35,
        borderBottomRightRadius: width + width * 0.6,
        borderBottomLeftRadius: width + width * 0.6,
        zIndex: 2
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: width + 40,
          height: height * 0.35,
          borderBottomRightRadius: width + width * 0.5,
          borderBottomLeftRadius: width + width * 0.5,
          backgroundColor: "#009092",
          zIndex: 2
        }}
      >
        <View style={{ marginTop: 60 }}>
          <LogoWhite />
        </View>

        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff"
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{
          width: 100 + "%",
          height: 120 + "%",
          borderBottomRightRadius: width + width,
          borderBottomLeftRadius: width + width,
          backgroundColor: "#78B7B1",
          position: "absolute",
          zIndex: 1
        }}
      />
    </View>
  );
};
