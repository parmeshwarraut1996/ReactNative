import React, { Component } from 'react';
import { Text, View, Button, TextInput,ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../stylesheet.js'
import { TextField } from 'react-native-material-textfield';
import getData from '../services/databasecontroller.js';
import Snackbar from 'react-native-snackbar';



export default class Registration extends Component {
    constructor() {
        super();
        this.state = {
            txtFirstName: '',
            txtLastName: '',
            txtEmailId: '',
            txtPassword: '',
            txtConfirm: '',
            txtContactNumber: '',
            errFirstName: '',
            errLastName: '',
            errEmailId: '',
            errPassword: '',
            errConfirm: '',
            errContactNumber: '',
            check: false,
            visible: false,
            message: ''


        }

    }
    validate = () => {

        console.log('in vaildate of registration ', this.state.txtFirstName)

        console.log("in validate");
        var flag = false;
        /*
    array for errors to be displayed
        */
        const error = {
            errFirstName: '',
            errLastName: '',
            errEmailId: '',
            errPassword: '',
            errConfirm: '',
            errContactNumber: '',
        }
        /*
        coondition for blank firstname
        */
        if (this.state.txtFirstName.length === 0) {
            flag = true;
            console.log(this.state.txtFirstName)

            error.errFirstName = "*firstname should not be blank";

            console.log(error.errFirstName)
        }
        /* coondition for entering only alphabets  in TextField
        */
        if (!/[a-zA-Z]+$/.test(this.state.txtFirstName)) {

            {
                flag = true;
                error.errFistName = " * enter alphabets only ";
                console.log(error.errFirstName);
            }
        }

        /*
        coondition check to check length of password and it must be more than 5
        */

        if (this.state.txtPassword.length < 7) {
            flag = true;
            error.errPassword = "*password must be more than 5 characters*";
            console.log(error.errPassword)
        }
        /*
        /*
        coondition for blank TextField
        */



        if (this.state.txtLastName.length === 0) {
            flag = true;
            error.errLastName = "*lastname should not be blank*"
            console.log(error.errLastName)
        }

        /*
        to compare values of password and confirm password validation
        */
        if (this.state.txtPassword !== this.state.txtConfirm) {
            flag = true;
            error.errConfirm = "* password and confirm password does not match "
            console.log(error.errConfirm);
        }

        /**
         * validation for email adresss
         */

        if (this.state.txtEmailId.indexOf("@") === -1) {
            flag = true;
            error.errEmailId = "* requires valid email";
        }
        if (this.state.txtEmailId.indexOf('.') === -1) {
            flag = true;
            error.errEmailId = "*requires valid email"
        }

        /*
         condition for taking number of 10 digits only*/
        if (this.state.txtContactNumber.length !== 10) {
            flag = true;
            error.errContactNumber = "*length must be of 10 digits*"
            console.log(error.errContactNumber)

        }
        /*
    condition for entering only number in  this text TextField
        */
        if (!/^[0-9]*$/.test(this.state.txtContactNumber)) {
            flag = true
            error.errContactNumber = "enter digits only"
        }

        /*
        set the same state in which page is
        */
        this.setState({
            ...this.setState,
            ...error
        })
        return flag; //value returned for futher validation
    }
    onSubmit = async event => {
        if (!this.validate()) {
            var a = await getData(this.state.txtFirstName, this.state.txtLastName, this.state.txtEmailId, this.state.txtPassword, this.state.txtConfirm, this.state.txtContactNumber);
            console.log("aaaaa-----", a);

            if (a !== undefined && a !== '') {
                Snackbar.show({
                    title: "Unsuccessful registration",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'failed',
                        color: 'red',
                        onPress: () => { },
                    },

                })



            }


            else {

                Snackbar.show({
                    title: "Successful registration",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'success',
                        color: 'green',
                        onPress: () => { },
                    },

                })

                this.setState({
                    txtFirstName: '',
                    txtLastName: '',
                    txtEmailId: '',
                    txtPassword: '',
                    txtConfirm: '',
                    txtContactNumber: '',

                });

                this.props.navigation.navigate('login');


            }

        }
        else {

            Snackbar.show({
                title: "Enter valid data",
                duration: Snackbar.LENGTH_SHORT,
                action: {
                    title: "error",
                    color: 'red',
                    onPress: () => { },
                }
            })
        }


    }





    render() {
        return (
            <ScrollView>

            <View>

                <Card>

                    <View style={{ padding: 50 }}>

                        <View style={styles.reg}>
                            <View style={styles.FirstAndLast}>
                                <View>
                                    <View style={{ width: 120 }}>
                                        <TextField
                                            // style={styles.txtBorder}
                                            textContentType='name'
                                            placeholder='First Name'
                                            value={this.state.txtFirstName}
                                            error={this.state.errFirstName}
                                            onChangeText={(txtFirstName) => this.setState({ txtFirstName })}



                                        />
                                    </View>
                                </View>
                                <View style={{ width: 120 }}>
                                    <View
                                        style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <TextField
                                            // style={styles.txtBorder}
                                            textContentType='name'
                                            placeholder='Last Name'
                                            value={this.state.txtLastName}
                                            error={this.state.errLastName}
                                            onChangeText={(txtLastName) => this.setState({ txtLastName })}


                                        />
                                    </View>
                                </View >
                            </View>
                            <View>
                                <TextField
                                    // style={styles.txtBorder}
                                    textContentType='emailAddress'
                                    placeholder='Email'
                                    value={this.state.txtEmailId}
                                    error={this.state.errEmailId}
                                    onChangeText={(txtEmailId) => this.setState({ txtEmailId })}


                                />
                            </View>
                            <View>

                                <TextField
                                    //style={styles.txtBorder}
                                    textContentType='password'
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    value={this.state.txtPassword}
                                    error={this.state.errPassword}
                                    onChangeText={(txtPassword) => this.setState({ txtPassword })}


                                />
                            </View>
                            <View >

                                <TextField
                                    //style={styles.txtBorder}
                                    textContentType='password'
                                    placeholder=' Confirm Password'
                                    secureTextEntry={true}
                                    value={this.state.txtConfirm}
                                    error={this.state.errConfirm}
                                    onChangeText={(txtConfirm) => this.setState({ txtConfirm })}


                                />
                            </View>
                            <View>
                                <TextField
                                    //style={styles.txtBorder}
                                    textContentType='telephoneNumber'
                                    placeholder='Contact Number'
                                    value={this.state.txtContactNumber}
                                    error={this.state.errContactNumber}
                                    onChangeText={(txtContactNumber) => this.setState({ txtContactNumber })}


                                />
                            </View>

                            <View style={{ flexDirection: 'row', }} >
                                <View style={styles.btnReg}>
                                    <Button title='register' onPress={(event) => this.onSubmit(event)}
                                    >
                                    </Button>
                                </View>
                            </View>



                        </View>
                    </View>


                </Card>
            </View>
            </ScrollView>
        );
    }

}