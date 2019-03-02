import React, { Component } from 'react';
import {View,TextInput} from 'react-native';
import styles from '../stylesheet.js'
import { Card } from 'react-native-elements';
import { getNotes } from '../services/databasecontroller.js';

export class NoteView extends Component{
constructor(){
    super();
    this.state={
        notes:[]

    }
}
    componentDidMount() {
        getNotes(NoteList => {
            if (NoteList) {
                this.setState({
                    notes: NoteList
                })
                console.log(" available notelist ", NoteList.Title);

            }


            else {
                this.setState({
                    notes: []
                })
            }
        })
    }





    render() {
        var noteArray = [];
        noteArray = Object.keys(this.state.notes).map((note) => {
            var key = note;
            var NoteData = this.state.note[key];
            return (
                <DisplayCards note={NoteData}
                    index={key} 
                    />
            )
        })
        return (
            <View style={{flexWrap: 'wrap', flexDirection: 'row',flex:1}}>
                {noteArray}
            </View>

        )
    }
//     console.warn("thisfcsdzaf"+this.props.g);
    
//     const stl = this.props.g ?  styles.ShowCard: styles.Showlist;
//     return(
//         <View style={{flexWrap:'wrap',flexDirection:'row'}}>
//             <Card containerStyle={stl}>
//                 <View >

//                     <View style={{ padding: 10 }}>
//                         <TextInput
//                             placeholder="Title"
//                         ></TextInput>
//                     </View>

//                     <View style={{ paddingLeft: 10 }}>
//                         <TextInput
//                             placeholder="description"
//                         ></TextInput>
//                     </View>

//                 </View>
//             </Card>
//             <Card containerStyle={stl}>
//                 <View>

//                     <View style={{ padding: 10 }}>
//                         <TextInput
//                             placeholder="Title"
//                         ></TextInput>
//                     </View>

//                     <View style={{ paddingLeft: 10 }}>
//                         <TextInput
//                             placeholder="description"
//                         ></TextInput>
//                     </View>

//                 </View>
//             </Card>
//             <Card containerStyle={stl}>
//                 <View>

//                     <View style={{ padding: 10 }}>
//                         <TextInput
//                             placeholder="Title"
//                         ></TextInput>
//                     </View>

//                     <View style={{ paddingLeft: 10 }}>
//                         <TextInput
//                             placeholder="description"
//                         ></TextInput>
//                     </View>

//                 </View>
//             </Card>
//             <Card containerStyle={stl}>
//                 <View>

//                     <View style={{ padding: 10 }}>
//                         <TextInput
//                             placeholder="Title"
//                         ></TextInput>
//                     </View>

//                     <View style={{ paddingLeft: 10 }}>
//                         <TextInput
//                             placeholder="description"
//                         ></TextInput>
//                     </View>

//                 </View>
//             </Card>
//             <Card containerStyle={stl}>
//                 <View>

//                     <View style={{ padding: 10 }}>
//                         <TextInput
//                             placeholder="Title"
//                         ></TextInput>
//                     </View>

//                     <View style={{ paddingLeft: 10 }}>
//                         <TextInput
//                             placeholder="description"
//                         ></TextInput>
//                     </View>

//                 </View>
//             </Card>
//             <Card containerStyle={stl}>
//                 <View>

//                     <View style={{ padding: 10 }}>
//                         <TextInput
//                             placeholder="Title"
//                         ></TextInput>
//                     </View>

//                     <View style={{ paddingLeft: 10 }}>
//                         <TextInput
//                             placeholder="description"
//                         ></TextInput>
//                     </View>

//                 </View>
//             </Card>
//         </View>
//     );
// }

}