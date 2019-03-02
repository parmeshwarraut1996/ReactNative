import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../stylesheet.js'
import ColorPalette from './colorpalette.js';
import EditColorPalette from './editColorPalette.js';

import Snackbar, { LENGTH_SHORT } from 'react-native-snackbar';
import { trashNote, deleteNotes } from '../services/databasecontroller.js';


export default class EditMore extends Component {
    constructor() {
        super();
        this.state = {
            color: '',
            trash: false

        }

        this.editHandleColor = this.editHandleColor.bind(this);

    }

    async editHandleColor(color, note, key) {


        await this.setState({
            color: color
        })

        this.props.c(this.state.color, note, key)



    }
    deleteNote(note, key) {
        deleteNotes(note, key);
        Snackbar.show({
            title: "note deleted",
            duration: Snackbar.LENGTH_SHORT,
            action: {
                title: "DELETE",
                color: 'yellow'
            }
        })


    }
    trashNote(note, key) {

        this.setState({
            trash: !this.state.trash
        })
        if (this.state.trash === true) {
            Snackbar.show({
                title: "note move to trash",
                duration: Snackbar.LENGTH_SHORT,
                action: {
                    title: "TRASH",
                    color: 'yellow'
                }
            })
        }else{
            Snackbar.show({
                title: "note restored",
                duration: Snackbar.LENGTH_SHORT,
                action: {
                    title: "TRASH",
                    color: 'yellow'
                }
            })
        }
        trashNote(note, key);
        this.props.navigation.navigate("notes");

    }

    render() {

        let a = this.props.m ? styles.MoreSroll : styles.closeMore;
        return (
            <View>
                {!this.props.noteData.Trash ?
                    (
                        <ScrollView>
                            <View style={a}>

                                <View style={styles.MoreComponents}>

                                    <TouchableOpacity onPress={() => this.trashNote(this.props.noteData, this.props.index)}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.IconMore}

                                                source={require('../assets/trash.png')} />

                                            <Text style={styles.IconMoreComp}>Delete</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.MoreComponents}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.IconMore}
                                            source={require('../assets/share.png')} />

                                        <Text style={styles.IconMoreComp}>Share</Text>
                                    </View>
                                </View>
                                <View style={styles.MoreComponents}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.IconMore}
                                            source={require('../assets/collaborator.png')} />

                                        <Text style={styles.IconMoreComp}>Collaborator</Text>
                                    </View>
                                </View>
                                <View style={styles.MoreComponents}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.IconMore}
                                            source={require('../assets/arrow.png')} />
                                        <Text style={styles.IconMoreComp}>label</Text>
                                    </View>
                                </View>

                                <EditColorPalette editColorCode={this.editHandleColor}
                                    note={this.props.noteData}
                                    index={this.props.index}
                                />
                            </View>

                
                        </ScrollView>
                        
                    ) :
                    (
                        <ScrollView>
                            <View style={a}>

                                <View style={styles.MoreComponents}>
                                    <TouchableOpacity onPress={() => this.trashNote(this.props.noteData, this.props.index)}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.IconMore}
                                                source={require('../assets/restore.png')} />

                                            <Text style={styles.IconMoreComp}>Restore</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>


                                <View style={styles.MoreComponents}>

                                    <TouchableOpacity onPress={() => this.deleteNote(this.props.noteData, this.props.index)}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.IconMore}

                                                source={require('../assets/trash.png')} />

                                            <Text style={styles.IconMoreComp}>Delete forever</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>




                            </View>


                        </ScrollView>
                    )}
            </View>
        );
    }
}