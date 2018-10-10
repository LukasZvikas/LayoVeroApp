import React, { Component } from "react";
import { Animated, View, ScrollView, Text, Dimensions } from "react-native";
import { scrollableBarStyle } from "../../../styles/indexDashboard/scrollableBar";
import { baseStyle } from "../../../styles/base";
import { Button } from "../../customUiComponents/button";
import { RouteAbout } from "./routeAbout";
import { RouteNotes } from "./routeNotes";
import { RouteMap } from "./routeMap";
import getScrollableItems from "./getScrollableItems";

class RouteDetailsWrapper extends Component {
  constructor(props) {
    super(props);

    this.numItems = 3;
    this.itemWidth = 70;
    this.animVal = new Animated.Value(0);
    this.deviceWidth = Dimensions.get("window").width;

    this.views = [
      <RouteAbout
        image={this.props.navigation.state.params.image}
        name={this.props.navigation.state.params.name}
        about={this.props.navigation.state.params.about}
        action={() => this.props.navigation.goBack()}
        width={{ width: this.deviceWidth }}
      />,
      <RouteNotes width={{ width: this.deviceWidth }} />,
      <RouteMap width={{ width: this.deviceWidth }} />
    ];
  }

  render() {
    const scrollableItemsObject = getScrollableItems(
      this.views,
      this.itemWidth,
      this.animVal,
      this.deviceWidth
    );

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
          {scrollableItemsObject.views}
        </ScrollView>
        <View
          style={[
            scrollableBarStyle.scrollableBarsContainer,
            baseStyle.centerItems
          ]}
        >
          {scrollableItemsObject.bars}
        </View>
      </View>
    );
  }
}

export default RouteDetailsWrapper;
