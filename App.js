import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/screens/authScreens/Login";
import IndexDash from "./src/components/screens/dashScreens/IndexDash";
import MyLayovers from "./src/components/screens/dashScreens/MyLayovers";
import { LinearGradient } from "expo";
import store from "./store";
import {
  createStackNavigator,
  TabNavigator,
  createDrawerNavigator
} from "react-navigation";

export default class App extends React.Component {
  render() {
    const DrawerStack = createDrawerNavigator(
      {
        dashboard: { screen: IndexDash },
        myLayovers: { screen: MyLayovers }
      },
      { drawerWidth: 280 }
    );
    const DrawerNavigation = createStackNavigator(
      {
        DrawerStack: { screen: DrawerStack }
      },
      {
        headerMode: "float",
        navigationOptions: ({ navigation }) => ({
          headerStyle: { backgroundColor: "#4C3E54" },
          title: "Welcome!",
          headerTintColor: "white",
          gesturesEnabled: false
        })
      }
    );

    const MainNav = createStackNavigator(
      {
        auth: { screen: Login },
        afterAuth: { screen: DrawerNavigation }
      },
      {
        // Default config for all screens
        headerMode: "none",
        title: "Main",
        initialRouteName: "auth",
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    );

    return (
      <Provider store={store}>
        <MainNav />
      </Provider>
    );
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
