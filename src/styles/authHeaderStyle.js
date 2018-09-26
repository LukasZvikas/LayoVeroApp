import { StyleSheet } from "react-native";
export const authHeader = (width, height) =>
  StyleSheet.create({
    mainView: {
      alignItems: "center",
      justifyContent: "center",
      width: width + width * 0.15,
      height: height * 0.33,
      borderBottomRightRadius: width + width * 0.6,
      borderBottomLeftRadius: width + width * 0.6,
      zIndex: 2
    },

    logoAndNameView: {
      marginTop: 60,
      position: "absolute",
      top: 50,
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

    extendedHeaderView: {
      width: 100 + "%",
      height: 120 + "%",
      borderBottomRightRadius: width + width,
      borderBottomLeftRadius: width + width,
      position: "absolute",
      zIndex: 1
    },
    backgroundImage: {
      zIndex: 2,
      width: width + 40,
      height: height * 0.5
    }
  });
