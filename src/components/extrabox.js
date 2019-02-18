import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Picker, StyleSheet, ScrollView } from 'react-native';
import styles from '../stylesheet.js'


export default class ExtraComponent extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        let b = this.props.e ? styles.MoreSroll : styles.closeMore;
        return (

            <ScrollView>
                <View style={b}>

                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/image1.png')} />

                            <Text style={styles.IconMoreComp}>Choose image</Text>
                        </View>
                    </View>
                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/drawing.png')} />

                            <Text style={styles.IconMoreComp}>Drawing</Text>
                        </View>
                    </View>
                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/mic.png')} />

                            <Text style={styles.IconMoreComp}>Recording</Text>
                        </View>
                    </View>
                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/checkbox.png')} />
                            <Text style={styles.IconMoreComp}>Checkboxs</Text>
                        </View>
                    </View>

                </View>


            </ScrollView>

        );
    }
}