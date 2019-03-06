import React, { Component } from 'react';
import styles from '../stylesheet'
import { Pimport React, { Component } from 'react';
import styles from '../stylesheet'
import { Platform, ProgressBarAndroid, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import storageRef from '../services/firebase'



export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            modal: false,
            ImageSource: null,

        }
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this)
    }
    async    componentDidMount() {


        var myarray = await AsyncStorage.getItem('data')
        let user = JSON.parse(myarray)
        var email = user.email
        var first = user.fname
        var last = user.lname
        console.warn('e,maiul--' + email)
        var refurl = await storageRef.storageRef.child('/profile/' + this.state.email).getDownloadURL().then(function (url) {
            console.log('download url ' + url);

        }, function (error) {
            console.warn(error);
        });
        console.log('urld in did--' + refurl)
        this.setState({
            email: email,
            lastname: last,
            firstname: first,
            ImageSource: this.url,


        })
    }
    closeModal() {
        this.setState({
            modal: false
        })
    }
    async handleModal() {
        console.warn('in modal 1---' + this.state.modal)
        await this.setState({
            modal: true
        })
        console.warn('in modal 2---' + this.state.modal)

    }
    addImage() {
        ImagePicker.showImagePicker(options, (Response) => {
            console.log('in image picker' + Response)
        })
    }
    // closeModal() {
    //     this.setState({
    //         modal: false
    //     })
    //     //this.props.close(this.state.modal)
    // }


    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
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
                    ImageSource: source
                })
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };


                var blob = new Blob([this.state.ImageSource], { type: "image/jpeg" });
                var storageUrl = '/profile' + this.state.firstname;

                var storeref = storageRef.storageRef.child('/profile/' + this.state.email).put(blob)
                // storageRef.storageRef.put(blob)


            }



        });
    }
    render() {
        // const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        // const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        // const pieData = data
        //     .filter(value => value > 0)
        //     .map((value, index) => ({
        //         value,
        //         svg: {
        //             fill: randomColor(),
        //             onPress: () => console.log('press', index),
        //         },
        //         key: `pie-${index}`,
        //     }))
        //  console.log('image uri'+this.state.ImageSource)
        return (
            <View>
                <View>

                    <View>
                        <TouchableOpacity onPress={() => this.handleModal()}>
                            <Avatar rounded size='small' source={this.state.ImageSource} ></Avatar>
                        </TouchableOpacity>
                    </View>
                    <Modal style={{ height: '50%', flex: 0 }} visible={this.state.modal}
                        animationType="slide"
                        transparent={false}>
                        <View style={{ marginTop: 50 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                                {/* <Image style={{height:20,width:20}} source={this.state.ImageSource}/> */}
                                <Avatar rounded size='large' source={this.state.ImageSource} ></Avatar>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                                        <Text>
                                            {this.state.firstname}
                                            {this.state.lastname}
                                        </Text>

                                    </View>
                                    <Text>
                                        {this.state.email}
                                        {/* {this.state.ImageSource} */}
                                    </Text>
                                </View>
                            </View>
                            <Button title='change picture' onPress={() => this.selectPhotoTapped()}></Button>
                            <Button title='close' onPress={() => this.closeModal()}></Button>
                          


                        </View>
                    </Modal>
                </View>
             
            </View>
        )
    }
} 







import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import styles from '../stylesheet.js'
import { getNotes } from '../services/databasecontroller.js';
import { Card, ListItem } from 'react-native-elements';
import DisplayCards from './displayCards.js';





export default class SearchNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            notes: [],
            filterArray: [],
            text: '',
            isSearching: false

        }
        console.disableYellowBox = true;


    }
    componentDidMount() {
        getNotes(NoteList => {
            console.log("notelist---- " + NoteList);

            if (NoteList) {
                this.setState({
                    notes: NoteList
                })
                console.log("notes---- " + this.state.notes.Title);


            }


            else {
                this.setState({
                    notes: []
                })
            }
        })
    }



    filterSearch(text) {

        if (text.toString().length >= 1) {
            this.setState({ isSearching: true });
           var noteData=Object.keys(this.state.notes).map((note)=>{
          
            var key = note;
            var NoteData = this.state.notes[key];
            const newData = noteData.filter(function (item) {
                return item.Title.toLowerCase().contains(text.toLowerCase()) || item.Title.toLowerCase().contains(text.toLowerCase());
            });
            this.setState({
                filterArray: newData,
            });
            
        }) } else {
            this.setState({ isSearching: false });
        }

    }

    render() {
       
        var finalArray = !this.state.isSearching ? this.state.notes : this.state.filterArray;

        return (
            <View style={styles.containerMain}>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("notes")}>
                        <Image source={require('../assets/back.png')}
                            style={styles.IconArrow} />

                    </TouchableOpacity>
                    <View style={{ marginLeft: 20 }}>
                        <TextInput placeholder="search your notes"
                            value={this.state.text}
                            onChangeText={(text) => { this.filterSearch(text) }}

                        >
                        </TextInput>
                    </View>


                </View>


                <View>
                    {Object.keys(finalArray).map((note) => {
                        var key = note;
                        var NoteData = finalArray[key];
                        if ((NoteData.Trash !== true && NoteData.Archive !== true && NoteData.Pinned !== true)) {
                            return (

                                <DisplayCards note={NoteData}
                                    index={key}
                                    g={this.state.open}
                                    navigation={this.props.navigation}
                                />

                            )
                        }
                    })
                    }
                </View>

            </View>


        )
    }
}
