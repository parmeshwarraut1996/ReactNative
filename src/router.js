import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./components/login";
import Registration from "./components/registration";
import ForgetPassword from "./components/forgetpassword";

const AppNavigator = createStackNavigator(
    {
        login: Login,
        registration:Registration,
        forget:ForgetPassword
        
    },
    {
        initialRouteName: "login"
    }
);

export default createAppContainer(AppNavigator);