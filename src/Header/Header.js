import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import Sidebar from '../Sidebar/index';
import Content from '../Content/index';

import logo from '../assets/logo.png' ;


const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 2,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

function Header(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <img src={logo} alt="eat smarter logo" />
                    <SignIn/>
                    <SignUp/>
                </Toolbar>
            </AppBar>
            <Sidebar/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Content/>
            </main>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);