import React, { Component } from "react";
import ReactNative from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import SwappableGrid from "../components/SwappableGrid";
//import {App} from './App';
import Dimensions from "Dimensions";

import ImageTypes from "../components/ImageTypes";

import { getJamJarFromBean } from "../components/JamFunctions";

var HomeScreen = require("../components/HomeScreen");

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

let floatingClouds = require("../assets/FloatingClouds.png");
let justClouds = require("../assets/CloudsBackground.png");
let backButton = require("../assets/GreenBackButton.png");
let RedJam = require("../assets/RedJam.png");
let tuffysCartoonHead = require("../assets/TuffyTile.png");
let rowOfJam = require("../assets/JarsOfJam.png");

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topMargin: 125,
      tuffysHeadScale: new Animated.Value(0),
      tuffysHeadLocation: new Animated.ValueXY(0, 0),
      jam: ImageTypes.REDJAM
    };
  }

  animateTuffysHead(jamType) {
    let x = getJamJarFromBean(jamType);

    this.setState({ jam: x });

    Animated.sequence([
      Animated.delay(200),
      Animated.spring(this.state.tuffysHeadScale, {
        toValue: 2,
        friction: 3,
        duration: 1200
      }),
      Animated.timing(this.state.tuffysHeadScale, {
        toValue: 0,
        friction: 10,
        duration: 500
      })
    ]).start();
  }

  addRecipe() {
    console.log("this.props", this.props);
    console.log("hello is thing on??");

    //this.props.myProps.addRecipe()
  }

  render() {
    const { navigate } = this.props.navigation;

    let [translateX, translateY] = [
      this.state.tuffysHeadLocation.x,
      this.state.tuffysHeadLocation.y
    ];
    let scale = this.state.tuffysHeadScale;

    return (
      <ImageBackground source={justClouds} style={styles.backGroundImage}>
        <View style={styles.topBarAndGridContainer}>
          <View style={styles.topBar} />
          <View style={styles.gridContainer}>
            <SwappableGrid
              topMargin={this.state.topMargin}
              bounceHead={this.animateTuffysHead.bind(this)}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Animated.View
            style={[{ transform: [{ translateX }, { translateY }, { scale }] }]}
          >
            <Image style={styles.tuffysHead} source={ImageTypes.CARTOONTUFFY} />
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

let Window = Dimensions.get("window");
let windowSpan = Math.min(Window.width, Window.height);
let colored = false;
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
    height: 200,
    alignItems: "center"
    //backgroundColor: orange
  },
  backGroundImage: {
    width: "100%",
    height: "100%",
    flexDirection: "column"
  },
  topBarAndGridContainer: {
    flex: 1,
    flexDirection: "column"
    //backgroundColor: pink
  },
  gridContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: blue
  },
  topBar: {
    marginTop: 50,
    height: 75
    //backgroundColor: yellow
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
    height: 100,
    width: 100
  },
  rowOfJam: {
    width: 400,
    height: 50
  }
});

module.exports = GameScreen;

// Connecting redux stuff/crap
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(state => {
  return { recipeCount: state.recipeCount };
}, mapDispatchToProps)(GameScreen);
