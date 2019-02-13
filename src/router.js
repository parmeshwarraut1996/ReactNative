import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./components/login";
import Registration from "./components/registration";
import ForgetPassword from "./components/forgetpassword";
import Dashboard from "./components/dashboard";

const AppNavigator = createStackNavigator(
    {
        login: Login,
        registration:Registration,
        forget:ForgetPassword,
        dashboard:Dashboard
        
    },
    {
        initialRouteName: "login"
    }
);

export default createAppContainer(AppNavigator);