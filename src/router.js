import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer} from "react-navigation";
import Login from "./components/login";
import Registration from "./components/registration";
import ForgetPassword from "./components/forgetpassword";
import Dashboard from "./components/dashboard";
import Notes from "./components/note";

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
    forget : {
        screen:ForgetPassword,
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
   

},
 {
        initialRouteName: "login",

    },

    // {

    //     login: Login,
    //     registration:Registration,
    //     forget:ForgetPassword,
    //     dashboard:Dashboard,
    //     note:Notes


    // },
    // {
    //     initialRouteName: "login",

    // },


);

export default createAppContainer(AppNavigator);