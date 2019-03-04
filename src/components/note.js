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


export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Description: '',
            Pin: false,
            Archive: false,
            reminder: '',
            color: '',
            collaborator: [],
            label: [],
            Trash: false,
            Image: '',
            openMore: false,
            openExtra: false

        }
        console.disableYellowBox = false;
        this.handleReminderNote = this.handleReminderNote.bind(this);
        this.handleMore = this.handleMore.bind(this);
        this.handleExtra = this.handleExtra.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.getLabel = this.getLabel.bind(this);
        this.getCollaborator = this.getCollaborator.bind(this);
    }

    handleReminderNote(rem) {



        this.setState({
            reminder: rem

        })

    }
    handleColor(clo) {
        this.setState({ color: clo })
    }
    handleMore(event) {
        event.preventDefault();

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

        this.setState({
            Title: '',
            Description: ''
        })
        if (this.state.Title !== '' && this.state.Description !== '') {

            console.log("label in note ----- " + this.state.label);
            console.log("collaborator in note --- " + this.state.collaborator);
            console.log("collaborator in note --- " + this.state.color);

            insertNotes(this.state.Title, this.state.Description, this.state.reminder, this.state.collaborator, this.state.color, this.state.Image, this.state.Archive, this.state.Pin, this.state.Trash, this.state.label);
            Snackbar.show({
                title: "Note added",
                duration: Snackbar.LENGTH_LONG,
                action: {
                    title: "success",
                    color: 'green'
                }

            });
            this.props.navigation.navigate("notes");
        }
        else {
            Snackbar.show({
                title: "Empty note discarded",
                duration: Snackbar.LENGTH_SHORT
            })
        }

    }
    getLabel(label) {
        this.setState({
            label: label
        })
        console.log("label in note ----- " + this.state.label);

    }
    getCollaborator(collaborator) {
        this.setState({
            collaborator: collaborator
        })
        console.log("collaborator in note --- " + this.state.collaborator);


    }
    handleArchive(event) {
        event.preventDefault();
        this.setState({
            Archive: !this.state.Archive
        })
    }
    handlePin(event){
        event.preventDefault();
        this.setState({
            Pin:!this.state.Pin
        })

    }


    render() {

        var labelArray = this.state.label.map((option) => {
            return (
                <View>
                    <Chip mode='outlined'
                        style={{ margin: 5, width: 180 }}>{option}
                    </Chip>
                </View>
            )
        })
        var collaboratorArray = this.state.collaborator.map((option) => {
            return (
                <View>

                    <Image style={styles.IconCollaborator} source={require('../assets/add-collaborator.png')}
                    />


                </View>
            )
        })
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
                            {this.state.Pin ? (
                                <View style={{ marginLeft: 10 }}>
                                    <TouchableOpacity onPress={(event)=>this.handlePin(event)}>
                                        <Image source={require('../assets/fillpin.png')}
                                            style={styles.Icon} />

                                    </TouchableOpacity>
                                </View>
                            ) : (
                                    <View style={{ marginLeft: 10 }}>
                                    <TouchableOpacity onPress={(event)=>this.handlePin(event)}>
                                            <Image source={require('../assets/pin.png')}
                                                style={styles.Icon} />

                                        </TouchableOpacity>
                                    </View>
                                )}
                            <Reminder r={this.handleReminderNote} />
                            {this.state.Archive ?
                                (
                                    <View style={{ marginLeft: 10 }}>
                                        <TouchableOpacity onPress={(event) => this.handleArchive(event)}>
                                            <Image source={require('../assets/unarchive.png')}
                                                style={styles.Icon} />

                                        </TouchableOpacity>
                                    </View >
                                )
                                : (<View style={{ marginLeft: 10 }}>
                                    <TouchableOpacity onPress={(event) => this.handleArchive(event)}>
                                        <Image source={require('../assets/archive.png')}
                                            style={styles.Icon} />

                                    </TouchableOpacity>
                                </View >
                                )}

                        </View >
                    </View>
                    <View>

                        <View style={{ padding: 10 }}>
                            <TextInput
                                placeholder="Title"
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
                <View style={{ justifyContent: 'space-between' }}>
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

                    <View>
                        {labelArray}
                    </View>

                    <View>
                        {collaboratorArray}

                    </View>
                </View>


                <ExtraComponent e={this.state.openExtra} />

                <More m={this.state.openMore}
                    c={this.handleColor}
                    l={this.getLabel}
                    collab={this.getCollaborator}

                />


                <View style={styles.containerMain}></View>
                <View style={styles.bottomMore}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

                        <View>
                            <TouchableOpacity onPress={(event) => this.handleExtra(event)}>
                                <Image style={styles.IconExtra}
                                    source={require('../assets/box.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={(event) => this.handleMore(event)}>
                                <Image style={styles.IconExtra}
                                    source={require('../assets/more.png')} />

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        )
    }

}