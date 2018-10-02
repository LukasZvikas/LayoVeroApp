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
import { getCities } from "../../../actions/routeActions";
import { FlatListRenderer } from "./flatListRenderer";
// import London from "../../../assets/icons/London/Big_Ben.png";

class IndexDash extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true };
  }
  static navigationOptions = {
    header: null,
    headerLeft: null
  };

  componentDidMount() {
    this.props.getCities();
  }
  render() {
    console.log(this.props.layovers);
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
        <View style={[dashStyle.searchBarView, baseStyle.centerItems]}>
          {this.state.showSearchIcon ? (
            <View style={{ paddingRight: 5 }}>
              <Search color="#686868" />
            </View>
          ) : null}
          <TextInput style={{ width: 80 + "%" }} placeholder="Try London" />
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
    layovers: state.routes.routesArray
  };
};

export default connect(mapStateToProps, { getCities })(IndexDash);

//onFocus={() => this.setState({ showSearchIcon: false })}
//onBlur={() => this.setState({ showSearchIcon: true })}
