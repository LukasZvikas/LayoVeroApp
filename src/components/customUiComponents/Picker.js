import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { filterStyle } from "../../styles/filterStyle";

class Picker extends Component {
  constructor(props) {
    super(props);

    this.state = { pickerState: this.props.pickerState };
  }

  renderCities = citiesObject => {
    if (this.state.pickerState) {
      return (
        <FlatList
          style={{
            height: 150,
            width: 250,
            borderWidth: 1,
            borderColor: "#009092",

            borderTopColor: "#fff",
            backgroundColor: "#fff"
          }}
          keyExtractor={item => item}
          data={citiesObject}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 16, margin: 3 }}>{item}</Text>
          )}
        />
      );
    }

    return null;
  };

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          zIndex: 3
        }}
      >
        <Text style={filterStyle.secondaryHeadingText}>
          What is the city of your layover?
        </Text>

        <View style={{ position: "relative" }}>
          <Text
            onPress={() => {
              this.setState({ pickerState: !this.state.pickerState });
            }}
            style={filterStyle.pickerInput}
          />

          <View
            style={{
              position: "absolute",
              top: 45,
              left: 0,
              right: 0,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.renderCities(this.props.cities)}
          </View>
        </View>
      </View>
    );
  }
}

export default Picker;
