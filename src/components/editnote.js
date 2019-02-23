import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from '../stylesheet.js'
import Snackbar, { LENGTH_LONG } from 'react-native-snackbar';
import { TextInput } from 'react-native-gesture-handler';
import Reminder from './reminder.js';
import { Chip } from 'react-native-paper';
import More from './more.js';
import ExtraComponent from './extrabox.js';
import { insertNotes } from '../services/databasecontroller.js';


export default class EditNote extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            Title:'',
            Description:'',
           

        }
        console.disableYellowBox = true;
       
    }

    componentDidMount(){
        const { navigation } = this.props;
        const note = navigation.getParam('noteData');
        this.setState({Title:note.Title})

    }
   

    handleReminderNote(rem) {

        console.log("rem----" + rem);

        this.setState({
            reminder: rem

        })
        console.log(" this rem----" + this.state.reminder);
    }
    handleColor(color) {
        this.setState({ color: color })
    }
    handleMore(event) {
        event.preventDefault();
        console.log("in note-----");

        this.setState({
            openMore: !this.state.openMore,
            openExtra: false
        })
    }
    handleExtra(event) {
        event.preventDefault();
        this.setState({
            openExtra: !this.state.openExtra,
            openMore: false
        })


    }
    addNote() {
        console.log("color in note" + this.state.color);
        this.setState({
            Title: '',
            Description: ''
        })
        if (this.state.Title !== '' && this.state.Description !== '') {


            insertNotes(this.state.Title, this.state.Description, this.state.reminder, this.state.collaborator, this.state.color, this.state.Image, this.state.Archive, this.state.Pin, this.state.Trash, this.state.label);
            Snackbar.show({
                title: "Note added",
                duration: Snackbar.LENGTH_LONG,
                action: {
                    title: "success",
                    color: 'green'
                }

            });
            this.props.navigation.navigate("dashboard");
        }
        else {
            Snackbar.show({
                title: "Empty note discarded",
                duration: Snackbar.LENGTH_SHORT
            })
        }

    }
    render() {
        const { navigation } = this.props;
        const key = navigation.getParam('key');
        console.log("key ----- " + key);

        const note = navigation.getParam('noteData');

        console.log("notedata ----- " + note.Title);
        

        return (
            <View style={{ flex: 1, backgroundColor: this.state.color }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View>
                            <TouchableOpacity onPress={(event) => this.addNote(event)}>
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
                                value={this.state.Title}
                                onChangeText={(Title) => this.setState({ Title: Title })}
                            ></TextInput>
                        </View>

                        <View style={{ paddingLeft: 10 }}>
                            <TextInput
                                placeholder="description"
                                onChangeText={(Description) => this.setState({ Description: Description })}
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
                    c={this.handleColor}

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