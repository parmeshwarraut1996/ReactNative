import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Style from '../../src/stylesheet.js'
import Registration from '../components/registration.js';


export default class RegistrationPage extends React.Component {
    render() {
        
        return (
            <Registration/>
        );
    }
}

