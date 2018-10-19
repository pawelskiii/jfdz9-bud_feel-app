import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Typography, Paper, Grid, Divider} from '@material-ui/core';
import {TextField, MenuItem, Button, CardMedia} from '@material-ui/core';
import {amber, blueGrey, green} from '@material-ui/core/colors';
import firebase from "firebase";
import {connect} from "react-redux";
import Foto from '../../assets/addDiets_foto.png';

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
    media: {
        height: '233px',
        width: '350px',
        margin: '0 auto 1rem',
        opacity: '0.85',
        border: '1px solid #263238'
    },
    paper: {
        padding: theme.spacing.unit * 4,
        textAlign: 'center',
        height: '89%'
    },
    textField: {
        width: '80%',
        margin: '1% 10%'
    },
    textFieldLeft: {
        width: '39%',
        margin: '1%',
        marginLeft: '10%'
    },
    textFieldRight: {
        width: '39%',
        margin: '1%',
        marginRight: '10%'
    },
    button: {
        width: '35%',
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
                max: '',
                min: ''
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

    onWeightChange = prop => event => {
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

    onAgeChange = prop => event => {
        this.setState({
            data: {
                ...this.state.data,
                age: {
                    ...this.state.data.age,
                    [prop]: event.target.value
                }
            }
        })
    };

    onProposalChange = prop => event => {
        this.setState({
            data: {
                ...this.state.data,
                proposalMeals: {
                    ...this.state.data.proposalMeals,
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
                        <Grid item xs={12} md={5} lg={6}>
                            <Paper className={classes.paper}
                                   style={{marginTop: '2rem', paddingTop: '3rem', paddingBottom: '2rem'}}>
                                <form>
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
                                        label="Min waga"
                                        variant="outlined"
                                        onChange={this.onWeightChange('min')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textFieldRight}
                                        margin="normal"
                                        id="outlined-max-weight"
                                        label="Max waga"
                                        variant="outlined"
                                        onChange={this.onWeightChange('max')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textFieldLeft}
                                        margin="normal"
                                        id="outlined-min-weight"
                                        label="Min wiek"
                                        variant="outlined"
                                        onChange={this.onAgeChange('min')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textFieldRight}
                                        margin="normal"
                                        id="outlined-max-weight"
                                        label="Max wiek"
                                        variant="outlined"
                                        onChange={this.onAgeChange('max')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textField}
                                        margin="normal"
                                        id="outlined-name"
                                        label="Propozycja śniadania"
                                        variant="outlined"
                                        onChange={this.onProposalChange('breakfast')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textField}
                                        margin="normal"
                                        id="outlined-name"
                                        label="Propozycja lunchu"
                                        variant="outlined"
                                        onChange={this.onProposalChange('lunch')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textField}
                                        margin="normal"
                                        id="outlined-name"
                                        label="Propozycja obiadu"
                                        variant="outlined"
                                        onChange={this.onProposalChange('dinner')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textField}
                                        margin="normal"
                                        id="outlined-name"
                                        label="Propozycja deseru"
                                        variant="outlined"
                                        onChange={this.onProposalChange('dessert')}
                                    />

                                    <TextField
                                        required
                                        className={classes.textField}
                                        margin="normal"
                                        id="outlined-name"
                                        label="Propozycja kolacji"
                                        variant="outlined"
                                        onChange={this.onProposalChange('supper')}
                                    />

                                    <MuiThemeProvider theme={theme}>
                                        <Button
                                            type='submit'
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            onClick={this.handleSubmit}
                                        >
                                            Dodaj dietę
                                        </Button>
                                    </MuiThemeProvider>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={7} lg={6}>
                            <Paper className={classes.paper}
                                   style={{marginTop: '2rem', paddingTop: '3rem', paddingBottom: '2rem'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={Foto}
                                    title="Make your diet"
                                />
                                <Typography component="h2" variant="headline" gutterBottom
                                            style={{color: amber[900], margin: '1.5rem'}} align='center'>W jakim celu
                                    mam to robić?</Typography>
                                <Typography variant="title" gutterBottom align='center'
                                            style={{color: blueGrey[800]}}>
                                    Jeżeli jesteś dietetykiem, bądź po prostu znasz się na układaniu diet zapraszamy do
                                    współpracy.</Typography>
                                <Divider style={{margin: '1rem'}}/>
                                <Typography variant="title" gutterBottom align='center'
                                            style={{color: blueGrey[800]}}>
                                    Po wstawieniu minimum 3 zweryfikowanych diet na naszą stronę dostaniesz
                                    od nas maila potwierdzającego - prosimy wówaczas o kontakt.</Typography>
                                <Typography component="h2" variant="headline" gutterBottom
                                            style={{color: amber[900], margin: '1.5rem'}} align='center'>W jaki sposób
                                    mam to zrobić?</Typography>
                                <Typography variant="title" gutterBottom align='center'
                                            style={{color: blueGrey[800]}}>
                                    W celu dodania diety do wstępnej weryfikacji należy wypełnić wymagane pola
                                    formularzy [ <strong style={{color: amber[900]}}>oznaczone
                                    (*)</strong> ].</Typography>
                                <Divider style={{margin: '1rem'}}/>
                                <Typography variant="title" gutterBottom align='center'
                                            style={{color: blueGrey[800]}}>
                                    Najważniejszym elementem jest ustalenie do jakiego typu należy Twoja
                                    dieta.</Typography>
                                <Typography variant="title" gutterBottom align='center'
                                            style={{color: blueGrey[800]}}>
                                    Może być to dieta odchudzająca [ <strong
                                    style={{color: amber[900]}}>redukcja</strong> ], dieta sprzyjająca nabraniu masy
                                    mięśniowej [ <strong style={{color: amber[900]}}>masa</strong> ] lub też dieta
                                    służąca utrzymaniu obecnej wagi oraz zmianie przyzwyczajeń żywieniowych na zdrowsze
                                    [ <strong style={{color: amber[900]}}>utrzymanie</strong> ].</Typography>
                                <Divider style={{margin: '1rem'}}/>
                                <Typography variant="title" gutterBottom align='center'
                                            style={{color: blueGrey[800]}}>
                                    Aby przejść pozytywnie wstępną weryfikację należy podać najlepsze propozycje dań.
                                    Założenia naszych diet to 5 posiłków w ciągu dnia i takie też mamy wymagania co do
                                    Twoich diet.</Typography>
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