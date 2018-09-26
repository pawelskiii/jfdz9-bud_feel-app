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

class SignUp extends Component {

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen} color='inherit'>Sign Up</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
                    <Divider style={{marginBottom: '.6rem'}}/>

                    <DialogContent>
                        <DialogContentText>
                            To sign up please enter your e-mail address and password.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-name"
                            label="Email Address"
                            type="email"
                            variant='outlined'
                            required
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
                            required
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-password"
                            label="Repeat Password"
                            type="password"
                            variant='outlined'
                            required
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Sign In
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default SignUp;