import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import styles from '../stylesheet.js'
import { Card } from 'react-native-elements';
import { Chip } from 'react-native-paper';


export default class DisplayCards extends Component {

    constructor() {
        super();
        this.state = {

        }
    }
    openEditNotes(event){
        console.log("inde---- "+this.props.index);
        
        this.props.navigation.navigate('editnote',{key:this.props.index,noteData:this.props.note});
    }

    render() {

        const stl = this.props.g ? styles.ShowCard : styles.Showlist;
        return (



            <View style={stl}>
                <Card containerStyle={{ backgroundColor: this.props.note.Colors ,borderRadius:10}}>
                    <View>
                        <View style={{ padding: 5 }}>
                            <Text
                                onPress={(event) => this.openEditNotes(event)}

                            >{this.props.note.Title}</Text>
                        </View>

                        <View style={{ paddingLeft: 5 }}>
                            <Text

                            > {this.props.note.Description}</Text>
                        </View>
                        <View>
                            {this.props.note.Reminder ?
                                (<Chip mode='outlined'
                                    style={{ width:110 }}

                                >{this.props.note.Reminder}
                                </Chip>
                                ) : (
                                    <View>

                                    </View>
                                )
                            }
                        </View>
                    </View>

                </Card>
            </View>
        );
    }
}