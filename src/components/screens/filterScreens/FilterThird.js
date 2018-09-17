import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { style } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";

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
          alignItems: "center",
          height: 100 + "%",
          width: 100 + "%",
          backgroundColor: "#fff",
          paddingTop: 100
        }}
      >
        <Text> Third </Text>
      </View>
    );
  }
}

export default FilterThird;
