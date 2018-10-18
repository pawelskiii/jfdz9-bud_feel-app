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

let ref;
firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
        ref = firebase.database().ref(`/users/${user.uid}/favs/`);
        ref.on('value', snapshot => {
            store.dispatch({
                type: 'FAVS/SET_FAVS',
                favs: snapshot.val()
            })})
    } else {
        if (ref) {
            ref.off('value');
            ref = undefined;
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



export default store ;