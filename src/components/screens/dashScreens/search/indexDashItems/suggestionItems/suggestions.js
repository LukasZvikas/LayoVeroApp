import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { getCities } from "../../../../../../actions/routeActions";
import { suggestionStyle } from "../../../../../../styles/indexDashboard/suggestion";
import { baseStyle } from "../../../../../../styles/base";
import SuggIcon from "./icon";
import SuggCity from "./city";

export class Suggestions extends Component {
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
          <SuggIcon />
          <SuggCity city={city} />
        </TouchableOpacity>
      );
    });
  };
  render() {
    return this.props.suggestions ? (
      <View
        style={[suggestionStyle.suggestionMainView, baseStyle.justifyCenter]}
      >
        {this.renderCityNames(this.props.suggestions)}
      </View>
    ) : null;
  }
}

export default connect(null, { getCities })(Suggestions);
