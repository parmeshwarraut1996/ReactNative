import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from '../stylesheet'
import { AsyncStorage } from 'react-native';




export default class Collaborator extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            collab: [],
            collaborator: '',
            email: '',
            fName: '',
            lName: ''

        }
    console.disableYellowBox=false
        this.openCollaborator = this.openCollaborator.bind(this);
        this.closeCollaborator = this.closeCollaborator.bind(this);
        this.shareNote=this.shareNote.bind(this);
        
    }
    async componentDidMount() {
        var e = await AsyncStorage.getItem('Data');
        var email_id = JSON.parse(e);
        var a = email_id.email;
        var firstName = email_id.fname;
        var lastName = email_id.lname;
        console.warn("Email in collaborator ===== " + a);

        this.setState({
            email: a,
            fName: firstName,
            lName: lastName
        })

        console.warn("Email in collaborator ===== " + this.state.email);

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
        // this.props.collaborator(this.state.collab)
    }
   async sendNote(event) {

       await this.setState({
            open: false
        })
         this.props.collaboratorList(this.state.collab)
    }
   async shareNote(event) {
        var arr = [];
        arr = this.state.collab;
        arr.push(this.state.collaborator)
       await this.setState({
            collab: arr,
            collaborator:'',
           
        })
        console.log("arrr- - -"+this.state.collab);
        console.log("arrr label- - -"+this.state.collaborator);
        
        
    }

    render() {
        var arrCollaborator = this.state.collab.map((option) => {
            return (
                <View style={styles.MoreComponents}>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={styles.IconCollaborator} source={require('../assets/profile.png')} />
                    <Text>{option}</Text>
                </View>
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


                <Modal visible={this.state.open}>

                    <View style={{ width: '100%', padding: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <TouchableOpacity onPress={(event) => this.closeCollaborator(event)}>
                                <Image source={require('../assets/close.png')}
                                    style={styles.IconMore} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={(event) => this.sendNote(event)}>
                                <Text>
                                    SAVE
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{ padding: 20 }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <View style={styles.MoreComponents}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Image style={styles.IconCollaborator} source={require('../assets/profile.png')} />
                                    <Text> {this.state.email} </Text>


                                </View>

                            </View>
                            
                                <View style={{ flexDirection: 'column' }}>
                                    {arrCollaborator}
                                </View>
                        
                            <View style={styles.MoreComponents}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.IconCollaborator} source={require('../assets/add-user.png')} />
                                    <TextInput placeholder="Enter email to share with"
                                        value={this.state.collaborator}
                                        onChangeText={(collaborator) => this.setState({ collaborator })}></TextInput>
                                </View>
                            </View>
                            <View style={{ marginTop: 30, alignContent: 'center' }}>
                                <TouchableOpacity onPress={(event) => this.shareNote(event)}>
                                    <Image source={require('../assets/send.png')}
                                        style={{ width: '50%', height: 30 }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>



            </View >
        );
    }
}