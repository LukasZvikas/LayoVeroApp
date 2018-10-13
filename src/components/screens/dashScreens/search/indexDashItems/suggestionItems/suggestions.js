import React, { Component } from "react";
import { connect } from "react-redux";
import { getCities } from "../../../../../../actions/routeActions";
import SuggestionItemMainView from "./suggestionItemMainView";
import SuggestionItemWrapper from "./suggestionItemWrapper";
import { SuggestionIcon } from "./suggestionIcon";
import { SuggestionCity } from "./suggestionCity";

class Suggestions extends Component {
  renderCityNames = cities => {
    return cities.map(city => {
      return (
        <SuggestionItemWrapper
          key={city}
          onPress={() => {
            this.props.setSearchBarState();
            this.props.getCities(city);
            this.props.clearSuggestions();
            this.props.dismissKeyboard();
          }}
        >
          <SuggestionIcon />
          <SuggestionCity city={city} />
        </SuggestionItemWrapper>
      );
    });
  };
  render() {
    return this.props.suggestions ? (
      <SuggestionItemMainView>
        {this.renderCityNames(this.props.suggestions)}
      </SuggestionItemMainView>
    ) : null;
  }
}

export default connect(null, { getCities })(Suggestions);
