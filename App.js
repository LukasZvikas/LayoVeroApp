import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthScreen from "./src/components/screens/authScreen";
import EmailAuthScreen from "./src/components/screens/emailAuthScreen";
import { LinearGradient } from "expo";
import { createStackNavigator, TabNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    const MainNav = createStackNavigator({
      auth: { screen: AuthScreen },
      emailAuth: { screen: EmailAuthScreen }
    });

    return <MainNav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
