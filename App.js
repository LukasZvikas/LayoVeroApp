import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/screens/authScreens/Login";
import IndexDash from "./src/components/screens/dashScreens/IndexDash";
import MyLayovers from "./src/components/screens/dashScreens/MyLayovers";
import Saved from "./src/components/screens/dashScreens/Saved";
import Profile from "./src/components/screens/dashScreens/Profile";
import { LinearGradient } from "expo";
import store from "./store";
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Plane, Search, Favorites, Account } from "./src/components/svg";

export default class App extends React.Component {
  render() {
    const TabStack = createBottomTabNavigator(
      {
        dashboard: {
          screen: IndexDash,
          navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: <Search />
          }
        },
        saved: {
          screen: Saved,
          navigationOptions: {
            tabBarLabel: "Saved",
            tabBarIcon: <Favorites />
          }
        },
        myLayovers: {
          screen: MyLayovers,
          navigationOptions: {
            tabBarLabel: "My Layovers",
            tabBarIcon: <Plane />
          }
        },
        profile: {
          screen: Profile,
          navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: <Account />
          }
        }
      },
      {
        tabBarOptions: {
          activeTintColor: "#7bcebc",
          labelStyle: {
            fontSize: 10
          },
          style: {
            backgroundColor: "#fff",
            paddingBottom: 2  
          }
        }
      }
    );
    const TabNavigation = createStackNavigator(
      {
        DrawerStack: { screen: TabStack }
      },
      {
        navigationOptions: ({ navigation }) => ({
          header: null,
          gesturesEnabled: false,
          activeTintColor: "#000"
        })
      }
    );

    const MainNav = createStackNavigator(
      {
        auth: { screen: Login },
        afterAuth: { screen: TabNavigation }
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
