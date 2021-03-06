import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, Animated, PanResponder } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import styles from '../stylesheet.js'

import { DrawerActions } from "react-navigation";

import DisplayCards from './displayCards.js';
import { getNotes } from '../services/databasecontroller.js';
import Profile from './profile.js';

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            notes: [],
            showProgessbar: true,
            pan: new Animated.ValueXY()

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
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                showProgessbar: false
            })

        }, 2000);

    //     this._panResponder = PanResponder.create({
    //         onPanResponderGrant: (e, gestureState) => {
    //             this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
    //         },
    //         onPanResponderMove: Animated.event([
    //           null, {dx: this.state.pan.x, dy: this.state.pan.y},
    //         ]),
      
    //         onPanResponderRelease: (e, {vx, vy}) => {
    //           this.state.pan.flattenOffset()
    //         }
    //   });
    }

    navigateNote(event) {

        this.props.navigation.navigate("note");

    }
    gridView(event) {
        this.setState({
            open: !this.state.open
        })


    }
    static navigationOptions = {
        drawerLabel: 'Notes',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/note.png')}
                style={[styles.Icon, { tintColor: tintColor }]}
            />
        ),
    };




    render() {
        var noteArray = [];
        var pinArray = [];
        var DATA = []
        var noteCount = 0;
        var pinCount = 0;
        var archiveCount = 0;
        var trashCount = 0;
        noteArray = Object.keys(this.state.notes).map((note) => {
            var key = note
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
        // DATA = noteArray.map((_, i) => ({
        //     id: `item_${i}`,
        //     height: Math.round(Math.random() * 100 + 50),

        // }))
        Object.keys(this.state.notes).map((note) => {
            var key = note
            var NoteData = this.state.notes[key];
            if ((NoteData)) {
                noteCount++;
            }
        })
        Object.keys(this.state.notes).map((note) => {
            var key = note;
            var NoteData = this.state.notes[key];
            if ((NoteData.Pinned === true)) {
                pinCount++;
            }
        })
        Object.keys(this.state.notes).map((note) => {
            var key = note;
            var NoteData = this.state.notes[key];
            if ((NoteData.Trash === true)) {
                trashCount++;
            }
        })
        Object.keys(this.state.notes).map((note) => {
            var key = note;
            var NoteData = this.state.notes[key];
            if ((NoteData.Archive === true)) {
                archiveCount++;
            }
        })
        pinArray = Object.keys(this.state.notes).map((note) => {
            var key = note;
            var NoteData = this.state.notes[key];
            if ((NoteData.Pinned === true)) {

                return (

                    <DisplayCards note={NoteData}
                        index={key}
                        g={this.state.open}
                        navigation={this.props.navigation}
                    />

                )
            }
        });
        // const panStyle = {
        //     // transform: this.state.pan.getTranslateTransform()
        //     transform:this.state.pan.getTranslateTransform()
        // }


        return (
            <View style={styles.progressBar}>
                {this.state.showProgessbar ?
                    <ActivityIndicator size="large" color="green" />


                    : <View style={styles.containerMain}>

                        <View>
                            <Card containerStyle={{ borderRadius: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}>

                                        <Image source={require('../assets/menu.png')}
                                            style={styles.Icon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("search")}>
                                        <Text>Search your notes </Text></TouchableOpacity>
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
                                                    <Image style={styles.IconArrow}
                                                        source={require('../assets/grid.png')}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )}

                                    <Profile notes={noteCount}
                                        pin={pinCount}
                                        trash={trashCount}
                                        archive={archiveCount} />

                                </View>
                            </Card>
                        </View>

                        {/* <MasonryList
                            data={DATA}
                            renderItem={({ item }) => <Cell item={item} />}
                            getHeightForItem={({ item }) => item.height + 2}
                            numColumns={2}
                        /> */}
                        {/* <Animated.View
                            {...this._panResponder.panHandlers}
                        > */}

                        <ScrollView >


                            {pinArray !== null ?
                                (<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                                    {noteArray}

                                </View>
                                ) : (
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <Text>Pinned</Text>
                                        {pinArray}
                                    </View>)}


                        </ScrollView>
                        {/* </Animated.View> */}

                        <View style={styles.b}>
                            {/* <Card containerStyle={styles.bottomView}> */}
                            <View style={styles.FirstAndLast}>
                                <View>

                                    <TouchableOpacity onPress={(event) => this.navigateNote(event)}>
                                        <Text style={styles.margin}
                                        >
                                            Take a note...
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.FirstAndLast} >
                                    <View style={styles.margin}>
                                        <TouchableOpacity onPress={this.onPress}>
                                            <Image style={styles.Icon}
                                                source={require('../assets/checkbox.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.margin}>
                                        <TouchableOpacity onPress={this.onPress}>
                                            <Image style={styles.Icon}
                                                source={require('../assets/drawing.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.margin}>
                                        <TouchableOpacity onPress={this.onPress}>
                                            <Image style={styles.Icon}
                                                source={require('../assets/mic.jpg')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.margin}>
                                        <TouchableOpacity onPress={this.onPress}>
                                            <Image style={styles.Icon}
                                                source={require('../assets/image1.png')}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                            {/* </Card> */}
                        </View>

                    </View>
                }
            </View>

        );
    }
}
