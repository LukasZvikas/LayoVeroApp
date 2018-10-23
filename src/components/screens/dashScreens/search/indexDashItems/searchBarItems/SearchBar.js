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
import SearchBarView from "./SearchBarView";

const SearchBar = () => {
  return (
    <SearchBarView
      children={(state, showIcon, text, actions, suggestions) => {
        return (
          <View
            style={
              state
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
                  state ? { width: 70 + "%" } : { width: 80 + "%" }
                ]}
              >
                <InputIcon showSearchIcon={showIcon} />
                <InputText
                  onChange={event => {
                    actions.handleInputChange(event);
                    actions.setTextState(event);
                  }}
                  textState={text}
                  onFocus={() => {
                    actions.setSearchState();
                  }}
                />
              </View>
              <CancelButton
                searchBarState={state}
                onPress={() => {
                  actions.clearTextState();
                  actions.keyboardDismiss();
                  actions.clearSuggestions();
                  actions.getCity("London");
                  actions.setSearchState();
                }}
              />
              <Suggestions
                suggestions={suggestions}
                setSearchBarState={() => actions.changeSearchState()}
                clearSuggestions={() => actions.clearSuggestions()}
                dismissKeyboard={() => actions.keyboardDismiss()}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default SearchBar;
