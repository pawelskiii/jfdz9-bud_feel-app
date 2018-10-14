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

firebase.database().ref('/data/diets').on('value', snapshot => {
    console.log(snapshot.val());
    store.dispatch({
        type: 'DIETS/SET_DIETS',
        diets: snapshot.val()
    })
});

firebase.database().ref('/data/types').on('value', snapshot => {
    console.log(snapshot.val());
    store.dispatch({
        type: 'TYPES/SET_TYPES',
        types: snapshot.val()
    })
});



export default store ;