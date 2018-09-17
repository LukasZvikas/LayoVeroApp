import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput } from "react-native";
import { style } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { getCities } from "../../../actions/routeActions";

class FilterFirst extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true };
  }
  static navigationOptions = {
    header: null,
    headerLeft: null
  };

  renderCities = () => {
    return this.props.cities.map(city => {
      return <Text key={city}>{city}</Text>;
    });
  };

  areCitiesAvailable = () => {
    if (this.props.cities == undefined) {
      return <Text> Loading... </Text>;
    } else {
      return <View>{this.renderCities()} </View>;
    }
  };

  componentDidMount() {
    this.props.getCities();
  }
  render() {
    console.log(this.props.cities);
    return (
      <View
        style={{
          alignItems: "center",
          height: 100 + "%",
          width: 100 + "%",
          backgroundColor: "#fff",
          paddingTop: 100
        }}
      >
        {this.areCitiesAvailable()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.routes.citiesArray
  };
};

export default connect(mapStateToProps, { getCities })(FilterFirst);
