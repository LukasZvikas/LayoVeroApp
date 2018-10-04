import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Keyboard
} from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Search } from "../../svg";
import {
  getCities,
  getCityFromPartialQuery,
  clearSuggestions
} from "../../../actions/routeActions";
import { Suggestions } from "./suggestions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true, searchBarState: false, text: "" };
  }

  handleInputChange = event => {
    if (event.nativeEvent.text && event.nativeEvent.text.length > 0) {
      this.props.getCityFromPartialQuery(event.nativeEvent.text);
    } else {
      this.props.clearSuggestions();
    }
  };

  render() {
    return (
      <View
        style={
          this.state.searchBarState
            ? [
                dashStyle.focusedSearchBarView,
                baseStyle.justifyFlexStart,
                baseStyle.alignCenter
              ]
            : {}
        }
      >
        <View style={[dashStyle.searchBarWrappper, baseStyle.flexRow, baseStyle.centerItems]}>
          {/*SEARCH BAR INPUT*/}
          <View
            style={[
              dashStyle.searchBarView,
              baseStyle.centerItems,
              this.state.searchBarState
                ? { width: 70 + "%" }
                : { width: 80 + "%" }
            ]}
          >
            {this.state.showSearchIcon ? (
              <View style={{ paddingRight: 5 }}>
                <Search color="#686868" />
              </View>
            ) : null}

            <TextInput
              ref={this.myTextInput}
              style={{ width: 80 + "%" }}
              placeholder="Try London"
              onFocus={() => {
                this.setState({ searchBarState: !this.state.searchBarState });
              }}
              value={this.state.text}
              onChange={event => {
                this.handleInputChange(event);
                this.setState({ text: event.nativeEvent.text });
              }}
            />
          </View>
          {/**/}
          {/*CANCEL BUTTON WHEN SEARCH BAR IS FOCUSED*/}
          {this.state.searchBarState ? (
            <TouchableOpacity
              style={{
                marginLeft: 20,
                alignItems: "center"
              }}
              onPress={() => {
                this.setState({ text: "" });
                Keyboard.dismiss();
                this.setState({ searchBarState: !this.state.searchBarState });
                this.props.getCities();
                this.props.clearSuggestions();
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          ) : null}
          {/**/}
          <Suggestions suggestions={this.props.suggestions} />
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
