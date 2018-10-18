import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Typography, Paper, Grid} from '@material-ui/core';
import {TextField, MenuItem, Button} from '@material-ui/core';
import {blueGrey, green} from '@material-ui/core/colors';
import firebase from "firebase";
import {connect} from "react-redux";

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
        marginTop: '2rem'
    },
    textField: {
        width: '50%',
        margin: '1% 25%'
    },
    textFieldLeft: {
        width: '24%',
        margin: '1%',
        marginLeft: '25%'
    },
    textFieldRight: {
        width: '24%',
        margin: '1%',
        marginRight: '25%'
    },
    button: {
        width: '25%',
        margin: '2%',
        fontSize: '1rem',
        color: blueGrey[800],
    }
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: {
        useNextVariants: true,
    }
});

const types = [
    {
        value: 'masa',
        label: 'masa',
    },
    {
        value: 'utrzymanie',
        label: 'utrzymanie',
    },
    {
        value: 'redukcja',
        label: 'redukcja',
    },
];

const time = [
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

class AddDiet extends Component {

    state = {
        data: {
            id: '',
            name: '',
            description: '',
            typeId: 2,
            createdAt: new Date().toISOString().substr(0, 10),
            weight: {
                max: '',
                min: ''
            },
            age: {
                max: 100,
                min: 10
            },
            period: 7,
            proposalMeals: {
                breakfast: '',
                lunch: '',
                dessert: '',
                dinner: '',
                supper: '',
            }
        }
    };

    handleChange = prop => event => {
        this.setState({
            data: {
                ...this.state.data,
                [prop]: event.target.value,
            }
        })
    };

    onTypeChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                typeId: event.target.value === 'masa' ? 1 : event.target.value === 'utrzymanie' ? 2 : 3,
            }
        })
    };

    onTimeChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                period: event.target.value === '7 dni' ? 7 : event.target.value === '14 dni' ? 14 : 28,
            }
        })
    };

    weightChange = prop => event => {
        this.setState({
            data: {
                ...this.state.data,
                weight: {
                    ...this.state.data.weight,
                    [prop]: event.target.value
                }
            }
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.data.name) {
            firebase.database().ref(`/data/diets/${this.props.diets.length}`).set({
                ...this.state.data,
                id: `${this.props.diets.length + 1}`
            });
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Sidebar/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant='display3' color='primary' align='center'>Dodaj dietę</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <TextField
                                    required
                                    className={classes.textField}
                                    margin="normal"
                                    id="outlined-name"
                                    label="Nazwa diety"
                                    variant="outlined"
                                    onChange={this.handleChange('name')}
                                />
                                <TextField
                                    className={classes.textField}
                                    margin="normal"
                                    id="outlined-description"
                                    label="Opis diety"
                                    variant="outlined"
                                    onChange={this.handleChange('description')}
                                />
                                <TextField
                                    select
                                    required
                                    className={classes.textField}
                                    margin="normal"
                                    id="outlined-type"
                                    label="Typ diety"
                                    variant="outlined"
                                    value={this.state.data.typeId === 1 ? 'masa' : this.state.data.typeId === 2 ? 'utrzymanie' : this.state.data.typeId === 3 ? 'redukcja' : ''}
                                    onChange={this.onTypeChange}
                                >
                                    {(types !== undefined) && types.map(type => <MenuItem value={type.value}
                                                                                          key={type.value}>{type.label}</MenuItem>)}
                                </TextField>

                                <TextField
                                    select
                                    required
                                    className={classes.textField}
                                    margin="normal"
                                    id="outlined-time"
                                    label="Czas trwania"
                                    variant="outlined"
                                    value={this.state.data.period === 7 ? '7 dni' : this.state.data.period === 14 ? '14 dni' : this.state.data.period === 28 ? '28 dni' : ''}
                                    onChange={this.onTimeChange}
                                >
                                    {(time !== undefined) && time.map(type => <MenuItem value={type.value}
                                                                                        key={type.value}>{type.label}</MenuItem>)}
                                </TextField>

                                <TextField
                                    required
                                    className={classes.textFieldLeft}
                                    margin="normal"
                                    id="outlined-min-weight"
                                    label="Minimalna waga"
                                    variant="outlined"
                                    onChange={this.weightChange('min')}
                                />
                                <TextField
                                    required
                                    className={classes.textFieldRight}
                                    margin="normal"
                                    id="outlined-max-weight"
                                    label="Maksymalna waga"
                                    variant="outlined"
                                    onChange={this.weightChange('max')}
                                />


                                <MuiThemeProvider theme={theme}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={this.handleSubmit}
                                    >
                                        Dodaj dietę
                                    </Button>
                                </MuiThemeProvider>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                            </Paper>
                        </Grid>
                    </Grid>
                </main>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    diets: state.diets === null
        ? {}
        : state.diets.data,
    types: state.types === null
        ? {}
        : state.types.data,
});

export default connect(
    mapStateToProps
)(withStyles(styles)(AddDiet));