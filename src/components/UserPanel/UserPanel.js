import React, {Component, Fragment} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import firebase from 'firebase';
import { connect } from 'react-redux'

import Sidebar from '../Sidebar';
import BmiNote from './BmiNote';
import BmiInfo from './BmiInfo';
import UserForm from './UserForm';

const styles = theme => ({

    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 2,
        minWidth: 0,
    },

    toolbar: theme.mixins.toolbar,
});


class UserPanel extends Component {

    state = {

        form: {
            nickName:'',
            name: '',
            surname: '',
            gender: '',
            activity: '',
            age: '',
            weight: '',
            height: '',
        },

        open: false,
    };

   // getUser = () => {
      //  firebase.database().ref(`/users/${firebase.auth().currentUser.uid}`).on('value', snapshot => {
          //  this.setState({
               // form: snapshot.val()
          //  })
       // });
    //};

    handleClickSend = () => {
        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}`).set(this.state.form);
    };

    handleChange = name => event => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: event.target.value}
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };




    render() {
        const {classes} = this.props;

       console.log(this.props.form);

        return (
            <Fragment>
                <div  className={classes.root}>
                    <Sidebar/>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <Typography variant='display3' color='primary' align='center'>Moje dane</Typography>
                            </Grid>
                            <Grid container spacing={24}>
                            <UserForm form={this.state.form} handleChange={this.handleChange} handleClickSend={this.handleClickSend}/>
                            <BmiNote handleClickOpen={this.handleClickOpen}/>
                            </Grid>
                        </Grid>
                       <BmiInfo form={this.getUser} open={this.state.open} handleClose={this.handleClose} />
                    </main>
                </div>
            </Fragment>
        )}
}

const mapStateToProps = state => ({
    form: state.form === null
        ? {}
        : state.form.data,
    types: state.types === null
        ? {}
        : state.types.data,
});

export default connect(
    mapStateToProps
)(withStyles(styles)(UserPanel));

