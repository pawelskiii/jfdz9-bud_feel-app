import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import './firebaseSetup';

import reducer from './state/reducer';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);



firebase.auth().onAuthStateChanged(user => {
    store.dispatch({
        type: 'AUTH/SET_USER',
        user
    });
});

let ref2;
firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
        ref2 = firebase.database().ref(`/users/${user.uid}/favs/`);
        ref2.on('value', snapshot => {
            store.dispatch({
                type: 'FAVS/SET_FAVS',
                favs: snapshot.val()
            })})
    } else {
        if (ref2) {
            ref2.off('value');
            ref2 = undefined;
        }
    }
});

firebase.database().ref('/data/diets').on('value', snapshot => {
    store.dispatch({
        type: 'DIETS/SET_DIETS',
        diets: snapshot.val()
    })
});

firebase.database().ref('/data/types').on('value', snapshot => {
    store.dispatch({
        type: 'TYPES/SET_TYPES',
        types: snapshot.val()
    })
});


let reff;
firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
        reff = firebase.database().ref(`/users/${user.uid}/form`);
        reff.on('value', snapshot => {
            store.dispatch({
                type: 'FORM/SET_FORM',
                form: snapshot.val()
            })})
    } else {
        if (reff) {
            reff.off('value');
            reff = undefined;
        }
    }
});


export default store ;