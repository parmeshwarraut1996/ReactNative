import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from '../stylesheet.js'
import Dashboard from './dashboard.js';


export default class DashboardPage extends Component {
    static navigationOptions = {
        drawerLabel: 'Notes',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/note.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (

            <Dashboard navigation={this.props.navigation} />
        )
    }
}
