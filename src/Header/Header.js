import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import SignIn from './SignIn/index';
import SignUp from './SignUp/index';

import logo from '../assets/logo.png' ;

export default class Header extends Component {
    render() {
        return (
            <AppBar style={{zIndex: 1300}}>
                <Toolbar>
                    <img src={logo} alt="eat smarter logo" />
                    <SignIn/>
                    <SignUp/>
                </Toolbar>
            </AppBar>
        )
    }
}