import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import styles from "./styles/routeList";

import RequiredAssets from "../../../../../requiredImages";
import NavigationService from "../../../../../../../NavigationService";

import ItemImage from "./itemImage.js";
import ItemDetails from "./itemDetails";
import ItemStars from "./itemStars";

const RouteList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            key={item.name}
            onPress={() => {
              NavigationService.navigate("routeDetails", {
                name: item.name,
                about: item.about,
                image: item.no,
                before: item.before,
                during: item.during,
                after: item.after
              });
            }}
            style={styles.iconItemView}
          >
            <ItemImage source={RequiredAssets[item.no]} />
            <ItemDetails name={item.name} hours={item.hours} />
            <ItemStars stars={item.stars} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.name}
      style={{ marginTop: 20, width: 100 + "%" }}
      numColumns={2}
    />
  );
};

export default RouteList;
