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
                <Button onClick={this.handleClickOpen} color='inherit'>Zarejestruj</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Zarejestruj</DialogTitle>
                    <Divider style={{marginBottom: '.6rem'}}/>

                    <DialogContent>
                        <DialogContentText>
                            Aby się zarejestrować wprowadź adres e-mail, hasło oraz potwierdź je.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-name"
                            label="E-mail"
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
                            label="Hasło"
                            type="password"
                            variant='outlined'
                            required
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-repeat-password"
                            label="Powtórz hasło"
                            type="password"
                            variant='outlined'
                            required
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Zamknij
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Zarejestruj
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default SignUp;