import React, { Component } from "react";
import ReactNative from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../actions/beanActions";
import SwappableGrid from "../components/SwappableGrid";
//import {App} from './App';
import Dimensions from "Dimensions";

import ImageTypes from "../components/ImageTypes";

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

let floatingClouds = require("../assets/FloatingClouds.png");
let justClouds = require("../assets/CloudsBackground.png");

const Game = ({ navigation, screenProps }) => {
  return <GameScreen navigation={navigation} screenProps={screenProps} />;
};

const Home = ({ navigation, screenProps }) => {
  return <HomeScreen navigation={navigation} screenProps={screenProps} />;
};

const PlayerTabs = TabNavigator({
  MainTab: {
    screen: Game,
    navigationOptions: {
      title: "Welcome",
      tabBarLabel: "Home",
      tabBarIcon: () => (
        <Image style={styles.tabBarIcon} source={ImageTypes.BLUEJELLYBEAN} />
      )
    }
  }
});

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
  backGroundImage: {
    width: "100%",
    height: "100%"
    //alignSelf: 'stretch'
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  dropZone: {
    flex: 1,
    height: 100,
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
  },
  tabBarIcon: {
    width: 35,
    height: 35
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#f21859",
    borderWidth: 5,
    borderColor: "#ffffff"
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(state => {
  return {
    redBeanCount: state.redBeanCount
  };
}, mapDispatchToProps)(AppContainer);
