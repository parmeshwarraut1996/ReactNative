
import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from './src/router.js'
import Style from './src/stylesheet.js'
import LoginPage from './src/pages/loginpage.js';
import Dashboard from './src/components/dashboard.js';

//import Login from './src/components/login.js';




const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
   
    return (
    
 <Dashboard/>
      




      
    );
  }
}


