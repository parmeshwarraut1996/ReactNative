import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Style from '../../src/stylesheet.js'
import Login from '../components/login.js';

 export default class LoginPage extends React.Component {
    render() {
        console.warn("in details screeen")
        return (
           <Login/>
        );
    }
}

