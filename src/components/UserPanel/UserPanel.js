import React, {Component, Fragment} from 'react';
import {Grid, Typography, Divider, Paper} from '@material-ui/core';


import Sidebar from '../Sidebar'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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
import Avatar from '@material-ui/core/Avatar';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';
import fit from '../../assets/fit.jpg';
import ButtonBase from '@material-ui/core/ButtonBase';



const CustomTableCell = withStyles(theme => ({
    body: {
        fontSize: 20,
    },
}))(TableCell);

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
        minWidth: 0, // So the Typography noWrap works
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

    buttonBmi: {
        width: '30%',
        marginTop: '5%',
        fontSize: 17,
    },

    info: {
        fontSize: 20,
        textAlign: 'center',
        padding: theme.spacing.unit * 4
    },

    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#E0E0E0',
        },
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

class UserPanel extends Component {

    state = {
        form: {
            nickName:'',
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
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper} style={{marginTop:32}}>
                                    <ButtonBase className={classes.image}>
                                        <Avatar alt="Adelle Charles" src={fit} className={classes.bigAvatar} align='right'/>
                                    </ButtonBase>
                                    <TextField
                                        error
                                        id="outlined-error"
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
                                        error
                                        id="outlined-error"
                                        label="Waga (kg)"
                                        className={classes.textField}
                                        value={this.state.form.weight}
                                        onChange={this.handleChange('weight')}
                                        type="number"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        error
                                        id="outlined-error"
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
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            onClick={this.handleClickOpen}
                                            style={{color:blueGrey[800]}}>
                                            Zapisz dane
                                        </Button>
                                    </MuiThemeProvider>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.info} style={{marginTop:32}}>
                                    <Typography variant='display1' style={{color:amber[900]}} align='centre'>Chcesz poznać swoje BMI?</Typography>
                                </Paper>
                                <Paper className={classes.info} style={{marginTop:32}}>
                                    <Typography component="h2" variant="headline" paragraph="true" style={{color:amber[900]}} align='centre'>Co to jest BMI?</Typography>
                                    <Typography variant="title"  paragraph="true" align='centre' style={{color:blueGrey[800]}}>
                                    BMI Wskaźnik masy ciała (z ang. Body Mass Index (BMI))<br/>
                                    – współczynnik powstały przez podzielenie masy ciała podanej w kilogramach<br/>
                                        przez kwadrat wysokości podanej w metrach.</Typography>
                                    <Typography component="h2" variant="headline" paragraph="true" style={{color:amber[900]}} align='centre'>Odrobinę skomplikowane?</Typography>
                                    <Typography variant="title" paragraph="true" align='centre' style={{color:blueGrey[800]}}>
                                        Nie przejmuj się tym!<br/>
                                    Właśnie dlatego przygotowaliśmy dla Ciebie nasz kalkulator,<br/>
                                        wystarczy, że uzupełnisz dane, a my obliczymy dla Ciebie Twoje BMI.</Typography>
                                    <MuiThemeProvider theme={theme}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.buttonBmi}
                                            onClick={this.handleClickOpen}
                                            style={{color:blueGrey[800]}}>
                                            Oblicz swoje BMI
                                        </Button>
                                    </MuiThemeProvider>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle>
                                <Typography component="h2" variant="headline" style={{color:amber[900]}}>
                                Twoje BMI wynosi:   {(this.state.form.weight/(this.state.form.height/100*this.state.form.height/100)).toFixed(2)}
                                </Typography>
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
                                                <CustomTableCell numeric>do 25</CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell component="th" scope="row">
                                                    Nadwaga
                                                </CustomTableCell>
                                                <CustomTableCell numeric>do 30</CustomTableCell>
                                            </TableRow>
                                            <TableRow className={classes.row}>
                                                <CustomTableCell component="th" scope="row">
                                                    Otyłość
                                                </CustomTableCell>
                                                <CustomTableCell numeric>do 40</CustomTableCell>
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
                                <Button onClick={this.handleClose} color="green">
                                    Zamknij
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </main>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(UserPanel);