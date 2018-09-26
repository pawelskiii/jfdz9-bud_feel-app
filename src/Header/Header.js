import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SignIn from './SignIn';
import SignUp from './SignUp';

import logo from '../assets/logo.png' ;


const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
        overflow: 'hidden',
        position: 'absolute',
        display: 'flex',
        width: '100%',
    },
});

function Header(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar>
                    <img src={logo} alt="eat smarter logo" />
                    <SignIn/>
                    <SignUp/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Header);