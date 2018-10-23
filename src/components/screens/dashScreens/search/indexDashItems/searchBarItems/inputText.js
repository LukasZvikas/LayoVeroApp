import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputWidth: { width: 80 + "%" }
});

const InputText = ({ onFocus, textState, onChange }) => {
  return (
    <TextInput
      style={styles.inputWidth}
      placeholder="Try London"
      onFocus={onFocus}
      value={textState}
      onChange={onChange}
    />
  );
};

export default InputText;
