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
                <Button onClick={this.handleClickOpen} color='inherit'>Sign In</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
                    <Divider style={{marginBottom: '.6rem'}}/>
                    <DialogContent>
                        <DialogContentText>
                            To sign in please enter your e-mail address and password.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-name"
                            label="Email Address"
                            type="email"
                            variant='outlined'
                            fullWidth
                            style={{marginTop: '1.2rem'}}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-password"
                            label="Password"
                            type="password"
                            variant='outlined'
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Sign In
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default SignIn;