import React, { Component } from 'react';
import {View,TextInput} from 'react-native';
import styles from '../stylesheet.js'
import { Card } from 'react-native-elements';

export class NoteView extends Component{
constructor(){
    super();
    this.state={

    }
}

render(){
    console.warn("thisfcsdzaf"+this.props.g);
    
    const stl = this.props.g ?  styles.ShowCard: styles.Showlist;
    return(
        <View style={{flexWrap:'wrap',flexDirection:'row'}}>
            <Card containerStyle={stl}>
                <View >

                    <View style={{ padding: 10 }}>
                        <TextInput
                            placeholder="Title"
                        ></TextInput>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <TextInput
                            placeholder="description"
                        ></TextInput>
                    </View>

                </View>
            </Card>
            <Card containerStyle={stl}>
                <View>

                    <View style={{ padding: 10 }}>
                        <TextInput
                            placeholder="Title"
                        ></TextInput>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <TextInput
                            placeholder="description"
                        ></TextInput>
                    </View>

                </View>
            </Card>
            <Card containerStyle={stl}>
                <View>

                    <View style={{ padding: 10 }}>
                        <TextInput
                            placeholder="Title"
                        ></TextInput>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <TextInput
                            placeholder="description"
                        ></TextInput>
                    </View>

                </View>
            </Card>
            <Card containerStyle={stl}>
                <View>

                    <View style={{ padding: 10 }}>
                        <TextInput
                            placeholder="Title"
                        ></TextInput>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <TextInput
                            placeholder="description"
                        ></TextInput>
                    </View>

                </View>
            </Card>
            <Card containerStyle={stl}>
                <View>

                    <View style={{ padding: 10 }}>
                        <TextInput
                            placeholder="Title"
                        ></TextInput>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <TextInput
                            placeholder="description"
                        ></TextInput>
                    </View>

                </View>
            </Card>
            <Card containerStyle={stl}>
                <View>

                    <View style={{ padding: 10 }}>
                        <TextInput
                            placeholder="Title"
                        ></TextInput>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <TextInput
                            placeholder="description"
                        ></TextInput>
                    </View>

                </View>
            </Card>
        </View>
    );
}

}