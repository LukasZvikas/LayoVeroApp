import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { dashStyle } from "../../../styles/indexAfterLogin";
import { baseStyle } from "../../../styles/base";
import { Button } from "../../customUiComponents/button";
import BigBen from "../../../assets/icons/London/bigBen.png";

class RouteDetails extends Component {
  render() {
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
            <Text style={{ fontSize: 16 }}>About</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>Notes</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>Map</Text>
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
            source={BigBen}
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
          <Text style={{ fontWeight: "bold" }}>Big Ben</Text>
        </View>

        <View style={{width: 85+"%", marginTop: 5}}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 15,
              marginBottom: 5,
     
            }}
          >
            Big Ben
          </Text>
          <Text style={{lineHeight: 20, fontSize: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque, odio nec scelerisque ultricies, arcu metus mattis quam,
            vitae lacinia ex nulla eu lectus. Mauris ullamcorper a leo vitae
            luctus. Donec dictum, sem id laoreet pellentesque, massa quam
            eleifend risus, id congue quam lacus nec ante. Proin sit amet purus
            vel sem malesuada feugiat faucibus sit amet eros. Nam ante augue,
            ultrices et lacus eu, dapibus molestie nisl. Quisque porttitor
            feugiat ligula in maximus. Praesent erat nunc, tincidunt id
            pellentesque eu, tempor tincidunt tortor.
          </Text>
        </View>

        <Button buttonName={"Back"} />
      </View>
    );
  }
}

export default RouteDetails;
