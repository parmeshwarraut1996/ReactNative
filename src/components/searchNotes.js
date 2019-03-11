
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
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
            filterArray: [],
            text: '',
            isSearching: false

        }
        console.disableYellowBox = true;


    }
    componentDidMount() {
        getNotes(NoteList => {
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
        var NoteData = [];
        if (text.toString().length >= 1) {
            this.setState({ isSearching: true });
            var noteData = Object.keys(this.state.notes).map((note) => {

                var key = note;
                NoteData.push(this.state.notes[key]);
                const newData = NoteData.filter(function (item) {
                    return item.Title.toLowerCase().contains(text.toLowerCase()) || item.Title.toLowerCase().contains(text.toLowerCase());
                });
                this.setState({
                    filterArray: newData,
                });

            })
        } else {
            this.setState({ isSearching: false });
        }

    }

    render() {

        var finalArray = !this.state.isSearching ? this.state.notes : this.state.filterArray;

        return (
            <View style={styles.containerMain}>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("notes")}>
                        <Image source={require('../assets/back.png')}
                            style={styles.IconArrow} />

                    </TouchableOpacity>
                    <View style={{ marginLeft: 20 }}>
                        <TextInput placeholder="search your notes"
                            // value={this.state.text}
                            onChangeText={(text) => { this.filterSearch(text) }}

                        >
                        </TextInput>
                    </View>


                </View>

                <ScrollView>
                    <View>
                        {Object.keys(finalArray).map((note) => {
                            var key = note;
                            var NoteData = finalArray[key];
                            return (

                                <DisplayCards note={NoteData}
                                    index={key}
                                    g={this.state.open}
                                    navigation={this.props.navigation}
                                />

                            )
                        }
                        )
                        }
                    </View>
                </ScrollView>

            </View>


        )
    }
}