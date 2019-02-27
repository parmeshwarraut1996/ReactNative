import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../stylesheet.js'
import { Card } from 'react-native-elements';
import { Chip } from 'react-native-paper';



export default class DisplayCards extends Component {

    constructor() {
        super();
        this.state = {

            label: []

        }
        console.disableYellowBox = true;
    }
    openEditNotes(event) {
        console.log("inde---- " + this.props.index);

        this.props.navigation.navigate('editnote', { key: this.props.index, noteData: this.props.note });
    }
    async componentDidMount() {
        await this.setState({
            label: this.props.note.label
        })

        console.warn("label in display card === " + this.state.label);

    }

    render() {
        // var arr=this.state.label.map((option)=>{
        //     return(
        //         <Chip mode='outlined'>{option}

        //         </Chip>
        //     )

        // })
        //         console.warn("laebel in display card === " +this.state.label);


        const stl = this.props.g ? styles.ShowCard : styles.Showlist;
        return (



            <View style={stl}>
                <Card containerStyle={{ backgroundColor: this.props.note.Colors, borderRadius: 10 }}>
                    <View>
                        <View style={{ padding: 5 }}>
                            <Text
                                onPress={(event) => this.openEditNotes(event)}

                            >{this.props.note.Title}</Text>
                        </View>

                        <View style={{ paddingLeft: 5 }}>
                            <Text

                            > {this.props.note.Description}</Text>
                        </View>
                        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                            <View>
                                {this.props.note.Reminder ?
                                    (<Chip mode='outlined'
                                        style={{ backgroundColor: this.props.note.Colors, borderColor: 'black', width: 110}}

                                    >{this.props.note.Reminder}
                                    </Chip>
                                    ) : (
                                        <View>

                                        </View>
                                    )
                                }
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {this.state.label ? (
                                    <View style={{ flexDirection: 'row',flexWrap:'wrap'}}>
                                        {this.state.label.map((option) =>

                                            <Chip mode='outlined'
                                                style={{ flexDirection: 'row',backgroundColor: this.props.note.Colors, borderColor: 'black', width: 110, margin: 5}}
                                            > {option}</Chip>
                                        )
                                        }
                                    </View>)
                                    : (
                                        <View>

                                        </View>
                                    )
                                }
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}