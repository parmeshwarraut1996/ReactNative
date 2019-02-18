import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Picker, StyleSheet, ScrollView } from 'react-native';
import styles from '../stylesheet.js'



export default class More extends Component {
    constructor() {
        super();
        this.state = {

        }

    }
    render() {
        let a = this.props.m ? styles.MoreSroll : styles.closeMore;
        return (
           
                <ScrollView>
                    <View style={a}>

                        <View style={styles.MoreComponents}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.IconMore}
                                    source={require('../assets/trash.png')} />

                                <Text style={styles.IconMoreComp}>Delete</Text>
                            </View>
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

                   </View>


                </ScrollView>
          
        );
    }
}