import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from "../../../styles/authStyle";
import { baseStyle } from "../../../styles/base";
import { LinearGradient, SecureStore } from "expo";
import layoveroLogo from "../../../assets/images/layovero.png";
import { connect } from "react-redux";
import { SignInAction } from "../../../actions/authActions";
import { Facebook, Google } from "../../svg";
import { NavigationActions } from "react-navigation";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  isSignedIn = async () => {
    await SecureStore.getItemAsync("jwt").then(token => {
      if (token != null) this.props.navigation.navigate("afterAuth");
    });
  };

  async componentDidMount() {
    this.isSignedIn();
  }

  render() {
    return (
      <View style={baseStyle.mainView}>
        <Image
          style={{ width: 90, height: 90, marginBottom: 60 }}
          source={layoveroLogo}
        />
        //////////SIGNIN FIELDS
        <View style={(style.inputView, { padding: 20 })}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#686868"
            style={style.fieldInput}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          {/*<View style={style.FieldBottom} />*/}
        </View>
        <View style={style.inputView}>
          <TextInput
            placeholder="Password (6+ characters)"
            placeholderTextColor="#686868"
            style={style.fieldInput}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
          {/*<View style={style.FieldBottom} />*/}
        </View>
        <TouchableOpacity
          style={style.signinButton}
          onPress={() => {
            this.props.SignInAction(this.state.email, this.state.password);
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#009092" }}>
            Sign in
          </Text>
        </TouchableOpacity>
        ////////////////////////////////////////////////// 
        //////////MIDDLE LINE
        <View style={style.middleLineView}>
          <View style={style.middleLinePosition} />
          <Text style={style.middleLineMargin}>or</Text>
          <View style={style.middleLinePosition} />
        </View>
        ////////////////////////////////////////////////// 
        //////////OAUTH
        <TouchableOpacity style={style.buttonViewFb} onPress={this.onPress}>
          <View style={style.buttonView}>
            <View style={style.buttonIconView}>
              <Facebook />
            </View>
            <Text style={style.buttonText}>Sign in with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonViewGoogle} onPress={this.onPress}>
          <View style={style.buttonView}>
            <View style={style.buttonIconView}>
              <Google />
            </View>
            <Text style={style.buttonText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        //////////////////////////////////////////////////
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSigned: state.auth.authenticated
  };
};

export default connect(null, { SignInAction })(Login);
