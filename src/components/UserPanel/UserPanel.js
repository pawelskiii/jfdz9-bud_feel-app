import React, {Component, Fragment} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles,} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import { connect } from 'react-redux'
import amber from '@material-ui/core/colors/amber';
import Sidebar from '../Sidebar';
import BmiNote from './BmiNote';
import BmiInfo from './BmiInfo';
import Subscription from './Subscription'



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

const subscription = [
    {
        value: '7 dni',
        label: '7 dni',
    },
    {
        value: '14 dni',
        label: '14 dni',
    },
    {
        value: '28 dni',
        label: '28 dni',
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
            subscription: ''
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

        const {classes} = this.props;


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

                                <Grid item xs={5}>
                                    <Paper className={classes.paper} style={{marginTop: 32}}>
                                        <Typography component="h2" variant="headline" align='center' paragraph={true} style={{color:amber[900]}}>
                                            Cześć {this.state.form.nickName}, cieszymy się, że dalej walczysz z nami!
                                        </Typography>
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
                                        <Typography variant='title' align='center' style={{color:amber[900]}}>
                                            Wybierz swój abonament:
                                        </Typography>
                                        <TextField
                                            id="outlined-select-subscription"
                                            select
                                            label="Abonament"
                                            className={classes.textField}
                                            value={this.state.form.subscription}
                                            onChange={this.handleChange('subscription')}
                                            SelectProps={{
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            margin="normal"
                                            variant="outlined"
                                        >
                                            {subscription.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                            <Button
                                                onClick={this.handleClickSend}
                                                variant='contained'
                                                color='primary'
                                            className={classes.button}>
                                                {this.props.form ? 'Zapisz zmiany' : 'Zapisz dane'}
                                            </Button>

                                    </Paper>
                                </Grid>
                                <Grid item xs={7}>
                                    <Subscription form={this.state.form}/>
                            <BmiNote handleClickOpen={this.handleClickOpen}/>

                                </Grid>
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

