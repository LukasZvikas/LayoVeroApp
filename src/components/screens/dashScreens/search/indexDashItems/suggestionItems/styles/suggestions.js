import { StyleSheet } from "react-native";
import {
  centerItems,
  flexRow,
  justifyFlexStart,
  justifyCenter
} from "../../../../../../styles/commonStyles";

export default StyleSheet.create({
  mainView: {
    position: "absolute",
    top: 60,
    width: 80 + "%"
  },
  itemView: {
    borderBottomWidth: 1.2,
    borderBottomColor: "#D3D3D3",
    marginTop: 0,
    marginTop: 30,
    ...flexRow,
    ...justifyFlexStart
  }
});
