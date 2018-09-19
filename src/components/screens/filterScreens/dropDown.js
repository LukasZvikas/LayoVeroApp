import React from "react";

export const DropDown = ({ list }) => {
  const mapOverList = () => {
    const listItems = list.map(item => {
      <Text>{item}</Text>;
    });

    return listItems;
  };

  return <View>{mapOverList()}</View>;
};
