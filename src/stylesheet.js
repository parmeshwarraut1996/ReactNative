import { Platform, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';



export default StyleSheet.create({
    container: {
        backgroundColor: 'white',

        flex: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        paddingBottom: 13,
        borderBottomWidth: StyleSheet.hairlineWidth,

    },

    textBorder: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 10

    },
    btnLoginView: {
        flexDirection: 'row'
    },
    btnLogin: {
        width: 100
    },
    txtForgetView: {
        marginLeft: 90,
    },
    txtForget: {
        marginRight: 100,
        color: 'blue',
        marginTop: 50

    },
    btnReg: {

        width: 100,
        marginTop: 10,
        alignItems: 'center'


    },
    txtBorder: {
        borderWidth: StyleSheet.hairlineWidth,

    },
    FirstAndLast: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reg: {

        flexDirection: 'column',
        justifyContent: 'space-between'


    },
    input: {
        marginTop: 10,
        marginBottom: 20


    },
    imageview: {
        alignItems: 'center',
        backgroundColor: 'white',



    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    },
    IconArrow:
    {
        height: 30,
        width: 30,
        marginLeft: 5,
    },
    IconExtra:
    {
        height: 25,
        width: 25,
        marginLeft: 5,
    },
    Icon:
    {
        height: 35,
        width: 35,
        marginLeft: 5,
    },
    menu: {
        height: 10,
        width: 20,
        marginLeft: 5,

    },
    texthead: {
        fontSize: 35,

    },
    head: {
        marginLeft: 30,
        fontSize: 30,
        color: 'black'
    },
    top: {
        flexDirection: 'row',
        backgroundColor: '#f9f48b',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',
    },
    textinput: {
        marginTop: 10,
        marginBottom: 20,

    },
    TextField: {
        height: 40,
        width: 300,
        borderColor: 'grey',

        borderRadius: 444,
        marginBottom: 20,
        marginTop: 10,
    },
    Image: {
        height: 100,
        width: 100,
    },
    signit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 25
    },
    apphead: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
        shadowRadius: 5,
        borderColor: 'grey',
        borderWidth: StyleSheet.hairlineWidth,

    }, forgot: {
        marginTop: 20,
    },
    content: {
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,

    },
    containerMain: {
        flex: 1,


    },

    bottomView: {
        borderWidth: 0,

    },

    b: {

        position: 'relative',
        padding: 10
    },
    margin: {

        marginLeft: 10
    },
    bottomMore: {

        position: 'relative',
        marginBottom: 0
    },
    IconMore:
    {
        height: 30,
        width: 30,
        marginLeft: 5,
    },
    IconMoreComp:
    {
        height: 30,

        marginLeft: 10,
    },
    MoreComponents: {
        // flexDirection: 'row', 
        marginTop: 5
    },
    MoreSroll: {

        marginTop: 250,
        height: 150,


    },
    closeMore: {

        height: 0


    },
    Showlist: {
        width: 380,
      
        flexDirection: 'column',
        
        borderRadius: 15

    },
    ShowCard: {
        width: 160,

        flexDirection: 'column',
        
       
        
        borderRadius: 15

},
   



})