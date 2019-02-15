import React, { Component } from 'react';
import { Text, View, Button, Image, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Card, Icon, Avatar } from 'react-native-elements';
import styles from '../stylesheet.js'
import { getUser, checkLogin } from '../services/databasecontroller.js';
import Snackbar, { LENGTH_SHORT } from 'react-native-snackbar';
import { TextInput } from 'react-native-gesture-handler';
import Reminder from './reminder.js';


export default class Notes extends Component {
    constructor() {
        super();
        this.state = {

        }
        console.disableYellowBox = true;
    }

    render() {
        return (
            <View style={styles.containerMain}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View>
                            <TouchableOpacity onPress={this.onPress}>
                                <Image source={require('../assets/back.png')}
                                    style={styles.IconArrow} />

                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginLeft: 10 }}>
                                <TouchableOpacity onPress={this.onPress}>
                                    <Image source={require('../assets/pin.png')}
                                        style={styles.Icon} />

                                </TouchableOpacity>
                            </View>
                            <Reminder/>
                            <View style={{ marginLeft: 10 }}>
                                <TouchableOpacity onPress={this.onPress}>
                                    <Image source={require('../assets/archive.png')}
                                        style={styles.Icon} />

                                </TouchableOpacity>
                            </View >
                        </View >
                    </View>
                    <View>

                        <View style={{ padding: 10 }}>
                            <TextInput
                                placeholder="Title"
                            ></TextInput>
                        </View>

                        <View style={{ paddingLeft: 10 }}>
                            <TextInput
                                placeholder="description"
                            ></TextInput>
                        </View>

                    </View>
                </View>
                <View style={styles.containerMain}></View>
                <View style={styles.bottomMore}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity onPress={this.onPress}>
                            <Image style={styles.IconExtra}
                                source={require('../assets/extra.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress}>
                            <Image style={styles.IconExtra}
                                source={require('../assets/more.jpeg')} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }

}