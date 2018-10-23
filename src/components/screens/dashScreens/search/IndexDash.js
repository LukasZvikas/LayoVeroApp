import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { routeItemsStyle } from "../../../../styles/indexDashboard/routeItems";
import { baseStyle } from "../../../../styles/base";
import { getCities } from "../../../../actions/routeActions";
import RouteList from "./indexDashItems/routeListItems/routeList";
import SearchBar from "./indexDashItems/searchBarItems/searchBar";
import HelpLink from "./indexDashItems/searchBarItems/helpLink";

class IndexDash extends Component {
  componentDidMount() {
    this.props.getCities("London");
  }

  renderCityName = layovers => {
    if (layovers) {
      return <Text style={routeItemsStyle.cityName}>{layovers[0].city}</Text>;
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
        <HelpLink
          action={() => {
            this.props.navigation.navigate("SecondFilter");
          }}
        />
        {this.renderCityName(this.props.layovers)}
        {this.props.layovers ? (
          <View style={baseStyle.centerItems}>
            <RouteList data={this.props.layovers} />
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
