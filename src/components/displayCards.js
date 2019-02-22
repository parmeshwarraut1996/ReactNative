import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../stylesheet.js'
import { Card } from 'react-native-elements';
import { Chip } from 'react-native-paper';


export default class DisplayCards extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        const stl = this.props.g ? styles.ShowCard : styles.Showlist;
        return (

            <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                
                    <Card containerStyle={stl}>
                        

                            <View style={{ padding: 5 }}>
                                <Text

                                >{this.props.note.Title}</Text>
                            </View>

                            <View style={{ paddingLeft: 5 }}>
                                <Text

                                > {this.props.note.Description}</Text>
                            </View>
                            <View>
                                {this.props.note.Reminder ?
                                    (<Chip mode='outlined'
                                        style={{ width: 110 }}

                                    >{this.props.note.Reminder}
                                    </Chip>
                                    ) : (
                                        <View>

                                        </View>
                                    )
                                }
                            </View>

                        
                    </Card>
                
            </View>
        );
    }
}