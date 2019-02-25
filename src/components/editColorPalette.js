import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../stylesheet.js';
import { Avatar } from 'react-native-elements';

const ColorCode = [
    {
        rgbCode: "rgb(255, 255, 255)",
        colorName: "White"
    },
    {
        rgbCode: "rgb(242, 139, 130)",
        colorName: "Red"
    },
    {
        rgbCode: "rgb(215, 174, 251)",
        colorName: "Purple"
    },
    {
        rgbCode: "rgb(255, 192, 203)",
        colorName: "Pink"
    },
    {
        rgbCode: "rgb(167, 255, 235)",
        colorName: "Teal"
    },
    {
        rgbCode: "rgb(251, 188, 4)",
        colorName: "Orange"
    },
    {
        rgbCode: "rgb(174, 203, 250)",
        colorName: "Dark Blue"
    },
    {
        rgbCode: "rgb(232, 234, 237)",
        colorName: "Gray"
    },
    {
        rgbCode: "rgb(203, 240, 248)",
        colorName: "Blue"
    },
    {
        rgbCode: "rgb(230, 201, 168)",
        colorName: "Brown"
    },
    {
        rgbCode: "rgb(255, 255, 0)",
        colorName: "Yellow"
    },
    {
        rgbCode: "rgb(204, 255, 144)",
        colorName: "Green"
    }
]

export default class EditColorPalette extends Component {
    constructor() {
        super();
        this.state = {
            color: '',

        }
        this.getColor = this.getColor.bind(this);
        

    }
    async  getColor(color) {
     
        await this.setState({
            color: color
        })
      

        this.props.editColorCode(this.state.color,this.props.note,this.props.index);

    }
    render() {

        return (
            <View>
                <FlatList horizontal={true}
                    data={ColorCode}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.getColor(item.rgbCode)}>
                            <View
                                style={{ backgroundColor: item.rgbCode, margin: 3, width: 40, height: 40, borderRadius: 25 }}
                            >
                            </View>
                        </TouchableOpacity>
                    }
                >
                </FlatList>

            </View>
        );


    }


}