import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import {withStyles} from '@material-ui/core/styles';
import {Typography, Paper, Grid, Divider} from '@material-ui/core';
import {TextField, MenuItem, Button, CardMedia} from '@material-ui/core';
import {amber, blueGrey} from '@material-ui/core/colors';
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
        width: '80%',
        margin: '2%',
        fontSize: '1rem',
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
            },
        },
        error: {
            errorName: 'Potrzebujemy tych danych*',
            errorWeight: 'Potrzebujemy tych danych*',
            errorAge: 'Potrzebujemy tych danych*',
            errorProposal: 'Potrzebujemy tych danych*'
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

    handleChangeName = prop => event => {

        if (event.target.value.match('^[a-zA-Z\\s]+$')) {
            this.setState({
                data: {
                    ...this.state.data,
                    [prop]: event.target.value,
                },
                error: {
                    ...this.state.error,
                    errorName: ''
                }
            })
        } else if (event.target.value === '') {
            this.setState({
                data: {
                    ...this.state.data,
                },
                error: {
                    ...this.state.error,
                    errorName: 'Potrzebujemy tych danych'
                }
            })
        } else {
            this.setState({
                data: {
                    ...this.state.data,
                },
                error: {
                    ...this.state.error,
                    errorName: 'Wprowadź poprawne dane'
                }
            })
        }
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

        if (event.target.value.match('^[0-9]+$')) {
            this.setState({
                data: {
                    ...this.state.data,
                    weight: {
                        ...this.state.data.weight,
                        [prop]: event.target.value
                    }
                },
                error: {
                    ...this.state.error,
                    errorWeight: ''
                }
            })
        } else if (event.target.value === '') {
            this.setState({
                data: {
                    ...this.state.data,
                    weight: {
                        ...this.state.data.weight,
                    }
                },
                error: {
                    ...this.state.error,
                    errorWeight: 'Potrzebujemy tych danych'
                }
            })
        } else {
            this.setState({
                data: {
                    ...this.state.data,
                    weight: {
                        ...this.state.data.weight,
                    }
                },
                error: {
                    ...this.state.error,
                    errorWeight: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onAgeChange = prop => event => {

        if (event.target.value.match('^[0-9]+$')) {
            this.setState({
                data: {
                    ...this.state.data,
                    age: {
                        ...this.state.data.age,
                        [prop]: event.target.value
                    }
                },
                error: {
                    ...this.state.error,
                    errorAge: ''
                }
            })
        } else if (event.target.value === '') {
            this.setState({
                data: {
                    ...this.state.data,
                    age: {
                        ...this.state.data.age,
                    }
                },
                error: {
                    ...this.state.error,
                    errorAge: 'Potrzebujemy tych danych'
                }
            })
        } else {
            this.setState({
                data: {
                    ...this.state.data,
                    age: {
                        ...this.state.data.age,
                    }
                },
                error: {
                    ...this.state.error,
                    errorAge: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onProposalChange = prop => event => {

        if (event.target.value.match('^[a-zA-Z\\s]+$')) {
            this.setState({
                data: {
                    ...this.state.data,
                    proposalMeals: {
                        ...this.state.data.proposalMeals,
                        [prop]: event.target.value
                    }
                },
                error: {
                    ...this.state.error,
                    errorProposal: ''
                }
            })
        } else if (event.target.value === '') {
            this.setState({
                data: {
                    ...this.state.data,
                    proposalMeals: {
                        ...this.state.data.proposalMeals,
                    }
                },
                error: {
                    ...this.state.error,
                    errorProposal: 'Potrzebujemy tych danych'
                }
            })
        } else {
            this.setState({
                data: {
                    ...this.state.data,
                    proposalMeals: {
                        ...this.state.data.proposalMeals,
                    }
                },
                error: {
                    ...this.state.error,
                    errorProposal: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    handleSubmit = event => {
        if (Object.values(this.state.error).every(el => el === '')) {
            firebase.database().ref(`/data/diets/${this.props.diets.length}`).set({
                ...this.state.data,
                id: `${this.props.diets.length + 1}`
            });
            this.setState({
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
                    },
                },
                error: {
                    errorName: 'Potrzebujemy tych danych*',
                    errorWeight: 'Potrzebujemy tych danych*',
                    errorAge: 'Potrzebujemy tych danych*',
                    errorProposal: 'Potrzebujemy tych danych*'

                }
            })
        } else {
            event.preventDefault();
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
                                        className={classes.textField}
                                        error={this.state.error.errorName !== 'Potrzebujemy tych danych*' && this.state.error.errorName.length !== 0}
                                        helperText={this.state.error.errorName}
                                        margin="normal"
                                        id="outlined-name"
                                        label="Nazwa diety"
                                        variant="outlined"
                                        onChange={this.handleChangeName('name').bind(this)}
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
                                        className={classes.textFieldLeft}
                                        error={this.state.error.errorWeight !== 'Potrzebujemy tych danych*' && this.state.error.errorWeight.length !== 0}
                                        helperText={this.state.error.errorWeight}
                                        margin="normal"
                                        id="outlined-min-weight"
                                        label="Min waga"
                                        variant="outlined"
                                        onChange={this.onWeightChange('min').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textFieldRight}
                                        error={this.state.error.errorWeight !== 'Potrzebujemy tych danych*' && this.state.error.errorWeight.length !== 0}
                                        helperText={this.state.error.errorWeight}
                                        margin="normal"
                                        id="outlined-max-weight"
                                        label="Max waga"
                                        variant="outlined"
                                        onChange={this.onWeightChange('max').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textFieldLeft}
                                        error={this.state.error.errorAge !== 'Potrzebujemy tych danych*' && this.state.error.errorAge.length !== 0}
                                        helperText={this.state.error.errorAge}
                                        margin="normal"
                                        id="outlined-min-age"
                                        label="Min wiek"
                                        variant="outlined"
                                        onChange={this.onAgeChange('min').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textFieldRight}
                                        error={this.state.error.errorAge !== 'Potrzebujemy tych danych*' && this.state.error.errorAge.length !== 0}
                                        helperText={this.state.error.errorAge}
                                        margin="normal"
                                        id="outlined-max-age"
                                        label="Max wiek"
                                        variant="outlined"
                                        onChange={this.onAgeChange('max').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposal !== 'Potrzebujemy tych danych*' && this.state.error.errorProposal.length !== 0}
                                        helperText={this.state.error.errorProposal}
                                        margin="normal"
                                        id="outlined-breakfast"
                                        label="Propozycja śniadania"
                                        variant="outlined"
                                        onChange={this.onProposalChange('breakfast').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposal !== 'Potrzebujemy tych danych*' && this.state.error.errorProposal.length !== 0}
                                        helperText={this.state.error.errorProposal}
                                        margin="normal"
                                        id="outlined-lunch"
                                        label="Propozycja lunchu"
                                        variant="outlined"
                                        onChange={this.onProposalChange('lunch').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposal !== 'Potrzebujemy tych danych*' && this.state.error.errorProposal.length !== 0}
                                        helperText={this.state.error.errorProposal}
                                        margin="normal"
                                        id="outlined-dinner"
                                        label="Propozycja obiadu"
                                        variant="outlined"
                                        onChange={this.onProposalChange('dinner').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposal !== 'Potrzebujemy tych danych*' && this.state.error.errorProposal.length !== 0}
                                        helperText={this.state.error.errorProposal}
                                        margin="normal"
                                        id="outlined-dessert"
                                        label="Propozycja deseru"
                                        variant="outlined"
                                        onChange={this.onProposalChange('dessert').bind(this)}
                                    />

                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposal !== 'Potrzebujemy tych danych*' && this.state.error.errorProposal.length !== 0}
                                        helperText={this.state.error.errorProposal}
                                        margin="normal"
                                        id="outlined-supper"
                                        label="Propozycja kolacji"
                                        variant="outlined"
                                        onChange={this.onProposalChange('supper').bind(this)}
                                    />

                                    <Button
                                        type='submit'
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={this.handleSubmit}
                                    >
                                        Dodaj dietę
                                    </Button>
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
                                    (Potrzebujemy tych danych*)</strong> ].</Typography>
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