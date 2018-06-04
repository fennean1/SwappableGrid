import React, { Component } from "react";
import ReactNative from "react-native";
import SwappableGrid from "../components/SwappableGrid";
import Dimensions from "Dimensions";

var GameScreen = require("../components/GameScreen");

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Image,
  ImageBackground
} = ReactNative;

import { TabNavigator, StackNavigator } from "react-navigation";

const Grid = ({ navigation, screenProps }) => {
  return <GameScreen navigation={navigation} screenProps={screenProps} />;
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Grid />;
  }
}

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 200,
    justifyContent: "center",
    backgroundColor: "#2c3e50"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff"
  },
  container: {
    height: 350,
    width: 350,
    backgroundColor: "#f21859"
  }
});

module.exports = AppContainer;
