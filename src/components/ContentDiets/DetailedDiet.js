import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';

import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide,
    Typography, Grid, Paper, Card, CardMedia, CardContent, Table, TableBody, TableCell, TableRow
} from '@material-ui/core';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    cardContent: {
        backgroundColor: "#263238"
    },
    paper: {
        /*height: 140,
        width: 100,*/
    },
    paperMargin: {
        marginTop: '1rem',
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    card: {
        width: 450,
    },
    media: {
        height: 300,
    },
});

class DetailedDiet extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {dietType, id, name, description, createdAt, age, weight, period, proposalMeals, image} = this.props;
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
                    maxWidth='md'
                >
                    {/*<DialogTitle id="alert-dialog-slide-title">
                        <Typography variant='display2' color='primary'>{name}</Typography>
                    </DialogTitle>*/}
                    <DialogContent>
                        <Grid container className={classes.root} spacing={16}>
                            <Grid item xs={12}>
                                <Grid container className={classes.demo} justify="space-between" spacing={16}>
                                    <Grid item>
                                        <Card className={classes.card}>
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant='display2' color='secondary' align='center'>
                                                    {name}
                                                </Typography>
                                            </CardContent>
                                            {dietType && <CardMedia
                                                className={classes.media}
                                                image={image}
                                                alt={dietType}
                                                title={dietType}
                                            />}
                                            <CardContent className={classes.cardContent}>
                                                <Typography variant='subheading' color='secondary'>
                                                    {description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.paper}>
                                            <Table>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Typ:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography variant='body2'>{dietType}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Wiek:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography
                                                                variant='body2'>{`${age.min} - ${age.max}`} lat</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Waga:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography
                                                                variant='body2'>{`${weight.min} - ${weight.max}`} kg</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Okres:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography variant='body2'>{period} dni</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Dodano:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography variant='body2'>{createdAt}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container className={classes.demo} justify="center" spacing={16}>
                                    <Grid item>
                                        <Paper className={classes.paperMargin}>
                                            <Table>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Śniadanie:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography
                                                                variant='body2'>{proposalMeals.breakfast}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Lunch:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography
                                                                variant='body2'>{proposalMeals.lunch}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Deser:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography
                                                                variant='body2'>{proposalMeals.dessert}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Obiad:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography
                                                                variant='body2'>{proposalMeals.dinner}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            <Typography variant='body2'><b>Kolacja:</b></Typography>
                                                        </TableCell>
                                                        <TableCell numeric>
                                                            <Typography
                                                                variant='body2'>{proposalMeals.supper}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        {/*<DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>*/}
                    </DialogContent>
                    <DialogActions className={classes.dialogActions}>
                        <Button onClick={this.handleClose}>
                            Zamknij
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default withStyles(styles)(DetailedDiet);