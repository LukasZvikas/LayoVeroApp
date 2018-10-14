import React from "react";
import { View } from "react-native";
import { Button } from "../../../../customUiComponents/button";

export const RouteDetailsButton = ({ action }) => {
  return (
    <View style={{ position: "absolute", bottom: 55 }}>
      <Button action={action} buttonName={"Back"} />
    </View>
  );
};
