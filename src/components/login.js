import React, { Component } from 'react';
import { Text, View, Button, Image, ToastAndroid, ScrollView } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Card } from 'react-native-elements';
import styles from '../stylesheet.js'
import { getUser, checkLogin } from '../services/databasecontroller.js';
import Snackbar, { LENGTH_SHORT } from 'react-native-snackbar';




export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            Username: '',
            Password: '',
            errUsername: '',
            errPassword: '',
            visible: false,
            message: ''

        }
        console.disableYellowBox = true;
    }


    validate = () => {
        var flag = false;

        /**
         * array of errors to define helper text
         */

        const error = {
            errUsername: "",
            errPassword: '',


        }
        /**
         * validation for empty feild
         */

        if (this.state.Username.length === 0) {
            flag = true;
            error.errUsername = 'username is empty'
        }
        // /**
        //  * validation for email adresss
        //  */
        if (this.state.Username.indexOf("@") === -1) {
            flag = true;
            error.errUsername = "* Requires valid email*";
        }
        if (this.state.Username.indexOf('.') === -1) {
            flag = true;
            error.errUsername = "* requires valid email";
        }
        /**
         * validation to check length of password that must be greater than 5
         */



        if (this.state.Password.length < 7) {
            flag = true;
            error.errPassword = "*password must have 5 characters "

        }
        /**
         * if errors are caught in validation
         * set the same state and array of erroors deisplaying error text
         */
        this.setState({
            ...this.state,
            ...error
        })
        /**
         *
         * returning flag value for futher validation
         */
        return flag;
    }

    openforgot(event) {
        this.props.navigation.navigate('forget');

    }
    navigateRegister(event) {
        this.props.navigation.navigate('registration');
    }
    onSubmit = async event => {
        // getUser(this.state.Username);

        if (!this.validate()) {
            var auth = await checkLogin(this.state.Username, this.state.Password);
            if (auth) {

                Snackbar.show({
                    title: "Login failed",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'Error',
                        color: 'red'
                    }
                })

            }
            else {
                Snackbar.show({
                    title: "Successful login",
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                        title: 'login',
                        color: 'green'
                    }
                });

                this.setState({
                    Username: '',
                    Password: ''
                })
                this.props.navigation.navigate('dashboard');

            }

           


        }
        else {
            Snackbar.show({
                title: "Enter valid data",
                duration: LENGTH_SHORT,
                action: {
                    title: 'Error',
                    color: 'red'
                }
            })


        }
    }


    render() {


        return (

            <ScrollView style={{flex:1}}>

                {/* <View style={styles.container}> */}

                    <Card>
                        <View>

                            <View style={styles.textinput}>

                                <TextField

                                    label='Username'
                                    placeholder='  @gmail.com'
                                    value={this.state.Username}
                                    error={this.state.errUsername}
                                    onChangeText={(Username) => this.setState({ Username })}


                                />


                                <TextField

                                    placeholder='Enter Password'
                                    label='Password'
                                    secureTextEntry={true}
                                    value={this.state.Password}
                                    error={this.state.errPassword}
                                    onChangeText={(Password) => this.setState({ Password })}


                                />
                            </View>
                            <View style={styles.btnLoginView} >
                                <View style={styles.btnLogin}>
                                    <Button title='login' onPress={() => this.onSubmit()}
                                    ></Button>
                                </View>


                            </View>
                            <View style={styles.txtForgetView}>
                                <Text style={styles.txtForget} onPress={(event) => this.openforgot(event)}>forgot Password ?</Text>

                            </View>

                            <View style={styles.signit}>
                                <View>
                                    <Text>Not yet registered? </Text>
                                </View>
                                <View>
                                    <Text style={{ color: 'blue' }} onPress={(event) => this.navigateRegister(event)}>SignUp</Text>
                                </View>

                            </View>

                        </View>

                    </Card>
                {/* </View> */}
            </ScrollView>

        );

    }
}
