
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from './src/router.js'



const AppContainer = createAppContainer(AppNavigator );


export default class App extends Component {

  render() {
   
    return (
      <AppContainer/>
 
    );
  }
}


