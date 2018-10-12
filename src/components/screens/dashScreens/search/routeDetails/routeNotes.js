import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { baseStyle } from "../../../../../styles/base";
import { routeNotesStyle } from "../../../../../styles/indexDashboard/routeNotes";
import RequiredAssets from "../../../../requiredImages";
import { Button } from "../../../../customUiComponents/button";

export const RouteNotes = ({ info, action, width }) => {
  return (
    <View style={[baseStyle.mainView, width]}>
      <View style={routeNotesStyle.flatListWrapperView}>
        <FlatList
          data={info}
          renderItem={({ item }) => {
            return (
              <View key={item.heading} style={routeNotesStyle.flatListItemView}>
                <Text style={routeNotesStyle.flatListItemHeading}>
                  {item.heading}
                </Text>
                <Text style={routeNotesStyle.flatListItemText}>
                  {item.text}
                </Text>
              </View>
            );
          }}
          style={routeNotesStyle.flatListStyle}
          keyExtractor={item => item.heading}
        />
      </View>
    </View>
  );
};
