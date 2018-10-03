import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Search } from "../../svg";
import {
  getCities,
  getCityFromPartialQuery,
  clearSuggestions
} from "../../../actions/routeActions";
import { FlatListRenderer } from "./flatListRenderer";
// import London from "../../../assets/icons/London/Big_Ben.png";

class IndexDash extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true, searchBarState: false };
  }
  static navigationOptions = {
    header: null,
    headerLeft: null
  };

  handleInputChange = event => {
    console.log(event.nativeEvent);
    if (event.nativeEvent.text && event.nativeEvent.text.length > 0) {
      this.props.getCityFromPartialQuery(event.nativeEvent.text);
    }
    else {
      this.props.clearSuggestions();
    }
  };

  renderCityNames = cities => {
    return cities.map(city => {
      console.log("CITY", city);
      return (
        <View
          style={{
            borderBottomWidth: 1.2,
            borderBottomColor: "#D3D3D3",
            marginTop: 0,
            justifyContent: "center",
            marginTop: 30
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              height: 30,
              fontSize: 16
            }}
          >
            {city}
          </Text>
        </View>
      );
    });
  };

  componentDidMount() {
    this.props.getCities();
  }
  render() {
    console.log("su", this.state.searchBarState);
    return (
      <View
        style={[
          baseStyle.mainView,
          {
            alignItems: "center",
            paddingTop: 60
          }
        ]}
      >
        <View
          style={
            this.state.searchBarState
              ? {
                  height: 100 + "%",
                  width: 100 + "%",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }
              : {}
          }
        >
          <View style={[dashStyle.searchBarView, baseStyle.centerItems]}>
            {this.state.showSearchIcon ? (
              <View style={{ paddingRight: 5 }}>
                <Search color="#686868" />
              </View>
            ) : null}

            <TextInput
              style={{ width: 80 + "%" }}
              placeholder="Try London"
              onFocus={() => {
                this.setState({ searchBarState: !this.state.searchBarState });
              }}
              onChange={event => this.handleInputChange(event)}
            />
          </View>
          {this.props.suggestions ? (
            <View
              style={{
                position: "absolute",
                top: 60,
                width: 70 + "%",
                justifyContent: "center"
              }}
            >
              {this.renderCityNames(this.props.suggestions)}
            </View>
          ) : null}
        </View>

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
    layovers: state.routes.routesArray,
    suggestions: state.routes.options
  };
};

export default connect(mapStateToProps, { getCities, getCityFromPartialQuery, clearSuggestions })(
  IndexDash
);

//onFocus={() => this.setState({ showSearchIcon: false })}
//onBlur={() => this.setState({ showSearchIcon: true })}
