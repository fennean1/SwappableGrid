import React, { Component } from "react";
import ReactNative from "react-native";

import SwappableGrid from "../components/SwappableGrid";
//import {App} from './App';
import Dimensions from "Dimensions";

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  ImageBackground,
  Image
} = ReactNative;

//import { TabNavigator, StackNavigator } from 'react-navigation';

let playButton = require("../assets/PlayButton.png");

let BackGroundImage = require("../assets/BackGroundImage.jpeg");
let TuffyMainLogo = require("../assets/TuffyMainLogo.png");

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  testRedux() {
    this.props.screenProps.incrementRedJellyBean();

    console.log("redBeanCount", this.props.screenProps.redBeanCount);
  }

  // FOR TESTING REDUX: <Text> The Red Bean Count Is: {this.props.screenProps.redBeanCount} </Text>
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground source={BackGroundImage} style={styles.backGroundImage}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Image source={TuffyMainLogo} style={styles.backGroundImage} />
          </View>
          <TouchableHighlight
            style={styles.playbutton}
            onPress={() => navigate("GameScreen")}
          >
            <Image source={playButton} style={styles.backGroundImage} />
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

let Window = Dimensions.get("window");
let windowWidth = Window.width;
let windowHeight = Window.height;

let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: windowWidth / 5,
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    width: 0.8 * windowWidth,
    height: 0.8 * windowWidth * 0.452
    //backgroundColor:'#2c3e50'
  },
  backGroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined
  },
  playbutton: {
    marginTop: 50,
    height: windowWidth / 8,
    width: windowWidth / 3,
    alignItems: "center"
    //backgroundColor:'#2c3e50'
  }
});

module.exports = HomeScreen;
