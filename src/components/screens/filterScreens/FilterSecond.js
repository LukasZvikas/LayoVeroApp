import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { getCities } from "../../../actions/routeActions";
import { filterStyle } from "../../../styles/filterStyle";
import { baseStyle } from "../../../styles/base";
import { style } from "../../../styles/authStyle";
import Picker from "../../customUiComponents/Picker";
import CheckBox from "../../customUiComponents/CheckBox";
import activityTypes from "./activityTypes";
import hourTypes from "./hourTypes";

class FilterSecond extends Component {
  static navigationOptions = {
    header: null,
    headerLeft: null
  };

  citiesPropsCheck = () => {
    if (this.props.cities === undefined) {
      return null;
    }

    return <Picker cities={this.props.cities} pickerState={false} />;
  };

  renderHourCheckBoxes = () => {
    const hourCheckBoxes = _.map(hourTypes, ({ label }) => {
      return (
        <View key={label}>
          <CheckBox width={75} height={45} text={label} checkBoxState={false} />
        </View>
      );
    });
    return hourCheckBoxes;
  };
  renderActivityCheckBoxes = () => {
    const activityCheckBoxes = _.map(
      activityTypes,
      ({ labelOne, labelTwo }) => {
        return (
          <View style={filterStyle.activitiesCheckBoxView} key={labelOne}>
            <CheckBox
              width={120}
              height={45}
              padding={20}
              text={labelOne}
              checkBoxState={false}
            />
            <Text style={{ marginTop: 10 }} />
            <CheckBox
              width={120}
              height={45}
              text={"labelTwo"}
              checkBoxState={false}
            />
          </View>
        );
      }
    );
    return activityCheckBoxes;
  };

  componentDidMount() {
    this.props.getCities();
  }
  render() {
    return (
      <View style={baseStyle.mainView}>
        <View style={filterStyle.marginForView}>
          <Text style={filterStyle.mainHeadingText}>
            In order to find you the best layover, we need you to provide us
            some information
          </Text>
          {this.citiesPropsCheck()}
          <Text style={filterStyle.fieldBottom}> </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1
            }}
          >
            <Text style={filterStyle.secondaryHeadingText}>
              How long is your layover?
            </Text>
            <View style={filterStyle.checkBoxViewSA}>
              ///RENDERING HOUR BOXES HERE
              {this.renderHourCheckBoxes()}
              ///
            </View>
          </View>
          <Text style={filterStyle.fieldBottom}> </Text>
          <View style={filterStyle.checkBoxViewCenter}>
            <Text style={filterStyle.secondaryHeadingText}>
              What would you like to do during your layover?
            </Text>
            ////RENDERING ACTIVITY BOXES HERE
            {this.renderActivityCheckBoxes()}
            /////
          </View>
          <TouchableOpacity
            style={style.signinButton}
            onPress={() => {
              this.props.navigation.navigate("ThirdFilter");
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#009092" }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.routes.citiesArray
  };
};

export default connect(mapStateToProps, { getCities })(FilterSecond);
