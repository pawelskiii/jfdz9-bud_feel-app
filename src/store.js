import { createStore, applyMiddleware, combineReducers } from 'redux';
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

export default store ;