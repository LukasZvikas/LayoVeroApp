import { StyleSheet } from "react-native";
import {
  centerItems,
  secondaryColorBackground
} from "../../../../../../styles/commonStyles";

export default StyleSheet.create({
  itemTextView: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: 100 + "%",
    height: 40,
    flexDirection: "column",
    ...centerItems,
    ...secondaryColorBackground
  },
  iconText: {
    fontSize: 11,
    fontWeight: "bold"
  }
});
