import React, { Component } from "react";

import { Text, TouchableOpacity } from "react-native";
import { searchBarStyle } from "../../../../../../styles/indexDashboard/searchBar";

const HelpLink = ({ action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <Text style={searchBarStyle.helpText}>Need Help Looking?</Text>
    </TouchableOpacity>
  );
};

export default HelpLink;
