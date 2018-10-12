import React, { Component } from "react";
import { Animated, View, ScrollView, Text, Dimensions } from "react-native";
import { scrollableBarStyle } from "../../../../../styles/indexDashboard/scrollableBar";
import { baseStyle } from "../../../../../styles/base";
import { Button } from "../../../../customUiComponents/button";
import { RouteAbout } from "./routeAbout";
import { RouteNotes } from "./routeNotes";
import { RouteMap } from "./routeMap";
import getScrollableItems from "./getScrollableItems";

class RouteDetailsWrapper extends Component {
  constructor(props) {
    super(props);

    this.numItems = 3;
    this.itemWidth = 80;
    this.animVal = new Animated.Value(0);
    this.deviceWidth = Dimensions.get("window").width;
    this.deviceHeight = Dimensions.get("window").height;

    this.views = [
      <RouteAbout
        image={this.props.navigation.state.params.image}
        name={this.props.navigation.state.params.name}
        about={this.props.navigation.state.params.about}
        action={() => this.props.navigation.goBack()}
        width={{ width: this.deviceWidth }}
      />,
      <RouteNotes
        info={[
          {
            heading: "Before Layover",
            text: this.props.navigation.state.params.before
          },
          {
            heading: "During Layover",
            text: this.props.navigation.state.params.during
          },
          {
            heading: "After Layover",
            text: this.props.navigation.state.params.after
          }
        ]}
        width={{ width: this.deviceWidth }}
      />,
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
      <View style={[baseStyle.centerItems]}>
        <ScrollView
          style={{ height: this.deviceHeight }}
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
        <View style={{ position: "absolute", bottom: 55 }}>
          <Button
            action={() => this.props.navigation.goBack()}
            buttonName={"Back"}
          />
        </View>
      </View>
    );
  }
}

export default RouteDetailsWrapper;
