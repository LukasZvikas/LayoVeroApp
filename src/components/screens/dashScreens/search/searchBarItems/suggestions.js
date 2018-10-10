import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TouchableOpacity } from "react-native";
import { suggestionStyle } from "../../../../../styles/indexDashboard/suggestion";
import { baseStyle } from "../../../../../styles/base";
import { Location } from "../../../../svg";
import { getCities } from "../../../../../actions/routeActions";

class Suggestions extends Component {
  renderCityNames = cities => {
    return cities.map(city => {
      return (
        <TouchableOpacity
          key={city}
          style={[
            suggestionStyle.suggestionItemView,
            baseStyle.justifyFlexStart,
            baseStyle.flexRow
          ]}
          onPress={() => {
            this.props.setSearchBarState();
            this.props.getCities(city);
            this.props.clearSuggestions();
            this.props.dismissKeyboard();
          }}
        >
          <Text style={{ marginRight: 10 }}>
            <Location />
          </Text>
          <Text style={[suggestionStyle.suggestionText, baseStyle.justifyCenter]}>
            {city}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
    return this.props.suggestions ? (
      <View style={[suggestionStyle.suggestionMainView, baseStyle.justifyCenter]}>
        {this.renderCityNames(this.props.suggestions)}
      </View>
    ) : null;
  }
}

export default connect(null, { getCities })(Suggestions);
