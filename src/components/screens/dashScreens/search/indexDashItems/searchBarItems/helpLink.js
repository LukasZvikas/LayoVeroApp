import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles/helpLink";

const HelpLink = ({ action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <Text style={styles.helpText}>Need Help Looking?</Text>
    </TouchableOpacity>
  );
};

export default HelpLink;
