import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import {withStyles} from '@material-ui/core/styles';
import { TextField, Button, Input, InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';
import firebase from "firebase";

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

let newPostKey = firebase.database().ref().child('/data/diets');
let key = Object.keys(newPostKey);

// let lalala = firebase.database().ref.child("/data/diets").on("value", function(snapshot) {
//     console.log("There are "+snapshot.numChildren()+" messages");
// });

let ialala = Object.keys('/data').length;
console.log(ialala);

// let key = newPostKey.key();
console.log(newPostKey);
console.log(key);

let adsaod = Object.keys(snapshot.val())[0];

console.log(adsaod);

class AddDiet extends Component {

    state = {
        id: 999,
        name: '',
        description: '',
        typeId: 1,
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
    };

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        firebase.database().ref('/data/diets').push(this.state);
    };

    onTypeChange = event => {
        this.props.onTypeChanged(event.target.value);
        this.setState({type: event.target.value})
    };

    render() {
        const {classes} = this.props;
        let newPostKey = firebase.database().ref().child('posts').push().key;
        console.log(newPostKey);
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
                            onChange={this.handleChange('typeId')}
                        />
                        {types.map(type => (
                            <MenuItem key={type.value} value={type.value}>
                                {type.label}
                            </MenuItem>
                        ))}

                        <FormControl>
                            <InputLabel htmlFor="type">Typ diety</InputLabel>
                            <Select
                                value={this.state.typeId}
                                onChange={this.onTypeChange}
                                inputProps={{
                                    name: 'type',
                                    id: 'type-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>Brak</em>
                                </MenuItem>
                                {(types !== undefined) && types.map(type => <MenuItem value={type.value} key={type.value}>{type.label}</MenuItem>)}
                            </Select>
                        </FormControl>



                        <Button onClick={this.handleSubmit}>
                            Dodaj dietę
                        </Button>
                    </div>
                </main>
            </div>
        )
    }
}


export default withStyles(styles)(AddDiet);