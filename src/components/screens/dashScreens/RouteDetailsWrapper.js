import React, { Component } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text
} from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Button } from "../../customUiComponents/button";
import { RouteAbout } from "./routeAbout";
import { RouteNotes } from "./routeNotes";
import { RouteMap } from "./routeMap";

// class RouteDetailsWrapper extends Component {

//   render() {

//     const { navigation } = this.props;
//     console.log(this.props);
//     return (
//       <RouteAbout
//         image={navigation.state.params.image}
//         name={navigation.state.params.name}
//         about={navigation.state.params.about}
//         action={() => navigation.goBack()}
//       />
//     );
//   }
// }

// export default RouteDetailsWrapper;

const deviceWidth = Dimensions.get("window").width;

class RouteDetailsWrapper extends Component {
  numItems = 3;
  itemWidth = 70;
  animVal = new Animated.Value(0);

  render() {
    const views = [
      <RouteAbout
        image={this.props.navigation.state.params.image}
        name={this.props.navigation.state.params.name}
        about={this.props.navigation.state.params.about}
        action={() => this.props.navigation.goBack()}
        width={{ width: deviceWidth }}
      />,
      <RouteNotes width={{ width: deviceWidth }} />,
      <RouteMap width={{ width: deviceWidth }} />
    ];

    const barNames = ["About", "Notes", "Map"];
    const viewsArray = [];
    const barArray = [];
    views.forEach((view, i) => {
      const thisView = view;
      viewsArray.push(thisView);

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: "clamp"
      });

      const thisBar = (
        <View style={[baseStyle.centerItems, { width: 120 }]}>
          <Text style={{ fontSize: 17 }}>{barNames[i]}</Text>
          <View
            key={`bar${i}`}
            style={[
              styles.track,
              baseStyle.centerItems,
              {
                width: this.itemWidth
              }
            ]}
          >
            <Text style={{ fontSize: 17 }}>{barNames[i]}</Text>
            <Animated.View
              style={[
                styles.bar,
                {
                  borderWidth: 1,
                  borderColor: "#59c0c1",
                  width: this.itemWidth,
                  transform: [{ translateX: scrollBarVal }]
                }
              ]}
            />
          </View>
        </View>
      );
      barArray.push(thisBar);
    });

    return (
      <View
        style={[baseStyle.centerItems, { width: 100 + "%", height: 100 + "%" }]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.animVal } } }
          ])}
        >
          {viewsArray}
        </ScrollView>
        <View style={[styles.barContainer, baseStyle.centerItems]}>
          {barArray}
        </View>
      </View>
    );
  }
}

export default RouteDetailsWrapper;

const styles = StyleSheet.create({
  barContainer: {
    position: "absolute",
    zIndex: 2,
    top: 55,
    flexDirection: "row"
  },
  track: {
    backgroundColor: "#ccc",
    overflow: "hidden",
    height: 2
  },
  bar: {
    backgroundColor: "#59c0c1",
    height: 2,
    position: "absolute",
    left: 0,
    top: 0
  }
});
