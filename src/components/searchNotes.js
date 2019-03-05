
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import styles from '../stylesheet.js'
import { getNotes } from '../services/databasecontroller.js';
import { Card, ListItem } from 'react-native-elements';
import DisplayCards from './displayCards.js';





export default class SearchNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            notes: [],
            text: ''

        }
        console.disableYellowBox = true;


    }
    async componentDidMount() {
        await getNotes(NoteList => {
            console.log("notelist---- " + NoteList);

            if (NoteList) {
                this.setState({
                    notes: NoteList
                })
                console.log("notes---- " + this.state.notes.Title);


            }


            else {
                this.setState({
                    notes: []
                })
            }
        })
    }




    filterSearch(text) {
        var noteArray = [];
        var NoteData = [],
            noteArray = Object.keys(this.state.notes).map((note) => {
                var key = note;
                NoteData.push(this.state.notes[key]);
                console.log("filter notedata -- - " + NoteData.Title);


                const newData = NoteData.filter(function (item) {
                    const itemData = item.Title.toUpperCase()
                    const textData = text.toUpperCase()
                    return itemData.contains(textData)
                });
                this.setState({
                    
                    notes: newData ,
                    text: text,// after filter we are setting users to new array
                });
            })
    }

    render() {
        var noteArray = [];
        var pinArray = [];


        return (
            <View style={styles.containerMain}>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("notes")}>
                        <Image source={require('../assets/back.png')}
                            style={styles.IconArrow} />

                    </TouchableOpacity>
                    <View style={{ marginLeft: 20 }}>
                        <TextInput placeholder="search your notes"
                         value={this.state.text}
                            onChangeText={(text) => this.filterSearch(text)}
                    
                        >
                        </TextInput>
                    </View>


                </View>


                <View>
                    { Object.keys(this.state.notes).map((note) => {
                        var key = note;
                        var NoteData = this.state.notes[key];
                        if ((NoteData.Trash !== true && NoteData.Archive !== true && NoteData.Pinned !== true)) {
                            return (

                                <DisplayCards note={NoteData}
                                    index={key}
                                    g={this.state.open}
                                    navigation={this.props.navigation}
                                />

                            )
                        }
                    })
                    }
                </View>

            </View>


        )
    }
}
