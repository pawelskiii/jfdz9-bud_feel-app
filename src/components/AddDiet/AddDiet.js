import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import {withStyles} from '@material-ui/core/styles';
import {TextField, Button, MenuItem} from '@material-ui/core';
import firebase from "firebase";
import {connect} from "react-redux";

const styles = theme => ({
    addDietContainer: {},
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

// const time = [
//     {
//         value: '7',
//         label: '7 dni',
//     },
//     {
//         value: '14',
//         label: '14 dni',
//     },
//     {
//         value: '28',
//         label: '28 dni',
//     },
// ];

class AddDiet extends Component {

    state = {
        data: {
            id: 999,
            name: '',
            description: '',
            typeId: '',
            createdAt: "2018-09-09",
            weight: {
                max: 100,
                min: 10
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
                [prop]: event.target.value
            }
        })
    };

    onTypeChange = event => {
        this.setState({
            data: {
                ...this.state.data,
                typeId: event.target.value === 'masa' ? 1 : event.target.value === 'utrzymanie' ? 2 : 3
            }
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        firebase.database().ref(`/data/diets/${this.props.diets.length}`).set(this.state.data);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Sidebar/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <div className={classes.addDietContainer}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-name"
                            label="Nazwa diety"
                            variant='outlined'
                            onChange={this.handleChange('name')}
                        />
                        <TextField
                            margin="dense"
                            id="outlined-description"
                            label="Opis diety"
                            variant='outlined'
                            onChange={this.handleChange('description')}
                        />
                        <TextField
                            select
                            margin="dense"
                            id="outlined-name"
                            label="Typ diety"
                            variant='outlined'
                            value={this.state.typeId}
                            onChange={this.onTypeChange}
                            inputProps={{
                                name: 'type',
                                id: 'type-simple',
                            }}
                        >
                            {(types !== undefined) && types.map(type => <MenuItem value={type.value}
                                                                                  key={type.value}>{type.label}</MenuItem>)}
                        </TextField>
                        <Button onClick={this.handleSubmit}>
                            Dodaj dietę
                        </Button>
                    </div>
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