import React from "react";

import Login from "./src/components/screens/authScreens/Login";
import SignUp from "./src/components/screens/authScreens/SignUp";
import ForgotPass from "./src/components/screens/authScreens/ForgotPass";

import IndexDash from "./src/components/screens/dashScreens/IndexDash";
import RouteDetailsWrapper from "./src/components/screens/dashScreens/RouteDetailsWrapper";
import MyLayovers from "./src/components/screens/dashScreens/MyLayovers";
import Saved from "./src/components/screens/dashScreens/Saved";
import Profile from "./src/components/screens/dashScreens/Profile";

import FilterFirst from "./src/components/screens/filterScreens/FilterFirst";
import FilterSecond from "./src/components/screens/filterScreens/FilterSecond";
import FilterThird from "./src/components/screens/filterScreens/FilterThird";

import { Plane, Search, Favorites, Account } from "./src/components/svg";
import {
  createStackNavigator,
  TabNavigator,
  createBottomTabNavigator
} from "react-navigation";

export const FilterStack = createStackNavigator({
  // FirstFilter: { screen: FilterFirst },
  SecondFilter: { screen: FilterSecond },
  ThirdFilter: { screen: FilterThird }
});

export const DashStack = createStackNavigator(
  {
    routeDashboard: {
      screen: IndexDash
    },
    routeDetails: {
      screen: RouteDetailsWrapper
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export const mainDashStack = createStackNavigator(
  {
    dashboard: {
      screen: DashStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: <Search />
      }
    },
    filter: { screen: FilterStack }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
export const BottomTab = createBottomTabNavigator(
  {
    dashboard: {
      screen: mainDashStack,
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

export const TabNavigation = createStackNavigator(
  {
    Tab: { screen: BottomTab }
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null,
      gesturesEnabled: false,
      activeTintColor: "#000"
    })
  }
);

export const MainNav = createStackNavigator(
  {
    login: { screen: Login },
    signUp: { screen: SignUp },
    forgotPass: { screen: ForgotPass },
    afterAuth: { screen: TabNavigation }
  },
  {
    // Default config for all screens
    headerMode: "none",
    title: "Main",
    initialRouteName: "signUp",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

