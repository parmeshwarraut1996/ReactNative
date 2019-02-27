import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../stylesheet.js'
import Snackbar, { LENGTH_LONG } from 'react-native-snackbar';
import { TextInput } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
import More from './more.js';
import ExtraComponent from './extrabox.js';
import { editNotesData, editReminder, colorNote } from '../services/databasecontroller.js';
import EditReminder from './editReminder.js';
import EditMore from './editColor.js';


export default class EditNote extends Component {

    constructor() {

        super();
        this.state = {
            Title: '',
            Description: '',
            reminder: '',
            color: '',
            label:[],
            openMore: false,
            openExtra: false

        }
        
        this.handleReminderNote = this.handleReminderNote.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleMore=this.handleMore.bind(this);
    

    }

    componentDidMount() {
        const { navigation } = this.props;
        const note = navigation.getParam('noteData');
        this.setState({
            Title: note.Title,
            Description: note.Description,
            reminder: note.Reminder,
            color: note.Colors,
            label:note.label
        })

    }


    handleReminderNote(rem, note, key) {
           
        this.setState({
            reminder: rem

        })

        editReminder(rem, note, key)
       
    }
   async handleColor(editColor,note,key) {

        
        
       await this.setState({ color: editColor })
        colorNote(editColor,note,key);
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
    editNotes() {
        const { navigation } = this.props;
        const key = navigation.getParam('key');
        const note = navigation.getParam('noteData');
        console.log("color in note" + this.state.color);
        this.setState({
            Title: '',
            Description: ''
        })
        if (this.state.Title !== '' && this.state.Description !== '') {


            editNotesData(this.state.Title, this.state.Description, note, key);
            Snackbar.show({
                title: "Note Edited",
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
                            <TouchableOpacity onPress={(event) => this.editNotes(event)}>
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
                            <EditReminder varReminder={this.handleReminderNote}
                                noteData={note}
                                index={key} />
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
                                value={this.state.Description}
                                onChangeText={(Description) => this.setState({ Description: Description })}
                            ></TextInput>
                        </View>

                    </View>
                </View>
                <View>
                    {this.state.reminder ?
                        (<Chip mode='outlined'
                            style={{ marginLeft: 10, width: 180, backgroundColor: this.state.color }}

                        >{this.state.reminder}
                        </Chip>
                        ) : (
                            <View>

                            </View>
                        )
                    }

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {this.state.label ? (
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {this.state.label.map((option) =>

                                    <Chip mode='outlined'
                                        style={{ flexDirection: 'row', backgroundColor: this.state.color, borderColor: 'black', width: 110, margin: 5 }}
                                    > {option}</Chip>
                                )
                                }
                            </View>)
                            : (
                                <View>

                                </View>
                            )
                        }
                    </View>
                </View>




                <ExtraComponent e={this.state.openExtra} />

                <EditMore m={this.state.openMore}
                    c={this.handleColor}
                    noteData={note}
                    index={key}

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