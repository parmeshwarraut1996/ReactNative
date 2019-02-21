import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator, } from "react-navigation";
import Login from "./components/login";
import Registration from "./components/registration";
import ForgetPassword from "./components/forgetpassword";
import Dashboard from "./components/dashboard";
import Notes from "./components/note";
import MyHomeScreen from "./components/home";
import MyNotificationsScreen from "./components/notification";
import SideMenu from "./components/SideMenu";
import { Drawer } from "./drawer";



const AppNavigator = createStackNavigator({


    login: {
        screen: Login,
        navigationOptions: {
            header: null
        },
    },

    registration: {
        screen: Registration,
        navigationOptions: {
            header: null
        },
    },
    forget: {
        screen: ForgetPassword,
        navigationOptions: {
            header: null
        },
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null
        },
    },
    note: {
        screen: Notes,
        navigationOptions: {
            header: null
        },
    },
    sidemenu: {
        screen:SideMenu,
        navigationOptions: {
            header: null
        },
    },



},
   

    {
        initialRouteName: "login",

    },



);

 


export default createAppContainer(AppNavigator);