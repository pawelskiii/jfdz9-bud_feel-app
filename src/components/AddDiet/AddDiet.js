import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import {withStyles} from '@material-ui/core/styles';
import {Typography, Paper, Grid, Divider} from '@material-ui/core';
import {TextField, MenuItem, Button, CardMedia} from '@material-ui/core';
import {amber, blueGrey} from '@material-ui/core/colors';
import firebase from "firebase";
import {connect} from "react-redux";
import Foto from '../../assets/addDiets_foto.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

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

const superstate = {
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
        errorWeightMin: 'Potrzebujemy tych danych*',
        errorWeightMax: 'Potrzebujemy tych danych*',
        errorAgeMin: 'Potrzebujemy tych danych*',
        errorAgeMax: 'Potrzebujemy tych danych*',
        errorProposalBreakfast: 'Potrzebujemy tych danych*',
        errorProposalLunch: 'Potrzebujemy tych danych*',
        errorProposalDinner: 'Potrzebujemy tych danych*',
        errorProposalDessert: 'Potrzebujemy tych danych*',
        errorProposalSupper: 'Potrzebujemy tych danych*'
    },
    openError: false,
    openAdd: false,
};

class AddDiet extends Component {

    state = superstate;

    handleChange = prop => event => {
        this.setState({
            data: {
                ...this.state.data,
                [prop]: event.target.value,
            }
        })
    };

    handleChangeName = prop => event => {

        if (event.target.value.match('^[a-ząćśńółężźA-ZĄĆŚŃÓŁĘŻŹ\\s]+$')) {
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
                    [prop]: event.target.value,
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
                    [prop]: event.target.value,
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

    onWeightChangeMin = prop => event => {

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
                    errorWeightMin: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorWeightMin: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorWeightMin: 'Wprowadź poprawne dane'
                },
                value: {
                    ...this.state.value,
                    [prop]: event.target.value
                }
            })
        }
    };

    onWeightChangeMax = prop => event => {

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
                    errorWeightMax: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorWeightMax: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorWeightMax: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onAgeChangeMin = prop => event => {

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
                    errorAgeMin: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorAgeMin: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorAgeMin: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onAgeChangeMax = prop => event => {

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
                    errorAgeMax: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorAgeMax: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorAgeMax: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onProposalBreakfast = prop => event => {

        if (event.target.value.match('^[a-ząćśńółężźA-ZĄĆŚŃÓŁĘŻŹ\\s]+$')) {
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
                    errorProposalBreakfast: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorProposalBreakfast: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorProposalBreakfast: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onProposalLunch = prop => event => {

        if (event.target.value.match('^[a-ząćśńółężźA-ZĄĆŚŃÓŁĘŻŹ\\s]+$')) {
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
                    errorProposalLunch: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorProposalLunch: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorProposalLunch: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onProposalDinner = prop => event => {

        if (event.target.value.match('^[a-ząćśńółężźA-ZĄĆŚŃÓŁĘŻŹ\\s]+$')) {
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
                    errorProposalDinner: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorProposalDinner: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorProposalDinner: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onProposalDessert = prop => event => {

        if (event.target.value.match('^[a-ząćśńółężźA-ZĄĆŚŃÓŁĘŻŹ\\s]+$')) {
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
                    errorProposalDessert: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorProposalDessert: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorProposalDessert: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    onProposalSupper = prop => event => {

        if (event.target.value.match('^[a-ząćśńółężźA-ZĄĆŚŃÓŁĘŻŹ\\s]+$')) {
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
                    errorProposalSupper: ''
                }
            })
        } else if (event.target.value === '') {
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
                    errorProposalSupper: 'Potrzebujemy tych danych'
                }
            })
        } else {
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
                    errorProposalSupper: 'Wprowadź poprawne dane'
                }
            })
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        if (Object.values(this.state.error).every(el => el === '')) {
            this.setState({
                openAdd: true
            })
        } else {
            this.setState({openError: true})
        }
    };

    handleCloseError = event => {
        event.preventDefault();
        this.setState({openError: false});
    };

    handleCloseAdd = () => {
        firebase.database().ref(`/data/diets/${this.props.diets.length}`).set({
            ...this.state.data,
            id: `${this.props.diets.length + 1}`
        });
        this.setState(superstate);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Sidebar/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>

                    <div>
                        <Dialog
                            open={this.state.openError}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={this.handleCloseError}
                        >
                            <DialogContent>
                                <DialogContentText style={{color: amber[900], fontSize: '2rem'}}>
                                    Uzupełnij wszystkie wymagane pola!
                                </DialogContentText>
                            </DialogContent>
                            <DialogContent>
                                <DialogContentText style={{color: blueGrey[800], fontSize: '1.2rem'}}>
                                    Nie uzupełniłeś wszystkich wymaganych pól. Aby dodać dietę uzupełnij te oznaczone
                                    <em> Potrzebujemy tych danych*</em>.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleCloseError} style={{color: amber[900]}} type='submit'>
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                    <div>
                        <Dialog
                            open={this.state.openAdd}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={this.handleCloseAdd}
                        >
                            <DialogContent>
                                <DialogContentText style={{color: amber[900], fontSize: '2rem'}}>
                                    Gratulacje, dodałeś swoją dietę.
                                </DialogContentText>
                            </DialogContent>
                            <DialogContent>
                                <DialogContentText style={{color: blueGrey[800], fontSize: '1.2rem'}}>
                                    Dziękujemy za dodanie diety. W przypadku chęci dodania kolejnej, po
                                    kliknięciu <em>OK</em> będzie mógł to zrobić.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleCloseAdd} style={{color: amber[900]}} type='submit'>
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>

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
                                        label="Nazwa diety"
                                        variant="outlined"
                                        value={this.state.data.name}
                                        onChange={this.handleChangeName('name')}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        label="Opis diety"
                                        variant="outlined"
                                        value={this.state.data.description}
                                        onChange={this.handleChange('description')}
                                    />
                                    <TextField
                                        select
                                        className={classes.textField}
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
                                        error={this.state.error.errorWeightMin !== 'Potrzebujemy tych danych*' && this.state.error.errorWeightMin.length !== 0}
                                        helperText={this.state.error.errorWeightMin}
                                        label="Min waga"
                                        variant="outlined"
                                        value={this.state.data.weight.min}
                                        onChange={this.onWeightChangeMin('min')}
                                    />
                                    <TextField
                                        className={classes.textFieldRight}
                                        error={this.state.error.errorWeightMax !== 'Potrzebujemy tych danych*' && this.state.error.errorWeightMax.length !== 0}
                                        helperText={this.state.error.errorWeightMax}
                                        label="Max waga"
                                        variant="outlined"
                                        value={this.state.data.weight.max}
                                        onChange={this.onWeightChangeMax('max')}
                                    />
                                    <TextField
                                        className={classes.textFieldLeft}
                                        error={this.state.error.errorAgeMin !== 'Potrzebujemy tych danych*' && this.state.error.errorAgeMin.length !== 0}
                                        helperText={this.state.error.errorAgeMin}
                                        label="Min wiek"
                                        variant="outlined"
                                        value={this.state.data.age.min}
                                        onChange={this.onAgeChangeMin('min')}
                                    />
                                    <TextField
                                        className={classes.textFieldRight}
                                        error={this.state.error.errorAgeMax !== 'Potrzebujemy tych danych*' && this.state.error.errorAgeMax.length !== 0}
                                        helperText={this.state.error.errorAgeMax}
                                        label="Max wiek"
                                        variant="outlined"
                                        value={this.state.data.age.max}
                                        onChange={this.onAgeChangeMax('max')}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposalBreakfast !== 'Potrzebujemy tych danych*' && this.state.error.errorProposalBreakfast.length !== 0}
                                        helperText={this.state.error.errorProposalBreakfast}
                                        label="Propozycja śniadania"
                                        variant="outlined"
                                        value={this.state.data.proposalMeals.breakfast}
                                        onChange={this.onProposalBreakfast('breakfast')}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposalLunch !== 'Potrzebujemy tych danych*' && this.state.error.errorProposalLunch.length !== 0}
                                        helperText={this.state.error.errorProposalLunch}
                                        label="Propozycja lunchu"
                                        variant="outlined"
                                        value={this.state.data.proposalMeals.lunch}
                                        onChange={this.onProposalLunch('lunch')}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposalDinner !== 'Potrzebujemy tych danych*' && this.state.error.errorProposalDinner.length !== 0}
                                        helperText={this.state.error.errorProposalDinner}
                                        label="Propozycja obiadu"
                                        variant="outlined"
                                        value={this.state.data.proposalMeals.dinner}
                                        onChange={this.onProposalDinner('dinner')}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposalDessert !== 'Potrzebujemy tych danych*' && this.state.error.errorProposalDessert.length !== 0}
                                        helperText={this.state.error.errorProposalDessert}
                                        label="Propozycja deseru"
                                        variant="outlined"
                                        value={this.state.data.proposalMeals.dessert}
                                        onChange={this.onProposalDessert('dessert')}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        error={this.state.error.errorProposalSupper !== 'Potrzebujemy tych danych*' && this.state.error.errorProposalSupper.length !== 0}
                                        helperText={this.state.error.errorProposalSupper}
                                        label="Propozycja kolacji"
                                        variant="outlined"
                                        value={this.state.data.proposalMeals.supper}
                                        onChange={this.onProposalSupper('supper')}
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