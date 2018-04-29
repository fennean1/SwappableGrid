/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  PanResponder,
  Image,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

// import Number from './Number';
import Draggable from './Draggable';
import Tile from './Tile';
// import Viewport from './app/Viewport';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import imageType from '../components/ImageTypes';



class TileData {

  constructor(img,index, key) {

    this.index = index;
    this.fadeAnimation = new Animated.Value(1);
    this.key = key;
    this.location = new Animated.ValueXY;
    this.imageType = img;
    this.scale = new Animated.Value(1);
    this.view = <Image source={img} style = {styles.tile}/>

  }


    setView(imageType) {

          this.imageType = imageType
          this.view = <Image source={imageType} style = {styles.tile}/>

    }


}

var cancelTouches = false


export default class Swappables extends Component<{}> {

  constructor(props){
      super(props);

      this.state = {
          origin: [0,0],
          width: 0,
          height: 0,
          tileComponents: [[]],
          tileDataSource: [[new TileData]],
          topMargin: this.props.topMargin,
          JamJarLocation: new Animated.ValueXY,
          JamJarComponent: <View/>,
          JamJarScaleX: new Animated.Value(1),
          JamJarScaleY: new Animated.Value(1),
          JamJar: imageType.REDJAM
      };

    }


    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

  onSwipe(gestureName, gestureState) {


    let initialGestureX = gestureState.x0
    let initialGestureY = gestureState.y0

    // Need to get convert location of swipe to an index.


    let i = Math.round((initialGestureX-this.state.origin[0]-0.5*TILE_WIDTH)/TILE_WIDTH)
    let j = Math.round((initialGestureY-this.state.topMargin-this.state.origin[1]-0.5*TILE_WIDTH)/TILE_WIDTH)


    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:

        console.log('An upward swipe has been registered')

        if (j>0) {
          this.updateGrid(i,j,0,-1)
        }

        break;
      case SWIPE_DOWN:

      console.log('A downward swipe has been registered')

      if (j<4) {

      this.updateGrid(i,j,0,1)

    }

        break;
      case SWIPE_LEFT:

      console.log('A left swipe has been registered')

      if (i > 0) {
      this.updateGrid(i,j,-1,0)
    }

        break;
      case SWIPE_RIGHT:

      console.log('A right swipe has been registered')

      if (i<4) {
      this.updateGrid(i,j,1,0)
    }
        break;
    }
  }


  // Determines if the tile at location i,j has a neighbor of the same color.
  hasNeighbor(i,j) {

      var {tileDataSource} = this.state

      let hasANeighbor = false
      var neighbors = Array()

      let l = 1
      let r = 1
      let u = 1
      let d = 1

      if (i <= 0) {
        l = 0
      }

      if (i >= 4) {
        r = 0
      }

      if (j <= 0)
      {
        u = 0
      }

      if (j>=4) {
        d = 0
      }

      let spots = [l,r,u,d]
      let spotsLength = spots.length


      // Checking for edge cases.
      for (let m = 0; m < spotsLength; m++) {
        if (spots[m] != 0 ) {
          // left
          if (m == 0) {
            neighbors.push(tileDataSource[i-1][j])
          }
          // right
          if (m == 1) {
            neighbors.push(tileDataSource[i+1][j])
          }
          // up
          if (m == 2) {
            neighbors.push(tileDataSource[i][j-1])
          }
          // down
          if (m == 3) {
            neighbors.push(tileDataSource[i][j+1])
          }
        }

      }
      var neighborsLength = neighbors.length

      for (var n  = 0; n < neighborsLength; n++) {

      if (neighbors[n].imageType == tileDataSource[i][j].imageType) {

          hasANeighbor = true

      }

    }

    return hasANeighbor

}



pushTileDataToComponent() {

  var a = []
  // This creates the array of Tile components that is stored as a state variable
  this.state.tileDataSource.map((row,i) => {

    let rows = row.map((e,j) => {

    a.push( <Tile update = {this.updateGrid.bind(this)}
    location = {e.location} scale = {e.scale} fadeAnimation = {e.fadeAnimation} key = {e.key} subview = {e.view} />)
    })
    // This is where the error occurs where an element no longer receives touches.
    // Don't wrap this in a view.
    return
    rows})

    this.setState({tileDataSource: a})

}

  animateMatch(indexesToAnimate) {


                  let len = indexesToAnimate.length


                  for (var n = 0; n<len; n++) {

                    let e = indexesToAnimate[n]

                    let i = e[0]
                    let j = e[1]


                    let dx = TILE_WIDTH*2
                    let dy = TILE_WIDTH*6

                    Animated.sequence([
                    //Animated.timing(this.state.tileDataSource[i][j].scale, {toValue: 1.05, duration: 5, friction: 5}),
                    //Animated.spring(this.state.tileDataSource[i][j].scale, {toValue: 1, friction: 5}),
                    Animated.delay(500),
                    Animated.timing(this.state.tileDataSource[i][j].scale,{toValue: 1.2,duration: 300}),
                    Animated.timing(this.state.tileDataSource[i][j].scale,{toValue: 0,duration: 500}),
                    Animated.timing(this.state.tileDataSource[i][j].fadeAnimation,{toValue: 0.4,duration: 1000}),
                    ],
                  ).start(() => {

                    //this.state.tileDataSource[i][j].location.setValue({x: 0, y: -500});
                    //this.processNewMatch(indexesToAnimate)

                  });

                }

                this.pushTileDataToComponent()





  }

// Completes the rendering logic for the JamJar component. DEPRECATED
makeJamJar() {

  let [translateX, translateY] = [this.state.JamJarLocation.x, this.state.JamJarLocation.y];
  let scale = this.state.JamJarScaleX


  let jar = <View style = {styles.jamJarWrapper}> <Animated.View style = {{transform: [scale]}} >
            <Image source = {imageType.REDJAM} style = {styles.jamJar} />
    </Animated.View></View>

    this.state.JamJarLocation.setValue({x: 0, y: 0})
    this.state.JamJarLocation.setOffset({x: TILE_WIDTH*2, y: TILE_WIDTH*2})
    this.state.JamJarLocation.flattenOffset()

}



animateJamJar() {

  Animated.parallel([
    Animated.spring(this.state.JamJarScaleY,{toValue: 1.2, friction: 1}),
    Animated.spring(this.state.JamJarScaleX,{toValue: 1.2, friction: 1})
  ]).start()

}

  updateGrid(i,j,dx,dy) {

          let doesTheStartColorAllHaveNeighbors = false
          let doesTheEndColorAllHaveNeighbors = false
          let indexesWithStarterColor = [[]]
          let indexesWithEnderColor = [[]]
          var jamToJam = imageType.REDJAM


            const newData = this.state.tileDataSource
            const newComponents = this.state.tileComponents

            const swapStarterComponent = this.state.tileComponents[i][j]
            const swapEnderComponent = this.state.tileComponents[i+dx][i+dy]

            const swapStarter = this.state.tileDataSource[i][j]
            const swapEnder = this.state.tileDataSource[i+dx][j+dy]


            let firstJamToJam = this.state.tileDataSource[i][j].imageType
            let secondJamToJam = this.state.tileDataSource[i+dx][j+dy].imageType


            newData[i][j] = swapEnder
            newData[i+dx][j+dy] = swapStarter


            this.setState({tileDataSource: newData})

            indexesWithStarterColor = this.getIndexesWithColor(this.state.tileDataSource[i][j].imageType)
            indexesWithEnderColor = this.getIndexesWithColor(this.state.tileDataSource[i+dx][j+dy].imageType)

            doesTheStartColorAllHaveNeighbors = this.allHaveNeighbors(indexesWithStarterColor)
            doesTheEndColorAllHaveNeighbors = this.allHaveNeighbors(indexesWithEnderColor)

            // Kinda clunky but it works.
            if (doesTheEndColorAllHaveNeighbors) {


                this.props.bounceHead(firstJamToJam)
                this.processNewMatch(indexesWithEnderColor)
                this.animateMatch(indexesWithEnderColor)

              }

              if (doesTheStartColorAllHaveNeighbors)
              {

                this.props.bounceHead(secondJamToJam)
                this.processNewMatch(indexesWithStarterColor)
                this.animateMatch(indexesWithStarterColor)

              }



}

allHaveNeighbors(indexes) {


  let len = indexes.length

  let theyAreAllNeighbors = true

  for (var n = 0; n < len; n++) {

    let i = indexes[n][0]
    let j = indexes[n][1]

      if (this.hasNeighbor(i,j) == false)
      {
        theyAreAllNeighbors = false
      }

  }

  return theyAreAllNeighbors

}

componentDidUpdate() {

      this.animateValuesToLocations()

}

  componentWillMount(){


    // Really dumb grid - does not need to have any values. Just so we can run map.
    let keys =  [[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24]]

        var tileData = keys.map((row,i) => {

          let dataRows = row.map((key,j) => {

            let beans = [imageType.BLUEJELLYBEAN,imageType.PINKJELLYBEAN,imageType.PURPLEJELLYBEAN,imageType.YELLOWJELLYBEAN,imageType.ORANGEJELLYBEAN,imageType.GREENJELLYBEAN,imageType.REDJELLYBEAN]

            let randIndex = this.getRandomInt(7)

            let data = new TileData(beans[randIndex],[i,j],key)

          return data})

          return dataRows})

      this.setState({tileDataSource: tileData})

    }

    onLayout(event) {

      console.log('onLayout event',event.nativeEvent)

      // Why is this not giving me the correct layout props? This -2 is just a hack to make it work.
      this.setState({origin: [event.nativeEvent.layout.x,event.nativeEvent.layout.y]})

    }


    componentDidMount()
    {


      var a = []
      // This creates the array of Tile components that is stored as a state variable
      this.state.tileDataSource.map((row,i) => {

        let rows = row.map((e,j) => {

        a.push( <Tile update = {this.updateGrid.bind(this)}
        location = {e.location} scale = {e.scale} key = {e.key} subview = {e.view} />)
        })
        // This is where the error occurs where an element no longer receives touches.
        // Don't wrap this in a view.
        return
        rows})

        this.setState({tileComponents: a})

    }

    // Gets all indexes with a specific color.
    getIndexesWithColor(color) {

      let colorIndexes = new Array()

      let x = this.state.tileDataSource.map((row,i) => {

              let colorRow = row.map((e,j) => {

                if (e.imageType == color) {
                  colorIndexes.push([i,j])
                }

              })

        })
        return colorIndexes
      }




    // Animates the values in the tile data source based on their index in the array.
    animateValuesToLocations()
    {
            this.state.tileDataSource.map((row,i)=> {

              row.map((elem,j) => {

                Animated.spring(            //Step 1
                    elem.location,         //Step 2
                    {toValue: {x: TILE_WIDTH*i,y: TILE_WIDTH*j} }     //Step 3
                ).start()

                Animated.timing(elem.scale,{toValue: 1,duration: 500}).start()
            })
    })

  }


    processNewMatch(neighbors) {

      this.setState((previousState) => {

        var x = previousState.tileDataSource.map((row,i) => {

          let y = row.map((e,j) => {

            let beans = [imageType.BLUEJELLYBEAN,imageType.PINKJELLYBEAN,imageType.PURPLEJELLYBEAN,imageType.YELLOWJELLYBEAN,imageType.ORANGEJELLYBEAN,imageType.GREENJELLYBEAN,imageType.REDJELLYBEAN]

            let randIndex = this.getRandomInt(7)

            let element = [i,j]

            let x = neighbors.filter(e => {return (i==e[0] && j==e[1])})

            if (x.length != 0)
            {
              e.setView(beans[randIndex])
              return e
            }
            else {
              return e
            }
          })

          return y})

        return {tileDataSource: x}})

}


  render(){


    const config = {
      velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

      return (
          <View style = {styles.container} onLayout = {this.onLayout.bind(this)} >
              <View>
                <GestureRecognizer config = {config} style = {styles.gestureContainer}
                  onSwipe = {(direction, state) => this.onSwipe(direction, state)}>
                      {this.state.tileComponents}
                </GestureRecognizer>
              </View>
          </View>
      );
  }


}


let Window = Dimensions.get('window');
let windowSpan = Math.min(Window.width,Window.height)
let TILE_WIDTH = windowSpan/6;

let blue = '#4286f4'
let red = '#f24646'
let yellow = '#faff7f'
let green = '#31a51a'
let orange = '#ff7644'
let pink = '#ff51f3'


let styles = StyleSheet.create({
    backGroundImage: {
      flex: 1,
      width: 300,
      height: 300,
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    mainView: {
      flex: 1,
      alignItems: 'center'
    },

    gestureContainer: {
      flex: 1,
    },
    container: {
      width: TILE_WIDTH*5,
      height: TILE_WIDTH*5,
      backgroundColor: red,

},
    tile      : {
      width               : TILE_WIDTH,
      height              : TILE_WIDTH,
    }
});
