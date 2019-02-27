import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import styles from '../stylesheet.js'



export default class Collaborator extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            collab:[],
            collaborator:''

        }
        this.openCollaborator = this.openCollaborator.bind(this);
        this.closeCollaborator = this.closeCollaborator.bind(this);
    }
    openCollaborator = () => {
        this.setState({
            open: true
        })


    }
    closeCollaborator() {
        this.setState({
            open: false
        })
        this.props.collaborator(this.state.collab)
    }
   async sendNote(event) {
        var arr=[];
        arr=this.state.collab;
        arr.push(this.state.collaborator)
       await this.setState({
            collab:arr
        })
    }

    render() {
        var arrCollaborator = this.state.collab.map((option) => {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={styles.IconExtra} source={require('../assets/arrow.png')} />
                    <Text>{option}</Text>
                </View>
            );
        })
        return (



            <View style={styles.MoreComponents}>
                <TouchableOpacity onPress={(event) => this.openCollaborator(event)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.IconMore}
                            source={require('../assets/collaborator.png')} />

                        <Text style={styles.IconMoreComp}>Collaborator</Text>

                    </View>
                </TouchableOpacity>


                <View>
                    <Modal visible={this.state.open}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <View>
                                <TouchableOpacity onPress={(event) => this.closeCollaborator(event)}>
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
                            <View>
                                {arrCollaborator}
                            </View>
                        </View>


                    </Modal>

                </View>


            </View>


        );
    }
}