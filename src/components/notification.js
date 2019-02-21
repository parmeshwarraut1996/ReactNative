import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity,Button } from 'react-native';

import styles from '../stylesheet.js'
import { NoteView } from './noteview.js';

export default  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/arrow.png')}
                style={[styles.iconsssss, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.openDrawer()}
                title="Go back home"
            />
        );
    }
}

