import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { baseStyle } from "../../../styles/base";
import { SecureStore } from "expo";

class Profile extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };
  render() {
    return (
      <View style={baseStyle.mainView}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            opacity: 0.6,
            height: 45,
            width: 200,
            margin: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            borderWidth: 1.2,
            borderColor: "#009092"
          }}
          onPress={() => {
            SecureStore.deleteItemAsync("jwt");
            this.props.navigation.navigate("auth");
          }}
        >
          <Text
            style={{
              color: "#009092"
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
