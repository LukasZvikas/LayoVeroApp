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

export class SearchBarView extends Component {
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

  getActions = () => {
    return {
      setTextState: this.setTextState,
      setSearchState: this.setSearchState,
      clearTextState: this.clearTextState,
      changeSearchState: this.changeSearchState,
      getCity: this.getCity,
      clearSuggestions: this.clearSuggestions,
      keyboardDismiss: this.keyboardDismiss,
      handleInputChange: this.handleInputChange
    };
  };

  render() {
    const { clearSuggestions, suggestions, getCities, children } = this.props;
    const { searchBarState, showSearchIcon, text } = this.state;
    const { getActions } = this;

    return children(
      searchBarState,
      showSearchIcon,
      text,
      getActions(),
      suggestions
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
})(SearchBarView);
