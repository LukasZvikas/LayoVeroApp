import { StyleSheet } from "react-native";
export const authHeader = (width, height) =>
  StyleSheet.create({
    mainView: {
      alignItems: "center",
      justifyContent: "center",
      width: width + width * 0.15,
      height: height * 0.30,
      zIndex: 2
    },

    logoAndNameView: {
      marginTop: 60,
      position: "absolute",
      top: 20 ,
      zIndex: 5,
      justifyContent: "center",
      alignItems: "center"
    },

    nameText: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff"
    },

    backgroundImage: {
      zIndex: 2,
      width: width,
      height: height * 0.5
    }
  });
