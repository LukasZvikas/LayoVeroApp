import { StyleSheet } from "react-native";
import {
  centerItems,
  mainShadow,
  alignCenter
} from "../../../../../../styles/commonStyles";

export default StyleSheet.create({
  iconItemView: {
    borderRadius: 20,
    width: 160,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    ...centerItems,
    ...mainShadow
  },

  iconImageView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 100 + "%",
    height: 130
  },
  iconImage: {
    width: 100,
    height: 110,
    resizeMode: "contain"
  },
  starMainView: {
    flexDirection: "row",
    width: 100 + " %",
    marginTop: 5
  },

  starView: {
    justifyContent: "space-around",
    ...alignCenter,
    margin: 4
  },
  cityName: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold"
  }
});
