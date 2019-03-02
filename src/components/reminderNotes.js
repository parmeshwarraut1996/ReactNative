import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import styles from '../stylesheet.js'
import { NoteView } from './noteview.js';
import { DrawerActions } from "react-navigation";

import DisplayCards from './displayCards.js';
import { getNotes } from '../services/databasecontroller.js';

export default class ReminderNotes extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            notes: []

        }
        console.disableYellowBox = true;
    }
    componentDidMount() {
        getNotes(NoteList => {
            if (NoteList) {
                this.setState({
                    notes: NoteList
                })


            }


            else {
                this.setState({
                    notes: []
                })
            }
        })
    }
    static navigationOptions = {

        drawerLabel: 'Reminder',
        drawerIcon: ({ tintColor }) => (
            
            <Image source={require('../assets/reminderplus.png')}
            style={styles.Icon} />
    
        
        ),
    };


    navigateNote(event) {

        // var u=AsyncStorage.getItem('userkey');


        // console.log("Email   dfs====" + email_id);
        //  console.log("user key fsf====" + a);
        this.props.navigation.navigate("note");

    }
    gridView(event) {
        this.setState({
            open: !this.state.open
        })


    }
    openD() {
        this.props.navigation.openDrawer()
    }



    render() {
        var noteArray = [];
        noteArray = Object.keys(this.state.notes).map((note) => {
            var key = note;
            var NoteData = this.state.notes[key];
            if ((NoteData.Reminder !== '')) {
                return (
                    <DisplayCards note={NoteData}
                        index={key}
                        g={this.state.open}
                        navigation={this.props.navigation}
                    />
                )
            }
        })

        return (
            <View style={styles.containerMain}>
                <View>
                    <Card containerStyle={{ borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TouchableOpacity
                                onPress={() => {this.props.navigation.dispatch(DrawerActions.openDrawer())}}>

                                <Image source={require('../assets/menu.png')}
                                    style={styles.Icon} />
                            </TouchableOpacity>

                            <Text>Reminder </Text>
                            {this.state.open ?
                                (<View>
                                    <TouchableOpacity onPress={(event) => this.gridView(event)}>
                                        <Image source={require('../assets/list.png')}
                                            style={styles.Icon} />
                                    </TouchableOpacity>
                                </View>
                                ) : (
                                    <View>
                                        <TouchableOpacity onPress={(event) => this.gridView(event)}>
                                            <Image style={styles.Icon}
                                                source={require('../assets/grid.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )}
                        </View>
                    </Card>
                </View>

                <ScrollView >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {noteArray}
                    </View>
                </ScrollView>



            </View>


        );
    }
}
