import { StyleSheet } from "react-native";
import {
  centerItems,
  flexRow,
  justifyFlexStart,
  alignCenter
} from "../../../../../../styles/commonStyles";

export default StyleSheet.create({
  searchBarView: {
    borderWidth: 1.2,
    borderColor: "#686868",
    borderRadius: 30,
    height: 55,
    ...centerItems,
    ...flexRow
  },

  focusedSearchBarView: {
    height: 100 + "%",
    width: 100 + "%",
    ...justifyFlexStart,
  },

  searchBarWrappper: {
    width: 400,
    ...centerItems,
    ...flexRow
  },

  helpText: {
    marginTop: 12,
    fontWeight: "bold",
    color: "#686868"
  }
});
