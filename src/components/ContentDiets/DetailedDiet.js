import React, {Component, Fragment} from 'react';

import {withStyles} from '@material-ui/core/styles';

import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide,
    Typography, Grid
} from '@material-ui/core';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

const styles = {

};

class DetailedDiet extends Component {
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
        const {dietType, id, name, description, createdAt, age, weight, period, proposalMeals} = this.props;
        const {classes} = this.props;

        return (
            <Fragment>
                <Button onClick={this.handleClickOpen} variant='contained' color='primary'>Dowiedz się więcej</Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        <Typography variant='display3' color='primary'>{name}</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container className={classes.root} spacing={16}>

                        </Grid>



                        {/*<DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>*/}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Zamknij
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default withStyles(styles)(DetailedDiet);