import React, {Component} from 'react';
import Sidebar from '../Sidebar'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {Typography, Paper, Grid} from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
    body: {
        fontSize: 20,
    },
}))(TableCell);


const styles = theme => ({
    userContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        width: '30rem',
        marginLeft: '10rem',
        marginRight: '60rem',
    },

    info: {
        width: '50rem',
        marginLeft: '10rem',
        marginRight: '40rem',
        backgroundColor: '#E0E0E0',
        fontSize: 20,
    },

    button: {
        width: '16rem',
        height: '3rem',
        margin: '1rem',
        marginLeft: '10rem',
        marginRight: '70rem'
    },

    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#E0E0E0',
        },
    },

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


class UserPanel extends Component {

    state = {
        form: {
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

    handleChange = name => event => {
        this.setState({
           form: {
               ...this.state.form,
               [name]: event.target.value}
        });
    };


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    //handleBmiCalculator = event => {this.state.weight/(this.state.height/100*this.state.height/100)};


    render() {
        console.log(this.state.form.name);


        const {classes} = this.props;
        return (
            <form>
                <Sidebar/>
                    <main className={classes.content}>
                            <Typography variant='display3' color='primary' align='left' style={{ marginLeft: '10rem' }}>Moje dane</Typography>
                                <div className={classes.userContainer} noValidate autoComplete="off">
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
                            label="Wybierz płeć"
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
                                label="Twoja aktywność fizyczna"
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
                                id="outlined-weight"
                                label="Twoja waga (kg)"
                                className={classes.textField}
                                value={this.state.form.weight}
                                onChange={this.handleChange('weight')}
                                type="number"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-height"
                                label="Twój wzrost (cm)"
                                className={classes.textField}
                                value={this.state.form.height}
                                onChange={this.handleChange('height')}
                                type="number"
                                margin="normal"
                                variant="outlined"
                            />
                                    <MuiThemeProvider theme={theme}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            onClick={this.handleClickOpen}>
                                            Zapisz dane
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            onClick={this.handleClickOpen}>
                                            Oblicz swoje BMI
                                        </Button>
                                        <Paper className={classes.info}>
                                            Co to jest BMI?<br/>
                                            BMI Wskaźnik masy ciała (z ang. Body Mass Index (BMI); również: wskaźnik Queteleta II)<br/>
                                            – współczynnik powstały przez podzielenie masy ciała podanej w kilogramach przez kwadrat wysokości
                                            podanej w metrach.<br/>
                                            Odrobinę skomplikowane?<br/> Nie przejmuj się tym,
                                            właśnie dlatego przygotowaliśmy dla Ciebie nasz kalkulator,<br/>
                                            wystarczy, że uzupełnisz dane, a my obliczymy dla Ciebie Twoje BMI.</Paper>
                                    </MuiThemeProvider>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                    <DialogTitle id="alert-dialog-title" style={{color: '#EF6C00'}}>
                                        Twoje BMI wynosi:   {(this.state.form.weight/(this.state.form.height/100*this.state.form.height/100)).toFixed(2)}
                                        </DialogTitle>
                                    <DialogContent>
                                        <Paper className={classes.root}>
                                            <Table className={classes.table}>
                                                <TableBody>
                                                            <TableRow className={classes.row}>
                                                                <CustomTableCell component="th" scope="row">
                                                                    Niedowaga
                                                                </CustomTableCell>
                                                                <CustomTableCell numeric>poniżej 18,5</CustomTableCell>
                                                            </TableRow>
                                                    <TableRow className={classes.row}>
                                                        <CustomTableCell component="th" scope="row">
                                                            Waga normalna
                                                        </CustomTableCell>
                                                        <CustomTableCell numeric>poniżej 25</CustomTableCell>
                                                    </TableRow>
                                                    <TableRow className={classes.row}>
                                                        <CustomTableCell component="th" scope="row">
                                                            Nadwaga
                                                        </CustomTableCell>
                                                        <CustomTableCell numeric>poniżej 30</CustomTableCell>
                                                    </TableRow>
                                                    <TableRow className={classes.row}>
                                                        <CustomTableCell component="th" scope="row">
                                                            Otyłość
                                                        </CustomTableCell>
                                                        <CustomTableCell numeric>poniżej 40</CustomTableCell>
                                                    </TableRow>   <TableRow className={classes.row}>
                                                    <CustomTableCell component="th" scope="row">
                                                        Poważna otyłość
                                                    </CustomTableCell>
                                                    <CustomTableCell numeric>powyżej 40</CustomTableCell>
                                                </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Paper>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleClose} color="primary">
                                            Zamknij
                                        </Button>
                                    </DialogActions>
                                    </Dialog>

                        </div>
                   </main>
            </form>
        )}
}

export default withStyles(styles)(UserPanel);