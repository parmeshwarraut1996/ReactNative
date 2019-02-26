import React, { Component } from 'react';
import { Text, View, Image, Modal, ScrollView } from 'react-native';
import styles from '../stylesheet.js'
import ColorPalette from './colorpalette.js';
import Collaborator from './collaborator.js';
import Label from './label.js';




export default class More extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false

        }
        this.navigateCollaborator = this.navigateCollaborator.bind(this);
    }
    openCollaborator(){
        this.setState({
            open:true
        })
    }
    navigateCollaborator(event) {
        this.props.navigation.navigate("collaborator");

    }
    render() {
        console.log("color in more" + this.props.colorCode);
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

                    
                        <Collaborator />
                    

                    <Label/>

                    <ColorPalette colorCode={this.props.c} />
                </View>


            </ScrollView >

        );
    }
}