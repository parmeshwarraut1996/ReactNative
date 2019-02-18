import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import styles from '../stylesheet.js'
import { NoteView } from './noteview.js';

export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            open: false

        }
        console.disableYellowBox = true;
    }

    navigateNote(event) {
        this.props.navigation.navigate('note');
    }
    gridView(event) {
        this.setState({
            open:!this.state.open
        })
        
        
    }

    render() {
        return (
            <View style={styles.containerMain}>
                <View>
                    <Card containerStyle={{ borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../assets/menu.png')}
                                        style={styles.Icon} />
                                </TouchableOpacity>
                            </View>
                            <Text>Search your notes </Text>
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
                            <View>
                                <Avatar rounded title=""
                                    overlayContainerStyle={{ backgroundColor: 'orange' }} />
                            </View>
                        </View>
                    </Card>
                </View>
                <ScrollView style={styles.containerMain}>
                    <NoteView g={this.state.open}/>
                </ScrollView>
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


        );
    }
}