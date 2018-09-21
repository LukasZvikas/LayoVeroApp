import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { style } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Plus, Minus } from "../../svg";

class FilterThird extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true };
  }
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          height: 100 + "%",
          width: 100 + "%",
          backgroundColor: "#fff",
          paddingTop: 100,
          width: 100 + "%",
          alignItems: "center"
        }}
      >
        <Text> What is your budget? </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1.5,
              borderColor: "#009092",
              width: 50,
              height: 50,
              borderRadius: 30
            }}
          >
            <Minus />
          </TouchableOpacity>

          <View
            style={{
              borderWidth: 2.8,
              borderColor: "#D3D3D3",
              width: 170,
              height: 170,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              margin: 35
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>$ 45.5</Text>
          </View>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1.5,
              borderColor: "#009092",
              width: 50,
              height: 50,
              borderRadius: 30
            }}
          >
            <Plus />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 50,
            width: 90,
            borderWidth: 1.5,
            borderColor: "#009092",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25
          }}
        >
          <Text> USD</Text>
        </View>
      </View>
    );
  }
}

export default FilterThird;
