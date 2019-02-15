import React, { Component } from 'react';
import { Text, View, Button, Image, ToastAndroid, ScrollView, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Card, Icon, Avatar } from 'react-native-elements';
import styles from '../stylesheet.js'
import { getUser, checkLogin } from '../services/databasecontroller.js';
import Snackbar, { LENGTH_SHORT } from 'react-native-snackbar';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from 'react-native-modal-datetime-picker'
import Dialog from 'react-native-dialog';

export default class Reminder extends Component {

    constructor() {
        super();

        this.state = {
            isDateTimePickerVisible: false,
            isDialogBoxVisible: false,
            PickerValue: '',
            reminder: '',
            date: '',
            time: '',
            isTimePickerVisible: false
        }
    }
    _handleTimePicker = (time) => {
        var t = "" + time;
        console.warn('time--'+t)
        this.setState({
            time: t,
            isTimePickerVisible: false
        })

    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _showTimePicker = () => this.setState({ isTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
       
        var d = "" + date;

        this.setState({
            date: d
        })
        this._hideDateTimePicker();
    };

    showDialog = () => {
        this.setState({
            isDialogBoxVisible: true
        })
    }
    handleCancel = () => {
        this.setState({
            isDialogBoxVisible: !this.state.isDialogBoxVisible
        })
    }

    handleSave = () => {
        this.setState({
            isDialogBoxVisible: !this.state.isDialogBoxVisible
        })
    }

    handleReminder(val) {
        if (val !== '') {
            this.setState({
                reminder: val,
                isDialogBoxVisible: false
            })

        }


    }


    render() {
        return (
            <View style={{ marginLeft: 10 }}>
                <TouchableOpacity onPress={(event) => this.showDialog(event)}>
                    <Image source={require('../assets/reminderplus.png')}
                        style={styles.Icon} />

                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />


                <Dialog.Container visible={this.state.isDialogBoxVisible}>

                    <Dialog.Title> Add reminder</Dialog.Title>
                    <View>

                    </View>
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, padding: 5 }}>
                        <Picker
                            style={{ width: '100%' }}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.handleReminder(itemValue)}
                        >
                            <Picker.Item label='Today' value='Today 08:00 PM' />
                            <Picker.Item label="Tomorrow" value='Tomorrow 08:00 PM' />

                        </Picker>
                        <Text>{this.state.PickerValue}</Text>
                    </View>
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 50 }}>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text style={{ marginTop: 10 }} > Pick  a  date</Text>

                        </TouchableOpacity>

                        <Text>{this.state.date}</Text>
                        <DateTimePicker
                            mode='date'
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 50 }}>
                        <TouchableOpacity onPress={this._showTimePicker}>
                            <Text style={{ marginTop: 10 }}> select time </Text>

                        </TouchableOpacity>
                        <Text>{this.state.time}</Text>
                        <DateTimePicker
                            mode='time'
                            isVisible={this.state.isTimePickerVisible}
                            onConfirm={this._handleTimePicker}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>

                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="Save" onPress={this.handleSave} />
                </Dialog.Container>

            </View>
        );
    }

}
