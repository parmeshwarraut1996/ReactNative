import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import styles from '../stylesheet.js'
import { NoteView } from './noteview.js';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerActions } from "react-navigation";
import MyHomeScreen from './home.js';
import MyNotificationsScreen from './notification.js';
import { AsyncStorage } from 'react-native'
import DisplayCards from './displayCards.js';
import { getNotes } from '../services/databasecontroller.js';

export default class ArchiveNotes extends Component {

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

        drawerLabel: 'Archive',
        drawerIcon: ({ tintColor }) => (
            <Image source={require('../assets/archive.png')}
            style={styles.Icon} />

        ),
    };


    navigateNote(event) {

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
            if ((NoteData.Archive !== false)) {
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

                            <Text>Archive</Text>
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
