import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Style from '../../src/stylesheet.js'
import ForgetPassword from '../components/forgetpassword.js';

export default class ForgetPasswordPage extends React.Component {
    render() {

        return (
            <ForgetPassword />
        );
    }
}

