import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
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
    // componentDidMount() {
    //     GoogleSignin.configure({
           
               
            
    //     })
    //         .then(() => {
    //             console.log('configured')
    //         })
    // }
    googleSignIn = event => {
// GoogleSignin.signIn().then((result)=>{
//     var credential=Firebase.firebase.auth.GoogleAuthProvider.credential(result.idToken,result.accessToken);
//     return Firebase.firebase.auth().signInWithCredential(credential);

// })

// .then((currentUser)=>{
//     console.log('Goggle sign in :${JSON.stringify(currentUser.toJSON())}');
    

// })

// .catch((error)=>{
//     console.log("Login failed" + error);
    
// })
    }
    //     var provider = new Firebase.firebase.auth.GoogleAuthProvider();
    //     provider.addScope('profile');
    //     provider.addScope('https://www.googleapis.com/auth/drive');
    //     Firebase.firebase.auth().signInWithRedirect(provider);
    //     Firebase.firebase.auth().getRedirectResult().then(function (result) {

    //         var token = result.user.uid;
    //         var email = result.user.email;



    //         console.log("result  ----- " + result);


    //         /**
    //          * if login succcessful 
    //         //  */
    //         // window.location = "http://localhost:3000/dashboard";
    //         // toast("Successfully loged in with Google", { position: toast.POSITION.TOP_CENTER });
    //         // /**
    //         //  * handle event if login unsuccessful
    //         //     * /
        // }).catch(function (err) {
        //     console.log("error  ----- " + err);
        //     // toast("Login failed", { position: toast.POSITION.TOP_CENTER });

        // // })
    // }


    // GoogleSignin.signIn()
    //     .then((data) => {
    //         // Create a new Firebase credential with the token
    //         const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
    //         // Login with the credential
    //         return firebase.auth().signInWithCredential(credential);
    //     })
    //     .then((user) => {
    //         // If you need to do anything with the user, do it here
    //         // The user will be logged in automatically by the
    //         // `onAuthStateChanged` listener we set up in App.js earlier
    //         alert("Succesful")
    //     })
    //     .catch((error) => {
    //         const { code, message } = error;
    //         // For details of error codes, see the docs
    //         // The message contains the default Firebase string
    //         // representation of the error
    //         alert(error)
    //     });
    // }


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

            <ScrollView>

                <View>
                    <Card>
                        <View style={{ padding: 30 }}>

                            <View style={styles.login}>
                                <View>
                                    <TextField

                                        label='Username'
                                        placeholder='Enter username'
                                        value={this.state.Username}
                                        error={this.state.errUsername}
                                        onChangeText={(Username) => this.setState({ Username })}


                                    />
                                </View>
                                <View>
                                    <TextField

                                        placeholder='Enter Password'
                                        label='Password'
                                        secureTextEntry={true}
                                        value={this.state.Password}
                                        error={this.state.errPassword}
                                        onChangeText={(Password) => this.setState({ Password })}


                                    />
                                </View>
                                <View style={{ marginTop: 30 }}>

                                    <Button title='login' onPress={() => this.onSubmit()}
                                    ></Button>

                                </View>


                                <View style={{ marginTop: 30 }}>
                                    <TouchableOpacity onPress={(event) => this.googleSignIn(event)}>
                                        <Image source={require('../assets/google.png')}
                                            style={{ width: '100%', height: 35, borderColor: '#000000', borderWidth: 1 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View>
                                        <View>

                                            <Text style={styles.txtForget} onPress={(event) => this.openforgot(event)}>FORGOT PASSWORD ?</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                            <View>
                                                <Text>Not yet registered? </Text>
                                            </View>
                                            <View>
                                                <Text style={{ color: 'blue' }} onPress={(event) => this.navigateRegister(event)}>SignUp</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Card>
                </View>
            </ScrollView >

        );

    }
}
