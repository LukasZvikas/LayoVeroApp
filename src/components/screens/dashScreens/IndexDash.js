import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { getCities } from "../../../actions/routeActions";
import { FlatListRenderer } from "./flatListRenderer";
import SearchBar from "./SearchBar";

class IndexDash extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };

  componentDidMount() {
    this.props.getCities();
  }
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
        {/*SEARCH BAR*/}
        <SearchBar />
        {/**/}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SecondFilter");
          }}
        >
          <Text style={dashStyle.helpText}>Need Help Looking?</Text>
        </TouchableOpacity>
        {this.props.layovers ? (
          <FlatListRenderer data={this.props.layovers} />
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
