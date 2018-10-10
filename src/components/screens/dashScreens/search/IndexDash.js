import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { searchBarStyle } from "../../../../styles/indexDashboard/searchBar";
import { baseStyle } from "../../../../styles/base";
import { getCities } from "../../../../actions/routeActions";
import { FlatListRenderer } from "./searchBarItems/flatListRenderer";
import SearchBar from "./searchBarItems/SearchBar";

class IndexDash extends Component {
  componentDidMount() {
    this.props.getCities("London");
  }

  renderCityName = layovers => {
    if (layovers) {
      return (
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 30,
            fontWeight: "bold"
          }}
        >
          {layovers[0].city}
        </Text>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <View
        style={[
          baseStyle.mainView,
          baseStyle.alignCenter,
          {
            paddingTop: 60
          }
        ]}
      >
        <SearchBar />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SecondFilter");
          }}
        >
          <Text style={searchBarStyle.helpText}>Need Help Looking?</Text>
          {this.renderCityName(this.props.layovers)}
        </TouchableOpacity>
        {this.props.layovers ? (
          <View style={baseStyle.centerItems}>
            <FlatListRenderer data={this.props.layovers} />
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    layovers: state.routes.routesArray
  };
};

export default connect(mapStateToProps, {
  getCities
})(IndexDash);

//onFocus={() => this.setState({ showSearchIcon: false })}
//onBlur={() => this.setState({ showSearchIcon: true })}
