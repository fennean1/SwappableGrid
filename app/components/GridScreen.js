import React, { Component } from "react";
import ReactNative from "react-native";
import SwappableGrid from "../components/SwappableGrid";
//import {App} from './App';
import Dimensions from "Dimensions";

import ImageTypes from "../components/Images";

import { whatIsThisImage } from "../components/GridHelpers";

const {
  View,
  Text,
  TouchableHighlight,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  Animated
} = ReactNative;

let BackGroundImage = require("../assets/BackGroundImage.jpeg");

class GridScreen extends Component {
  constructor(props) {
    super(props);

    this.tuffysHeadHeight = 50;
    this.topMargin = 125;

    this.state = {
      image: "Swipe to rearrange the Emojis!"
    };
  }

  setEmojiText(img) {
    let emojiText = whatIsThisImage(img);
    this.setState({ image: emojiText });
  }

  render() {
    return (
      <ImageBackground source={BackGroundImage} style={styles.backGroundImage}>
        <View style={styles.topBarAndGridContainer}>
          <View style={styles.topBar}>
            <Text style={styles.text}>{this.state.image}</Text>
          </View>
          <View style={styles.gridContainer}>
            <SwappableGrid
              topMargin={this.topMargin}
              setEmojiText={this.setEmojiText.bind(this)}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

let Window = Dimensions.get("window");
let windowSpan = Math.min(Window.width, Window.height);
let colored = true;
let TILE_WIDTH = windowSpan / 6;

let windowWidth = Window.width;
let windowHeight = Window.height;

let blue = colored ? "#4286f4" : "#ffffff";
let red = colored ? "#f24646" : "#ffffff";
let yellow = colored ? "#faff7f" : "#ffffff";
let green = colored ? "#31a51a" : "#ffffff";
let orange = colored ? "#ff7644" : "#ffffff";
let pink = colored ? "#ff51f3" : "#ffffff";

let styles = StyleSheet.create({
  footer: {
    height: 2 * TILE_WIDTH
    //backgroundColor: orange
  },
  backGroundImage: {
    width: "100%",
    height: "100%",
    flexDirection: "column"
  },
  topBarAndGridContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: pink
  },
  gridContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: blue
  },
  topBar: {
    marginTop: 50,
    height: 75,
    backgroundColor: yellow
  },
  backButton: {
    marginTop: 30,
    marginLeft: 10,
    height: windowWidth / 10,
    width: windowWidth / 10
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center"
    //color       : '#fff'
  },
  container: {
    height: 350,
    width: 350
    //backgroundColor:'#2c3e50'
  },
  tuffysHead: {
    height: 2 * TILE_WIDTH,
    width: 3 * TILE_WIDTH
    //backgroundColor: "#ffffff"
  }
});

module.exports = GridScreen;
