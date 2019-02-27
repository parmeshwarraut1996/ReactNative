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
            open: false,
            label:'',
            collaborator: ''


        }
        console.disableYellowBox=true;
        this.navigateCollaborator = this.navigateCollaborator.bind(this);
        this.handleLabel=this.handleLabel.bind(this);
        this.handleCollaborator=this.handleCollaborator.bind(this);
    }
    openCollaborator() {
        this.setState({
            open: true,
            label: '',
            
        })
    }
    navigateCollaborator(event) {
        this.props.navigation.navigate("collaborator");

    }
   async handleLabel(label) {
       console.warn("label in more before props --- " + this.state.label);

       await this.setState({
            label:label
        })
        this.props.l(this.state.label)
        console.warn("label in more --- "+this.state.label);
        
    }
    async handleCollaborator(collaborator){
        await this.setState({
            collaborator:collaborator

        })
        this.props.c(this.state.collaborator);
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


                    <Collaborator collaboratorList={this.handleCollaborator} />


                    <Label labelList={this.handleLabel} />

                    <ColorPalette colorCode={this.props.c} />
                </View>


            </ScrollView >

        );
    }
}