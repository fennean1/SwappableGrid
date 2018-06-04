import React, { Component } from "react";
import ReactNative from "react-native";
import SwappableGrid from "../components/SwappableGrid";
import Dimensions from "Dimensions";

var HomeScreen = require("../components/HomeScreen");
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

const Game = ({ navigation, screenProps }) => {
  return <GameScreen navigation={navigation} screenProps={screenProps} />;
};

const Home = ({ navigation, screenProps }) => {
  return <HomeScreen navigation={navigation} screenProps={screenProps} />;
};

const AppNavigator = StackNavigator({
  Root: {
    screen: Home,
    navigationOptions: {
      title: "title",
      header: null
    }
  },
  GameScreen: {
    screen: Game,
    navigationOptions: {
      title: "Play!",
      header: null
    }
  }
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppNavigator screenProps={this.props} />;
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
