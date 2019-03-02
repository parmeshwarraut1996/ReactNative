import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity,Button } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import styles from '../stylesheet.js'
import { NoteView } from './noteview.js';
export default class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/menu.png')}
                style={styles.iconsssss}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.openDrawer()}
                title="Go to notifications"
            />
        );
    }
}