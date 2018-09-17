import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { style } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { getCities } from "../../../actions/cityActions"

class FilterFirst extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true };
  }
  static navigationOptions = {
    header: null,
    headerLeft: null
  };

  renderCities = () => {
    this.props.getCities();
  };

  componentDidMount() {
    this.renderCities();
  }
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
        <Text> First </Text>
        <View />
      </View>
    );
  }
}

export default FilterFirst;
