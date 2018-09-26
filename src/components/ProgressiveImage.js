import React, { Component } from "react";
import { Animated, View, Text } from "react-native";

class ProgressiveImage extends Component {
  constructor(props) {
    super(props);
    this.state = { thumbnailOpacity: new Animated.Value(0) };
  }

  onLoad = () => {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: 250
    }).start();
  };

  onThumbnailLoad = () => {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
      duration: 250
    }).start();
  };

  render() {
    return (
      <View style={this.props.heightAndWidth}>
        <Animated.Image
          resizeMode={"cover"}
          key={this.props.key}
          style={[{position: "absolute"},this.props.style]}
          source={this.props.source}
          onLoad={this.onLoad}
        />
        <Animated.Image
          resizeMode={"cover"}
          key={this.props.key}
          style={[{ opacity: this.state.thumbnailOpacity }, this.props.style]}
          source={this.props.thumbnail}
          onLoad={this.onThumbnailLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
