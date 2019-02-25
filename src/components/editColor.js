import React, { Component } from 'react';
import { Text, View, Image,ScrollView } from 'react-native';
import styles from '../stylesheet.js'
import ColorPalette from './colorpalette.js';
import EditColorPalette from './editColorPalette.js';



export default class EditMore extends Component {
    constructor() {
        super();
        this.state = {
            color:''

        }
   
        this.editHandleColor=this.editHandleColor.bind(this);

    }

   async editHandleColor(color,note,key){


         await this.setState({
            color:color
        })
       
        this.props.c(this.state.color,note,key)
        


    }

    render() {
       
        let a = this.props.m ? styles.MoreSroll : styles.closeMore;
        return (

            <ScrollView>
                <View style={a}>

                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/trash.png')} />

                            <Text style={styles.IconMoreComp}>Delete</Text>
                        </View>
                    </View>
                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/share.png')} />

                            <Text style={styles.IconMoreComp}>Share</Text>
                        </View>
                    </View>
                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/collaborator.png')} />

                            <Text style={styles.IconMoreComp}>Collaborator</Text>
                        </View>
                    </View>
                    <View style={styles.MoreComponents}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.IconMore}
                                source={require('../assets/arrow.png')} />
                            <Text style={styles.IconMoreComp}>label</Text>
                        </View>
                    </View>

                    <EditColorPalette editColorCode={this.editHandleColor}
                    note={this.props.noteData}
                    index={this.props.index}
                    />
                </View>


            </ScrollView>

        );
    }
}