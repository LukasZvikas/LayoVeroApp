import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Button } from "../../customUiComponents/button";
import RequiredAssets from "../../requiredImages";

class RouteDetails extends Component {
  render() {
    console.log(this.props.navigation);
    const { navigation } = this.props;
    return (
      <View style={[baseStyle.mainView, { alignItems: "center" }]}>
        <View
          style={[
            baseStyle.alignCenter,

            {
              justifyContent: "space-around",
              marginTop: 40,
              marginBottom: 15,
              height: 50,
              width: 100 + "%",
              flexDirection: "row"
            }
          ]}
        >
          <View style={{ borderBottomWidth: 2.8, borderColor: "#59c0c1" }}>
            <Text style={{ fontSize: 17 }}>About</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17 }}>Notes</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17 }}>Map</Text>
          </View>
        </View>

        <View
          style={[
            baseStyle.centerItems,
            {
              height: 170,
              width: 85 + "%",
              backgroundColor: "#59c0c1",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }
          ]}
        >
          <Image
            style={{
              height: 100 + "%",
              resizeMode: "contain"
            }}
            source={RequiredAssets[navigation.state.params.image]}
          />
        </View>
        <View
          style={[
            baseStyle.centerItems,
            {
              height: 40,
              width: 85 + "%",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              backgroundColor: "#98d3ce"
            }
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>
            {navigation.state.params.name}
          </Text>
        </View>

        <View style={{ width: 85 + "%", marginTop: 5 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 15,
              marginBottom: 5
            }}
          >
            {navigation.state.params.name}
          </Text>
          <Text style={{ lineHeight: 25, fontSize: 15 }}>
            {navigation.state.params.about}
          </Text>
        </View>

        <Button action={() => navigation.goBack()} buttonName={"Back"} />
      </View>
    );
  }
}

export default RouteDetails;
