import React from "react";
import Root from "./root";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
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
      <Root>
        <MainNav
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Root>
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
