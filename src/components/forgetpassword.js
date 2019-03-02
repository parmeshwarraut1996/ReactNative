import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import styles from '../stylesheet.js'
import { resetPass } from '../services/databasecontroller.js';
import Snackbar, { LENGTH_SHORT } from 'react-native-snackbar';

export default class ForgetPassword extends Component {
    constructor() {
        super();
        this.state = {
            txtforget: '',
            errForget: ''
        }
    }

    validate = () => {
        var flag = false;

        /**
         * array of errors to define helper text
         */

        const error = {
            errForget: "",
        }

        if (this.state.txtforget.length === 0) {
            flag = true;
            error.errForget = 'username is empty'
        }
        // /**
        //  * validation for email adresss
        //  */
        if (this.state.txtforget.indexOf("@") === -1) {
            flag = true;
            error.errForget = "* Requires valid email*";
        }
        if (this.state.txtforget.indexOf('.') === -1) {
            flag = true;
            error.errForget = "* requires valid email";
        }
    }

    onSubmit(){
        if (!this.validate()) {
            var reset=resetPass(this.state.txtforget);
            if(reset){
                Snackbar.show({
                    title:"Password reset link sent to your registered mail account",
                    duration:LENGTH_SHORT,
                    action:{
                        title:'success',
                        color:'green'

                    }
                    
                });

                this.props.navigation.navigate('login')

            }
            else{
                Snackbar.show({
                    title: "Email is not registered",
                    duration: LENGTH_SHORT,
                    action: {
                        title: 'failed',
                        color: 'red'

                    }

                })

            }
            
        }
    }
    render() {
        return (
            <View>
                <Card>
                    <View style={{ alignItems: 'center' }}>
                        <Text>Forget Password</Text>
                        <View>
                            <Text>Please enter your email address and we'll send you instructions on how to reset your password.</Text>
                        </View>
                    </View>
                    <View>

                        <TextField
                            label="Email Id"
                            placeholder='Enter registered mail_id'
                            value={this.state.txtforget}
                            onChangeText={(txtforget) => this.setState({ txtforget })}


                        />
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Button
                            title='submit' onPress={() => this.onSubmit()}
                        >
                        </Button>
                    </View>


                </Card>
            </View >
        );
    }

}