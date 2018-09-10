import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import AuthScreen from "./src/components/screens/authScreens/authScreen";
import EmailAuthScreen from "./src/components/screens/authScreens/emailAuthScreen";
import PasswordAuthScreen from "./src/components/screens/authScreens/passwordAuthScreen";
import { LinearGradient } from "expo";
import store from "./store";
import { createStackNavigator, TabNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    const MainNav = createStackNavigator({
      auth: { screen: AuthScreen },
      emailAuth: { screen: EmailAuthScreen },
      passwordAuth: { screen: PasswordAuthScreen }
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
