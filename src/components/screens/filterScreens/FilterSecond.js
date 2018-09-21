import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  TouchableOpacity
} from "react-native";
import CheckBox from "./checkBox";
import { getCities } from "../../../actions/routeActions";
import { filterStyle } from "../../../styles/filterStyle";
import { baseStyle } from "../../../styles/base";
import { style } from "../../../styles/authStyle";

class FilterSecond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchIcon: true,
      pickerState: false
    };
  }
  static navigationOptions = {
    header: null,
    headerLeft: null
  };

  // renderCities = () => {
  //   const cityList = this.props.cities.map(city => {
  //     return <Picker.Item key={city} label={city} value={city} />;
  //   });
  //   return cityList;
  // };

  areCitiesAvailable = () => {
    if (this.props.cities == undefined) {
      return <Text> Loading... </Text>;
    } else {
      if (this.state.pickerState) {
        return (
          <FlatList
            style={{
              height: 150,
              width: 250,
              borderWidth: 1,
              borderColor: "#009092",

              borderTopColor: "#fff",
              backgroundColor: "#fff"
            }}
            keyExtractor={item => item}
            data={this.props.cities}
            renderItem={({ item }) => (
              <Text style={{ fontSize: 16, margin: 3 }}>{item}</Text>
            )}
          />
        );
      } else {
        return null;
      }
    }
  };

  componentDidMount() {
    this.props.getCities();
  }
  render() {
    return (
      <View style={baseStyle.mainView}>
        <View style={filterStyle.pickerView}>
          <Text style={filterStyle.mainHeadingText}>
            In order to find you the best layover, we need you to provide us
            some information
          </Text>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3
            }}
          >
            <Text style={filterStyle.secondaryHeadingText}>
              What is the city of your layover?
            </Text>

            <View style={{ position: "relative" }}>
              <Text
                onPress={() => {
                  this.setState({ pickerState: !this.state.pickerState });
                }}
                style={filterStyle.pickerInput}
              />

              <View
                style={{
                  position: "absolute",
                  top: 45,
                  left: 0,
                  right: 0,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {this.areCitiesAvailable()}
              </View>
            </View>
          </View>

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
              <CheckBox
                width={75}
                height={45}
                text={"2-4 hours"}
                checkBoxState={false}
              />
              <CheckBox
                width={75}
                height={45}
                marginForSides={12}
                text={"4-6 hours"}
                checkBoxState={false}
              />
              <CheckBox
                width={75}
                height={45}
                text={">6 hours"}
                checkBoxState={false}
              />
            </View>
          </View>

          <Text style={filterStyle.fieldBottom}> </Text>

          <View style={filterStyle.checkBoxViewCenter}>
            <Text style={filterStyle.secondaryHeadingText}>
              What would you like to do during your layover?
            </Text>

            <View style={filterStyle.activitiesCheckBoxView}>
              <CheckBox
                width={120}
                height={45}
                padding={20}
                text={"Sightseeing"}
                checkBoxState={false}
              />
              <Text style={{ marginTop: 10 }} />
              <CheckBox
                width={120}
                height={45}
                text={"Museum"}
                checkBoxState={false}
              />
            </View>
            <View style={filterStyle.activitiesCheckBoxView}>
              <CheckBox
                width={120}
                height={45}
                padding={20}
                text={"Restaurants / Bars"}
                checkBoxState={false}
              />
              <Text style={{ marginTop: 10 }} />
              <CheckBox
                width={120}
                height={45}
                text={"Parks"}
                checkBoxState={false}
              />
            </View>
            <View style={filterStyle.activitiesCheckBoxView}>
              <CheckBox
                width={120}
                height={45}
                padding={20}
                text={"Theathers"}
                checkBoxState={false}
              />
              <Text style={{ marginTop: 10 }} />
              <CheckBox
                width={120}
                height={45}
                text={"Other"}
                checkBoxState={false}
              />
            </View>
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
              Sign in
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
