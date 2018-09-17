import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { style } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Search } from "../../svg";

class IndexDash extends Component {
  constructor(props) {
    super(props);

    this.state = { showSearchIcon: true };
  }
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
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
        <View style={style.searchBarView}>
          {this.state.showSearchIcon ? (
            <View style={{ paddingRight: 5 }}>
              <Search color="#686868" />
            </View>
          ) : null}
          <TextInput style={{ width: 80 + "%" }} placeholder="Try London" />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("FirstFilter");
          }}
        >
          <Text style={{ marginTop: 12, fontWeight: "bold", color: "#686868" }}>
            Need Help Looking?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default IndexDash;

//onFocus={() => this.setState({ showSearchIcon: false })}
//onBlur={() => this.setState({ showSearchIcon: true })}
