import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCities,
  getCityFromPartialQuery,
  clearSuggestions
} from "../../../../../../actions/routeActions";
import SearchBarMainView from "./searchBarMainView";
import SearchBarWrappperView from "./searchBarWrapperView";
import SearchBarInputView from "./searchBarInputView";
import { SearchBarIcon } from "./searchBarIcon";
import { SearchBarInput } from "./searchBarInput";
import { SearchBarCancel } from "./searchBarCancel";
import Suggestions from "../suggestions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true, searchBarState: false, text: "" };
  }

  changeSearchState = () => {
    this.setState({ searchBarState: !this.state.searchBarState, text: "" });
  };

  handleInputChange = event => {
    if (event.nativeEvent.text && event.nativeEvent.text.length > 0) {
      this.props.getCityFromPartialQuery(event.nativeEvent.text);
    } else {
      this.props.clearSuggestions();
    }
  };

  render() {
    const { clearSuggestions, suggestions, getCities } = this.props;
    return (
      <SearchBarMainView searchBarState={this.state.searchBarState}>
        <SearchBarWrappperView>
          <SearchBarInputView searchBarState={this.state.searchBarState}>
            <SearchBarIcon showSearchIcon={this.state.showSearchIcon} />
            <SearchBarInput
              onChange={event => {
                this.handleInputChange(event);
                this.setState({ text: event.nativeEvent.text });
              }}
              textState={this.state.text}
              setSearchBarState={() => {
                this.setState({ searchBarState: !this.state.searchBarState });
              }}
            />
          </SearchBarInputView>
          <SearchBarCancel
            searchBarState={this.state.searchBarState}
            onPress={() => {
              this.setState({ text: "" });
              Keyboard.dismiss();
              clearSuggestions();
              getCities("London");
              this.setState({ searchBarState: !this.state.searchBarState });
            }}
          />
          <Suggestions
            suggestions={suggestions}
            setSearchBarState={() => this.changeSearchState()}
            clearSuggestions={() => clearSuggestions()}
            dismissKeyboard={() => Keyboard.dismiss()}
          />
        </SearchBarWrappperView>
      </SearchBarMainView>
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
