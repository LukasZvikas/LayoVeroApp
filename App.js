import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import store from "./store";
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator
} from "react-navigation";
import NavigationService from "./NavigationService";
import {
  FilterStack,
  DashStack,
  BottomTab,
  TabNavigation,
  MainNav
} from "./NavigationLogic";

export default class App extends React.Component {
  render() {
    <View>
      <FilterStack />
      <DashStack />
      <BottomTab />
      <TabNavigation />
    </View>;

    return (
      <Provider store={store}>
        <MainNav
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
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
