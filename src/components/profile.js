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
            imageSorce: null

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

        var url = await storageRef.storageRef.child('/profile/' + this.state.email).getDownloadURL().then(function (url) {


        }, function (error) {
            console.log("error" + error);

        });

        this.setState({
            firstName: fName,
            lastName: lName,
            email: email,
            imageSorce: this.url
        })


    }
    closeModal() {
        this.setState({
            open: false
        })
    }
    uploadProfilePicture() {
        const options = {
            quality: 1.0,
            maxWidth: 300,
            maxHeight: 300,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.warn('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                this.setState({
                    imageSource: source
                })

                var blob = new Blob([this.state.imageSource], { type: "image/jpeg" });
                var storageUrl = '/profile' + this.state.firstName;
                var ref = storageRef.storageRef.child('/profile/' + this.state.email).put(blob);


            }
        });
    }

    render() {


        return (
            <View>
                <TouchableOpacity onPress={(event) => this.openModal(event)}>
                    <View>
                        <Avatar
                            source={this.state.imageSource}
                            rounded
                        >
                        </Avatar>
                    </View>
                </TouchableOpacity>
                <Modal visible={this.state.open} >
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>

                        <View style={{ flexDirection: 'row' }}>

                            <Avatar size="large"
                                source={this.state.imageSource}
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
                                    <Button title="Change profile picture" onPress={() => this.uploadProfilePicture()}></Button>
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