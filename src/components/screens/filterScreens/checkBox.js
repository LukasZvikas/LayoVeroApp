import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = { isChecked: this.props.checkBoxState };
  }
  render() {
    console.log(this.props);
    return (
      <View
        style={{
          flexDirection: "row",
          marginRight: this.props.marginForSides,
          marginLeft: this.props.marginForSides,
          marginTop: 10,
          marginBottom: 10,
          justifyContent: "center",
          paddingRight: this.props.padding
        }}
      >
        <TouchableOpacity
          style={{
            height: 16,
            width: 16,
            borderWidth: 1,
            borderRadius: 30,
            borderColor: "#009092",
            backgroundColor: this.state.isChecked ? "#009092" : "#fff",
            marginRight: 4
          }}
          onPress={() => {
            this.setState({ isChecked: !this.state.isChecked });
          }}
        />
        <Text style={{ fontSize: 13 }}>{this.props.text}</Text>
      </View>
    );
  }
}

export default CheckBox;
