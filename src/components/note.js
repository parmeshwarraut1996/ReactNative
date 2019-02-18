import React, { Component } from 'react';
import {View,Image, TouchableOpacity } from 'react-native';

import styles from '../stylesheet.js'

import { TextInput } from 'react-native-gesture-handler';
import Reminder from './reminder.js';
import { Chip } from 'react-native-paper';
import More from './more.js';
import ExtraComponent from './extrabox.js';


export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder: "",
            openMore: false,
            openExtra: false

        }
        console.disableYellowBox = true;
        this.handleReminderNote = this.handleReminderNote.bind(this);
        this.handleMore = this.handleMore.bind(this);
        this.handleExtra = this.handleExtra.bind(this);
    }

    handleReminderNote(rem) {

        console.log("rem----" + rem);

        this.setState({
            reminder: rem

        })
        console.log(" this rem----" + this.state.reminder);
    }
    handleMore(event) {
        event.preventDefault();
        console.log("in note-----");

        this.setState({
            openMore: !this.state.openMore,
            openExtra:false
        })
    }
    handleExtra(event) {
        event.preventDefault();
        this.setState({
            openExtra: !this.state.openExtra,
            openMore:false
        })


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
                            <Reminder r={this.handleReminderNote} />
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
                <View>
                    {this.state.reminder ?
                        (<Chip mode='outlined'
                            style={{ marginLeft: 10, width: 180 }}

                        >{this.state.reminder}
                        </Chip>
                        ) : (
                            <View>

                            </View>
                        )
                    }
                </View>


                <ExtraComponent e={this.state.openExtra} />

                <More m={this.state.openMore}
                />


                <View style={styles.containerMain}></View>
                <View style={styles.bottomMore}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                        <View>
                            <TouchableOpacity onPress={(event) => this.handleExtra(event)}>
                                <Image style={styles.IconExtra}
                                    source={require('../assets/extra.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={(event) => this.handleMore(event)}>
                                <Image style={styles.IconExtra}
                                    source={require('../assets/more.jpeg')} />

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

}