import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import AuthScreen from "./src/components/screens/authScreens/authScreen";
import { LinearGradient } from "expo";
import store from "./store";
import { createStackNavigator, TabNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    const MainNav = createStackNavigator({
      auth: { screen: AuthScreen },
    });

    return (
      <Provider store={store}>
        <MainNav />
      </Provider>
    )
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
