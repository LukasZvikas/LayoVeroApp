import { StyleSheet } from "react-native";
import {
  centerItems,
  alignCenter
} from "../../../../../../styles/commonStyles";

export default StyleSheet.create({
  starMainView: {
    flexDirection: "row",
    width: 100 + " %",
    marginTop: 5,
    ...centerItems
  },

  starView: {
    justifyContent: "space-around",
    ...alignCenter,
    margin: 4
  }
  // cityName: {
  //   textAlign: "center",
  //   marginTop: 15,
  //   fontSize: 30,
  //   fontWeight: "bold"
  // }
});
