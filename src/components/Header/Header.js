import React, {Fragment, Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

import SignIn from './SignIn/index';
import SignUp from './SignUp/index';

import logo from '../../assets/logo.png' ;


const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: theme.zIndex.drawer + 1,
        // overflow: 'hidden',
        position: 'absolute',
        display: 'flex',
        width: '100%',
    },
});

class Header extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Link to="/"><img src={logo} alt="eat smarter logo"/></Link>
                        {
                            this.props.user ?
                                <Fragment>
                                    <div style={{marginLeft: 'auto'}}>
                                        <Link to='/' style={{textDecorationLine: 'none'}}>
                                            <Button color="secondary" onClick={() => firebase.auth().signOut()}>
                                                Sign Out
                                            </Button>
                                        </Link>

                                    </div>
                                </Fragment> :
                                <Fragment>
                                    <SignIn/>
                                    <SignUp/>
                                </Fragment>
                        }

                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(withStyles(styles)(Header));