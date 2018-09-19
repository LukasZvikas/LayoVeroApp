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
          paddingRight: this.props.padding
        }}
      >
        <TouchableOpacity
          style={{
            height: this.props.height,
            width: this.props.width,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#009092",
            backgroundColor: this.state.isChecked ? "#009092" : "#fff",
            marginRight: 4
          }}
          onPress={() => {
            this.setState({ isChecked: !this.state.isChecked });
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 100 + "%"
            }}
          >
            <Text style={{ fontSize: 13, color: this.state.isChecked ? "#fff" : "#000" }}>{this.props.text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CheckBox;
