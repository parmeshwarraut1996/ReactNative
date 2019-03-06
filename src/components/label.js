import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, TextInput} from 'react-native';
import styles from '../stylesheet.js'






export default class Label extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            labelArray: [],
            label: ''

        }
        this.openLabel = this.openLabel.bind(this);
        this.closeLabel = this.closeLabel.bind(this);
        console.disableYellowBox = true;
    }
    openLabel = () => {
        this.setState({
            open: true
        })


    }
    closeLabel() {
        this.setState({
            open: false
        })
        console.warn("label in label before props---- " + this.state.labelArray);

        this.props.labelList(this.state.labelArray);
        console.warn("label in label ---- " + this.state.labelArray);


    }
    async saveLabel(event) {
        var arrLabel = [];
        arrLabel = this.state.labelArray;
        arrLabel.push(this.state.label)
        await this.setState({
            labelArray: arrLabel,
            label: ''

        })

    }

    render() {
        var lblArray = this.state.labelArray.map((option) => {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image style={styles.IconExtra} source={require('../assets/arrow.png')} />
                    <Text>{option}</Text>
                </View>
            );
        })
        return (

            <View style={styles.MoreComponents}>
                <TouchableOpacity onPress={(event) => this.openLabel(event)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.IconMore}
                            source={require('../assets/arrow.png')} />
                        <Text style={styles.IconMoreComp}>label</Text>
                    </View>
                </TouchableOpacity>






                <Modal visible={this.state.open}>

                    <View style={{ width: '100%', padding: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <TouchableOpacity onPress={(event) => this.closeLabel(event)}>
                                <Image source={require('../assets/close.png')}
                                    style={styles.IconMore} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TextInput placeholder="Enter label"
                                onChangeText={(label) => this.setState({ label: label })}></TextInput>
                        </View>
                        <View>
                            <TouchableOpacity onPress={(event) => this.saveLabel(event)}>
                            <Text>
                                SAVE
                                </Text>
                            </TouchableOpacity>
                           
                        </View>

                    </View>
                    <View>

                        {lblArray}

                    </View>

                </Modal>




            </View>


        );
    }
}