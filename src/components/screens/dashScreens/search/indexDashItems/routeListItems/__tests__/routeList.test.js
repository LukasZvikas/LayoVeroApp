import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { shallow } from "enzyme";
import RouteList from "../routeList";
import ItemImage from "../itemImage.js";
import ItemDetails from "../itemDetails";
import ItemStars from "../itemStars";

describe("RouteList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RouteList />);
  });

  it("renders FlatList", () => {
    expect(wrapper.find(FlatList)).toHaveLength(1);
  });

  it("FlatList has 2 columns", () => {
    expect(wrapper.find(FlatList).prop("numColumns")).toEqual(2);
  });

  describe("renders components when data prop is passed", () => {
    let item;
    let flatListWrapper;
    let toWrapper;
    beforeEach(() => {
      item = {
        about: "test",
        after: "test text",
        before: "test text",
        city: "London",
        during: "test text",
        name: "Downtown Tour",
        no: "1",
        stars: 4,
        _id: "5bb0e644e7179a358dc27bd3"
      };

      flatListWrapper = shallow(
        wrapper.find(FlatList).prop("renderItem")({ item })
      );
    });

    it("renders ItemImage and correct values are retrieved", () => {
      expect(flatListWrapper.find(ItemImage)).toHaveLength(1);
      expect(flatListWrapper.find(ItemImage).props()).toEqual({
        source: { testUri: "../../../src/assets/icons/London/gherkin.png" }
      });
    });

    it("renders ItemDetails and correct values are retrieved", () => {
      expect(flatListWrapper.find(ItemDetails)).toHaveLength(1);
      expect(flatListWrapper.find(ItemDetails).props()).toEqual({
        name: "Downtown Tour",
        hours: undefined
      });
    });

    it("renders ItemStars and correct values are retrieved", () => {
      expect(flatListWrapper.find(ItemStars)).toHaveLength(1);
      expect(flatListWrapper.find(ItemStars).props()).toEqual({ stars: 4 });
    });
  });
});
