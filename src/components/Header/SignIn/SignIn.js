import React, { Component } from 'react';
import firebase from 'firebase';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Divider } from '@material-ui/core';

class SignIn extends Component {

    state = {
        open: false,
        email: '',
        password: '',
        error: null
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: null });
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(
            error => this.setState({ error })
        ).then(() => {
            if (this.state.error === null) {
                this.handleClose()
            }
        });

    };

    render() {
        return (
            <div style={{marginLeft: 'auto'}}>
                <Button onClick={this.handleClickOpen} color='inherit'>Zaloguj</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Zaloguj</DialogTitle>
                    <Divider style={{marginBottom: '.6rem'}}/>
                    <DialogContent>
                        {
                            this.state.error === null
                                ? <DialogContentText>Aby się zalogować wpisz adres e-mail oraz hasło.</DialogContentText>
                                : <DialogContentText color='error'>Niepoprawny adres e-mail lub hasło.</DialogContentText>

                        }
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-name"
                            label="E-mail"
                            type="email"
                            name="email"
                            variant='outlined'
                            fullWidth
                            style={{marginTop: '1.2rem'}}
                            onChange={this.handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="outlined-password"
                            label="Hasło"
                            type="password"
                            name="password"
                            variant='outlined'
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>
                            Zamknij
                        </Button>
                        <Button onClick={this.handleSubmit}>
                            Zaloguj
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default SignIn;