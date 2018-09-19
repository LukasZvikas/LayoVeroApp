// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Text, View, TextInput, FlatList } from "react-native";
// // import { style } from "../../../styles/indexAfterLogin";
// import { baseStyle } from "../../../styles/base";
// import { getCities } from "../../../actions/routeActions";
// import { style } from "../../../styles/authStyle";

// class FilterFirst extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { showSearchIcon: true };
//   }
//   static navigationOptions = {
//     header: null,
//     headerLeft: null
//   };

//   getItemLayout = (data, index) => (
//     { length: 50, offset: 50 * index, index }
//   ) 

//   renderCities = () => {
//     return (
//       <FlatList
//         data={this.props.cities}
//         getItemLayout = {this.getItemLayout}
//         initialScrollIndex={9}
//         renderItem={({ item }) => {
//           console.log("Item", item.city);
//           return (
//             <Text
//               style={{
//                 fontSize: 15,
//                 height: 45,
//                 width: 280,
//                 borderWidth: 1.2,
//                 borderColor: "#686868",
//                 borderRadius: 22,
//                 paddingLeft: 10,
//                 margin: 10
//               }}
//               key={item}
//             >
//               {item}
//             </Text>
//           );
//         }}
//       />
//     );
//   };

//   areCitiesAvailable = () => {
//     if (this.props.cities == undefined) {
//       return <Text> Loading... </Text>;
//     } else {
//       return this.renderCities();
//     }
//   };

//   componentDidMount() {
//     this.props.getCities();
//   }
//   render() {
//     console.log(this.props.cities);
//     return (
//       <View
//         style={{
//           alignItems: "center",
//           height: 100 + "%",
//           width: 100 + "%",
//           backgroundColor: "#fff",
//           paddingTop: 100
//         }}
//       >
//         <View
//           style={{
//             height: 50 + "%",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           {this.areCitiesAvailable()}
//         </View>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     cities: state.routes.citiesArray
//   };
// };

// export default connect(mapStateToProps, { getCities })(FilterFirst);
