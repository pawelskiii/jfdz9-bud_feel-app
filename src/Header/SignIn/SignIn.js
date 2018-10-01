import React, { Component } from 'react';
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
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
                        <DialogContentText>
                            Aby się zalogować wpisz adres e-mail oraz hasło.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-name"
                            label="E-mail"
                            type="email"
                            variant='outlined'
                            fullWidth
                            style={{marginTop: '1.2rem'}}
                        />
                        <TextField
                            margin="dense"
                            id="outlined-password"
                            label="Hasło"
                            type="password"
                            variant='outlined'
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Zamknij
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Zaloguj
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default SignIn;