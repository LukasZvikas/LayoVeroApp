import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { LinearGradient } from "expo";
import { style } from "../../../styles/authStyle";

class emailAuthScreen extends Component {
  static navigationOptions = ({ navigation, state }) => {
    return {
      headerStyle: {
        // backgroundColor: "",
        borderBottomWidth: 0
      },

      headerTintColor: "#000",
      headerRight: (
        <Text
          style={{ color: "#000", fontWeight: "bold", fontSize: 18 }}
          onPress={() =>
            navigation.navigate("passwordAuth", {
              email: navigation.state.params
            })
          }
        >
          Next
        </Text>
      )
    };
  };

  onNext(email) {
    if (email != "") {
      return this.state.email;
    }
  }

  render() {
    return (
      <View style={style.Gradient}>
        {/*   ///<LinearGradient
          ///colors={["#FF3366", "#BA265D"]}
          ///style={style.authGradient}
        ///>*/}
        <View style={style.EmailScreenFieldView}>
          <Text style={style.FieldText}>Welcome Back!</Text>
          <Text style={style.ScreenTextMain}>
            Enter your email to sign in to your account
          </Text>
        </View>
        <View style={style.ScreenTextMainAlign}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#000"
            style={style.FieldPlaceholder}
            onChangeText={text => {
              this.props.navigation.setParams({ email: text });
            }}
          />
          <View style={style.FieldBottom} />
        </View>
        {/* //</LinearGradient>*/}
      </View>
    );
  }
}

export default emailAuthScreen;
