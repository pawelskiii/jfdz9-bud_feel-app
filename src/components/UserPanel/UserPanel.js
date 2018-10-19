import React, {Component, Fragment} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import fit from '../../assets/fit.jpg';
import firebase from 'firebase';
import { connect } from 'react-redux'

import Sidebar from '../Sidebar';
import BmiNote from './BmiNote';
import BmiInfo from './BmiInfo';



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

    bigAvatar: {
        width: 100,
        height: 100,
    },

    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 8
    },

    textField: {
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%',
    },

    button: {
        width: '50%',
        margin: 8,
        marginRight: '25%',
        marginLeft: '25%',
        fontSize: 17,
    },

    image: {
        marginLeft: 20,
        marginTop: 8
    },
});


const genderLabels = [
    {
        value: 'Kobieta',
        label: 'Kobieta',
    },
    {
        value: 'Mężczyzna',
        label: 'Mężczyzna',
    },
];

const activityLabels = [
    {
        value: 'Brak',
        label: 'Brak',
    },
    {
        value: 'Umiarkowana',
        label: 'Umiarkowana',
    },
    {
        value: 'Aktywny',
        label: 'Aktywny',
    },
    {
        value: 'Bardzo aktywny',
        label: 'Bardzo aktywny',
    },
];

class UserPanel extends Component {

    state = {

        isInitialValue: false,

        form: {
            nickName: '',
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

    handleClickSend = () => {
            firebase.database().ref(`/users/${firebase.auth().currentUser.uid}`).set(this.state.form)
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
            form: {
                ...this.state.form,
                [name]: event.target.value}
        })
    };

    componentDidUpdate() {
        if (!this.state.isInitialValue && this.props.form) {
            this.setState({form: this.props.form, isInitialValue: true})
        }
    }



    render() {

        const {classes, form, theme} = this.props;


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

                                <Grid item xs={7}>
                                    <Paper className={classes.paper} style={{marginTop: 32}}>
                                        <ButtonBase className={classes.image}>
                                            <Avatar alt="Adelle Charles" src={fit} className={classes.bigAvatar} align='right'/>
                                        </ButtonBase>
                                        <TextField
                                            required
                                            id="outlined-name"
                                            fullWidth
                                            label="Mój nick"
                                            className={classes.textField}
                                            value={this.state.form.nickName}
                                            onChange={this.handleChange('nickName')}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-name"
                                            fullWidth
                                            label="Imię"
                                            className={classes.textField}
                                            value={this.state.form.name}
                                            onChange={this.handleChange('name')}
                                            margin="normal"
                                            variant="outlined"
                                        />

                                        <TextField
                                            id="outlined-surname"
                                            label="Nazwisko"
                                            className={classes.textField}
                                            value={this.state.form.surname}
                                            onChange={this.handleChange('surname')}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-select-gender"
                                            select
                                            label="Płeć"
                                            className={classes.textField}
                                            value={this.state.form.gender}
                                            onChange={this.handleChange('gender')}
                                            SelectProps={{
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            {genderLabels.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="outlined-select-activity"
                                            select
                                            label="Moja aktywność fizyczna"
                                            className={classes.textField}
                                            value={this.state.form.activity}
                                            onChange={this.handleChange('activity')}
                                            SelectProps={{
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            {activityLabels.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="outlined-age"
                                            label="Wiek"
                                            value={this.state.form.age}
                                            onChange={this.handleChange('age')}
                                            type="number"
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                        <TextField
                                            required
                                            id="outlined-mane"
                                            label="Waga (kg)"
                                            className={classes.textField}
                                            value={this.state.form.weight}
                                            onChange={this.handleChange('weight')}
                                            type="number"
                                            margin="normal"
                                            variant="outlined"
                                        />
                                        <TextField
                                            required
                                            id="outlined-name"
                                            label="Wzrost (cm)"
                                            className={classes.textField}
                                            value={this.state.form.height}
                                            onChange={this.handleChange('height')}
                                            type="number"
                                            margin="normal"
                                            variant="outlined"
                                        />
                                        <MuiThemeProvider theme={theme}>
                                            <Button
                                                onClick={this.handleClickSend}
                                                variant='contained'
                                                color='primary'
                                            className={classes.button}>
                                                {this.props.form ? 'Zapisz zmiany' : 'Zapisz dane'}
                                            </Button>
                                        </MuiThemeProvider>
                                    </Paper>
                                </Grid>

                            <BmiNote handleClickOpen={this.handleClickOpen}/>
                            </Grid>
                        </Grid>
                       <BmiInfo form={this.state.form} open={this.state.open} handleClose={this.handleClose} />
                    </main>
                </div>
            </Fragment>
        )}
}

const mapStateToProps = state => ({
    form: state.form === null
        ? {}
        : state.form.data,
});

export default connect(
    mapStateToProps
)(withStyles(styles)(UserPanel));

