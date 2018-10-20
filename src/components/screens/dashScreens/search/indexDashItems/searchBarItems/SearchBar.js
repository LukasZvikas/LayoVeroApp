import React, { Component } from "react";
import { connect } from "react-redux";
import { Keyboard, View } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../../../styles/base";
import {
  getCities,
  getCityFromPartialQuery,
  clearSuggestions
} from "../../../../../../actions/routeActions";
import InputIcon from "./inputIcon";
import InputText from "./inputText";
import CancelButton from "./cancelButton";
import Suggestions from "../suggestionItems/suggestions";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true, searchBarState: false, text: "" };
  }

  setTextState = event => {
    this.setState({ text: event.nativeEvent.text });
  };
  setSearchState = state => {
    this.setState({ searchBarState: !this.state.searchBarState });
  };
  clearTextState = () => {
    return this.setState({ text: "" });
  };

  changeSearchState = () => {
    this.setState({ searchBarState: !this.state.searchBarState, text: "" });
  };

  getCity = city => {
    return this.props.getCities(city);
  };

  clearSuggestions = () => {
    return this.props.clearSuggestions();
  };

  keyboardDismiss = () => {
    return Keyboard.dismiss();
  };

  handleInputChange = event => {
    if (event.nativeEvent.text && event.nativeEvent.text.length > 0) {
      this.props.getCityFromPartialQuery(event.nativeEvent.text);
    } else {
      this.props.clearSuggestions;
    }
  };

  render() {
    const { clearSuggestions, suggestions, getCities } = this.props;
    return (
      <View
        style={
          this.state.searchBarState
            ? [
                searchBarStyle.focusedSearchBarView,
                baseStyle.justifyFlexStart,
                baseStyle.alignCenter
              ]
            : {}
        }
      >
        <View
          style={[
            searchBarStyle.searchBarWrappper,
            baseStyle.flexRow,
            baseStyle.centerItems
          ]}
        >
          <View
            style={[
              searchBarStyle.searchBarView,
              baseStyle.centerItems,
              this.state.searchBarState
                ? { width: 70 + "%" }
                : { width: 80 + "%" }
            ]}
          >
            <InputIcon showSearchIcon={this.state.showSearchIcon} />
            <InputText
              onChange={event => {
                this.handleInputChange(event);
                this.setTextState(event);
              }}
              textState={this.state.text}
              onFocus={() => {
                this.setSearchState();
              }}
            />
          </View>
          <CancelButton
            searchBarState={this.state.searchBarState}
            onPress={() => {
              this.clearTextState();
              this.keyboardDismiss();
              this.clearSuggestions();
              this.getCity("London");
              this.setSearchState();
            }}
          />
          <Suggestions
            suggestions={suggestions}
            setSearchBarState={() => this.changeSearchState()}
            clearSuggestions={() => this.clearSuggestions()}
            dismissKeyboard={() => this.keyboardDismiss()}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    layovers: state.routes.routesArray,
    suggestions: state.routes.options
  };
};

export default connect(mapStateToProps, {
  getCities,
  getCityFromPartialQuery,
  clearSuggestions
})(SearchBar);
