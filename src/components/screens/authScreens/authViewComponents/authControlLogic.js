import React from "react";
import { TextInput, Text } from "react-native";
import emailValidation from "../../../../utilities/emailValidation";
import { Button } from "../../../customUiComponents/button";
import { authStyle } from "../../../../styles/authStyle";

export const ButtonCheck = ({
  authAction,
  emailErrorAction,
  navigateTo,
  email,
  password,
  leftTitle,
  rightTitle,
  leftNav,
  rightNav,
  buttonName
}) => {
  const checkEmail = () => {
    if (emailValidation(email)) {
      console.log(authAction);
      return authAction;
    } else {
      console.log(emailErrorAction);
      return emailErrorAction;
    }
  };

  if ((email && password) !== "") {
    return (
      <Button
        action={checkEmail()}
        isDisabled={false}
        opacity={1}
        buttonName={buttonName}
      />
    );
  }
  return (
    <Button
      isDisabled={true}
      opacity={0.5}
      buttonName={buttonName}
    />
  );
};

export const ErrorCheck = ({ error }) => {
  const isError = () => {
    if (error)
      return (
        <Text style={{ color: "red", fontSize: 15, height: 20 }}>{error}</Text>
      );
    if (error === null) return <Text style={{ height: 20 }}> </Text>;

    return <Text> </Text>;
  };
  return isError();
};
