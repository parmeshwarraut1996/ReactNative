import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDjc56_BVk-1cios3LDZTbYIay7lFOqKqY",
    authDomain: "fundoonotesreactnative.firebaseapp.com",
    databaseURL: "https://fundoonotesreactnative.firebaseio.com",
    projectId: "fundoonotesreactnative",
    storageBucket: "gs://fundoonotesreactnative.appspot.com",
    messagingSenderId: "226834616466"
};
firebase.initializeApp(config);
const database=firebase.database();
var storage=firebase.storage();
var storageRef=storage.ref();

export default{firebase,database,storageRef};
