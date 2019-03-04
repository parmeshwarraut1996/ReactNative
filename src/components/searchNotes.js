
import React, { Component } from 'react';
import { View, Image, TouchableOpacity,Text,TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import styles from '../stylesheet.js'


export default class SearchNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''

        }
        console.disableYellowBox = true;


    }

    render() {


        return (
            <View style={styles.containerMain}>
                  
                        <View style={{ flexDirection: 'row'}}>
                        
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("notes")}>
                                <Image source={require('../assets/back.png')}
                                    style={styles.IconArrow} />

                            </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                                <TextInput placeholder="search your notes"
                                    onChangeText={(input) => this.setState({ input })}>

                                </TextInput>
                                </View>
                                
                     </View>
                    
                
            </View>


        )
    }
}
