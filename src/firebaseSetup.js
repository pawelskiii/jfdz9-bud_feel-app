import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCzdGgGsbso2sVaDD2wcg3jmHrsUbXrdbs",
    authDomain: "bud-feel-app.firebaseapp.com",
    databaseURL: "https://bud-feel-app.firebaseio.com",
    projectId: "bud-feel-app",
    storageBucket: "bud-feel-app.appspot.com",
    messagingSenderId: "213184077381"
};
firebase.initializeApp(config);