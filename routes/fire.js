
var firebase = require('firebase')

var config = {
    apiKey: "abcdefghijklmnopqrstuvwxyz",
    authDomain: "lintangwisesa.firebaseapp.com",
    databaseURL: "https://lintangwisesa.firebaseio.com",
    projectId: "lintangwisesa",
    storageBucket: "lintangwisesa.appspot.com",
    messagingSenderId: "1234567890",
    appId: "0:1234567890:web:1234567890abcde"
};

var fire = firebase.initializeApp(config);
module.exports = fire