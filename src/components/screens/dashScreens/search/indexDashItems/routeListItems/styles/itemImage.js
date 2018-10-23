import { StyleSheet } from "react-native";
import {
  centerItems,
  justifyFlexEnd,
  alignCenter,
  mainColorBackground
} from "../../../../../../styles/commonStyles";

export default StyleSheet.create({
  iconImageView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 100 + "%",
    height: 130,
    ...justifyFlexEnd,
    ...alignCenter,
    ...mainColorBackground
  },
  iconImage: {
    width: 100,
    height: 110,
    resizeMode: "contain",
    ...justifyFlexEnd
  }
});
