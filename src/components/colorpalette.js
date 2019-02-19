import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Picker, StyleSheet, ScrollView } from 'react-native';
import styles from '../stylesheet.js';

const ColorCode=[
    {
        rgbCode: "rgb(255,255,255)",
        ColorName: "White"
    },
    {
        rgbCode: "rgb(255,0,0)",
        ColorName: "Red"
    },

    {
        rgbCode: "rgb(0,255,0)",
        ColorName: "Lime"
    },

    {
        rgbCode: "rgb(0,0,255)",
        ColorName: "Blue"
    },

    {
        rgbCode: "rgb(255,255,0)",
        ColorName: "Yellow"
    },

    {
        rgbCode: "rgb(0,255,255)",
        ColorName: "Cyan"
    },

    {
        rgbCode: "rgb(255,0,255)",
        ColorName: "Magenta"
    },

    {
        rgbCode: "rgb(128,0,0)",
        ColorName: "Maroon"
    },

    {
        rgbCode: "rgb(128,128,0)",
        ColorName: "Olive"
    },

    {
        rgbCode: "rgb(128,0,128)",
        ColorName: "Purple"
    },

    {
        rgbCode: "rgb(0,128,128)",
        ColorName: "Teal"
    },

    {
        rgbCode: "rgb(238,130,238)",
        ColorName: "Violet"
    }


]

export default class ColorPalette extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <View>

            </View>
        );
    }
}