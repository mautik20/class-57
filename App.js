import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import JokesScreen from "./screens/JokesScreen"
import HoroscopeScreen from "./screens/HoroscopeScreen"
import WheaterScreen from "./screens/WheaterScreen"
import NewsScreen from "./screens/NewsScreen"
import {createAppContainer, createSwitchNavigator} from "react-navigation"

export default class App extends React.Component {

  render() {
    return (
      <View>
        <AppContainer/>

      </View>
    );
  }
}



var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokesScreen:JokesScreen,
  HoroscopeScreen:HoroscopeScreen,
  WheaterScreen:WheaterScreen,
  NewsScreen:NewsScreen,

})

const AppContainer=createAppContainer(AppNavigator)
