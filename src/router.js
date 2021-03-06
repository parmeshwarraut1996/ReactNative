import React from "react";

import { createStackNavigator,createAppContainer  } from "react-navigation";
import Login from "./components/login";
import Registration from "./components/registration";
import ForgetPassword from "./components/forgetpassword";
import Dashboard from "./components/dashboard";
import Notes from "./components/note";

import drawerContainer from './components/drawer.js'
import EditNote from "./components/editnote";
import Collaborator from "./components/collaborator";

import SearchNotes from "./components/searchNotes";



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
    // dashboard: {
    //     screen: Dashboard,
    //     navigationOptions: {
    //         header: null
    //     },
   // },
    note: {
        screen: Notes,
        navigationOptions: {
            header: null
        },
    },
   
    editnote:{
        screen:EditNote,
        navigationOptions:{
            header:null
        }
    },
    collaborator:{
        screen:Collaborator,
        navigationOptions:{
            header:null
        }
    },
    search:{
        screen:SearchNotes,
        navigationOptions: {
            header: null
        },
    },

    drawerScreen:{
        screen:drawerContainer,
        navigationOptions:{
            header:null
        }
    },
    notes: {
        screen:Dashboard,
        navigationOpations: {
            header: null
        }
    },
    




},
   

    {
        initialRouteName: "login",

    },



);export default createAppContainer(AppNavigator);