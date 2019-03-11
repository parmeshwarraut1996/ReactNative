import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import styles from '../stylesheet.js'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Dialog from 'react-native-dialog';
import { editReminder } from '../services/databasecontroller.js';

export default class EditReminder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDateTimePickerVisible: false,
            isDialogBoxVisible: false,
            PickerValue: '',
            reminder: '',
            date: '',
            time: '',
            isTimePickerVisible: false
        }
        this.handleSave = this.handleSave.bind(this);
    }
    _handleTimePicker = (time) => {
        var t = "" + time;
        t = t.slice(16, 21);
        console.warn('time--' + t)
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
        d = d.slice(4, 10)
        console.log("date----" + d);


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

     async handleSave(){

        var d = this.state.date + "," + this.state.time;
        console.log("d----" + d);
       await this.setState({
            reminder: d,
            isDialogBoxVisible: !this.state.isDialogBoxVisible
        })
        // editReminder(d,this.props.noteData,this.props.index);
        this.props.varReminder(this.state.reminder,this.props.noteData,this.props.index);
        console.log("reminder----" + d);
    }

    handleReminder(val) {
        if (val !== '') {


            this.setState({
                PickerValue: val,
                // isDialogBoxVisible: false
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

                <Dialog.Container visible={this.state.isDialogBoxVisible}>

                    <Dialog.Title> Edit reminder</Dialog.Title>
                    <View>

                    </View>
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, padding: 5 }}>
                        <Picker
                            style={{ width: '100%' }}
                            selectedValue={this.state.PickerValue}
                            onValueChange={(itemValue, itemIndex) => this.handleReminder(itemValue)}
                        >
                            <Picker.Item label="" value='' />
                            <Picker.Item label="Today" value='Today 08:00 PM' />
                            <Picker.Item label="Tomorrow" value='Tomorrow 08:00 PM' />

                        </Picker>
                        <Text>{this.state.PickerValue}</Text>
                    </View>
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 50 }}>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            {this.state.date ?
                                (<Text style={{ marginTop: 10 }}>{this.state.date}</Text>
                                )
                                : (<Text style={{ marginTop: 10 }}

                                > select date </Text>
                                )}
                        </TouchableOpacity>


                        <DateTimePicker
                            mode='date'
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                    <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, height: 50 }}>
                        <TouchableOpacity onPress={this._showTimePicker}>

                            {this.state.time ?
                                (<Text style={{ marginTop: 10 }}>{this.state.time}</Text>
                                )
                                : (<Text style={{ marginTop: 10 }}

                                > select time </Text>
                                )}


                        </TouchableOpacity>

                        <DateTimePicker
                            mode='time'
                            isVisible={this.state.isTimePickerVisible}
                            onConfirm={this._handleTimePicker}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                    <Dialog.Button label="Delete" onPress={this.handleDelete} />
                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="Save" onPress={this.handleSave} />
                </Dialog.Container>

            </View>
        );
    }

}