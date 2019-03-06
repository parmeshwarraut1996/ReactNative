import React, { Component } from 'react';
import { Button, View, TouchableOpacity, Modal, Text } from 'react-native';
import styles from '../stylesheet.js'
import { Avatar } from 'react-native-elements';
import { AsyncStorage } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import storageRef from '../Firebase'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            firstName: '',
            lastName: '',
            email: '',
            imageSorce:''

        }
    }

    openModal(event) {
        event.preventDefault();
        this.setState({
            open: true
        })

    }
    async componentDidMount() {
        var data = await AsyncStorage.getItem('Data')
        var userDetail = JSON.parse(data);
        var fName = userDetail.firstName;
        var lName = userDetail.lastName;
        var email = userDetail.email;
        console.log("faname i before setstate--- " + fName);
        var url=await storageRef.storageRef.child('/profile/'+this.state.email).getDownloadURL().then(function(url){
            
        })

        this.setState({
            firstName: fName,
            lastName: lName,
            email: email
        })
        console.log("faname aftersetstate --- " + this.state.firstName);


    }
    closeModal() {
        this.setState({
            open: false
        })
    }

    render() {


        return (
            <View>
                <TouchableOpacity onPress={(event) => this.openModal(event)}>
                    <View>
                        <Avatar

                            rounded title=""
                            overlayContainerStyle={{ backgroundColor: 'orange' }} />
                    </View>
                </TouchableOpacity>
                <Modal visible={this.state.open} >
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>

                        <View style={{ flexDirection: 'row' }}>

                            <Avatar size="large"

                                rounded
                            />


                            <View style={{ flexDirection: 'column', padding: 20 }}>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>
                                            <Text>
                                                {this.state.firstName}
                                            </Text>
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text>
                                                {this.state.lastName}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <Text>{this.state.email}</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 50 }}>
                                    <Button title="Change profile picture"></Button>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <Button title="Close"
                                        onPress={(event) => this.closeModal(event)}>

                                    </Button>
                                </View>
                            </View>

                        </View>


                    </View>

                </Modal>




            </View>


        )
    }
}