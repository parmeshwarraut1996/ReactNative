/*This is an Example to Align a View at the Bottom of Screen in React Native */
import React, { Component } from 'react';
//import react in our project
import { StyleSheet, View, Text } from 'react-native';
//import all the components we will need in our project

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.containerMain}>
                <Text> Main Content Here</Text>
                <View style={styles.bottomView}>
                    <Text style={styles.textStyle}>Bottom View</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },

    textStyle: {
        color: '#fff',
        fontSize: 18,
    },
});