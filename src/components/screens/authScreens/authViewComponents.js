import React from "react";
import { TextInput, Text } from "react-native";
import emailValidation from "../../../utilities/emailValidation";
import { AuthLowerView } from "./authLowerView";
import { authStyle } from "../../../styles/authStyle";

export const ButtonCheck = ({
  authAction,
  emailErrorAction,
  navigateTo,
  email,
  password
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
      <AuthLowerView
        action={checkEmail()}
        nav={navigateTo}
        buttonName={"Sign In"}
        middleNavLinkName={"Sign Up"}
        disabled={false}
        opacity={1}
      />
    );
  }
  return (
    <AuthLowerView
      disabled={true}
      opacity={0.5}
      buttonName={"Sign In"}
      middleNavLinkName={"Sign Up"}
      nav={navigateTo}
    />
  );
};

export const ErrorCheck = ({ error }) => {
  const isError = () => {
    if (error)
      return <Text style={{ color: "red", fontSize: 15 }}>{error}</Text>;
    if (error === null) return <Text> </Text>;

    return <Text> </Text>;
  };
  return isError();
};

// export const EmailInput = ({state, isError, clearErrors}) => {

//   return (
//     <TextInput
//       placeholder="Enter your email"
//       placeholderTextColor="#009092"
//       style={authStyle.fieldInput}
//       onChangeText={text => {
//         this.setState({ email: text });
//         if (isError) {
//           clearErrors
//         }
//       }}
//     />
//   );
// };
