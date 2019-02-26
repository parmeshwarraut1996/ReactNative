import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import styles from '../stylesheet.js'



export default class Label extends Component {
    constructor() {
        super();
        this.state = {
            open: false,

        }
        this.openCollaborator = this.openCollaborator.bind(this);
        this.closeLabel = this.closeLabel.bind(this);
    }
    openCollaborator = () => {
        this.setState({
            open: true
        })


    }
    closeLabel() {
        this.setState({
            open: false
        })
    }
    sendNote(event) {
        this.props.navigation.navigate("note");
    }

    render() {
        return (

            <View style={styles.MoreComponents}>
                <TouchableOpacity onPress={(event) => this.openCollaborator(event)}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.IconMore}
                        source={require('../assets/arrow.png')} />
                    <Text style={styles.IconMoreComp}>label</Text>
                </View>
                </TouchableOpacity>
         

                     


                <View>
                    <Modal visible={this.state.open}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <View>
                                <TouchableOpacity onPress={(event) => this.closeLabel(event)}>
                                    <Image source={require('../assets/close.png')}
                                        style={styles.IconMore} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{ height: '20%', width: '20%' }}>Collaborator</Text>
                            </View>
                            <View>
                                <Text onPress={(event) => this.sendNote(event)}>
                                    SAVE</Text>
                            </View>
                        </View>


                    </Modal>

                </View>


            </View>

   
        );
    }
}