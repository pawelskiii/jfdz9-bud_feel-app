import React, {Component,} from 'react';
import {Grid, Paper} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import fit from '../../assets/fit.jpg';




const styles = theme => ({

    bigAvatar: {
        width: 100,
        height: 100,
    },

    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    textField: {
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%',
    },

    button: {
        width: '25%',
        margin: '2%',
        marginLeft: '26%',
        fontSize: 17,
    },

    image: {
        marginLeft: 20,
        marginTop: 8
    },
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: {
        useNextVariants: true,
    }
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

class UserForm extends Component {


    render() {
        const {classes} = this.props;

        console.log(this.props.form ? this.props.form.name : 'jeszcze sie nie pobralo');

        return (
            <Grid item xs={7}>
                <Paper className={classes.paper} style={{marginTop: 32}}>
                    <ButtonBase className={classes.image}>
                        <Avatar alt="Adelle Charles" src={fit} className={classes.bigAvatar} align='right'/>
                    </ButtonBase>
                    <TextField
                        error
                        id="outlined-error"
                        fullWidth
                        label="Mój nick"
                        className={classes.textField}
                        value={this.props.form.nickName}
                        onChange={this.props.handleChange('nickName')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        fullWidth
                        label="Imię"
                        className={classes.textField}
                        value={this.props.form ? this.props.form.name : ''}
                        onChange={this.props.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-surname"
                        label="Nazwisko"
                        className={classes.textField}
                        value={this.props.form.surname}
                        onChange={this.props.handleChange('surname')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-select-gender"
                        select
                        label="Płeć"
                        className={classes.textField}
                        value={this.props.form.gender}
                        onChange={this.props.handleChange('gender')}
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
                        value={this.props.form.activity}
                        onChange={this.props.handleChange('activity')}
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
                        value={this.props.form.age}
                        onChange={this.props.handleChange('age')}
                        type="number"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        error
                        id="outlined-error"
                        label="Waga (kg)"
                        className={classes.textField}
                        value={this.props.form.weight}
                        onChange={this.props.handleChange('weight')}
                        type="number"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        error
                        id="outlined-error"
                        label="Wzrost (cm)"
                        className={classes.textField}
                        value={this.props.form.height}
                        onChange={this.props.handleChange('height')}
                        type="number"
                        margin="normal"
                        variant="outlined"
                    />
                    <MuiThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.props.handleClickSend}
                            style={{color: blueGrey[800]}}>
                            Zapisz dane
                        </Button>
                    </MuiThemeProvider>
                </Paper>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    form: state.form === null
        ? {}
        : state.form.data,
});



export default withStyles(styles)(UserForm);