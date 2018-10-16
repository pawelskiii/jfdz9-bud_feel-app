import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import {withStyles} from '@material-ui/core/styles';
import { TextField, Button } from "@material-ui/core";
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

// const types = [
//     {
//         value: 'masa',
//         label: 'masa',
//     },
//     {
//         value: 'utrzymanie',
//         label: 'utrzymanie',
//     },
//     {
//         value: 'redukcja',
//         label: 'redukcja',
//     },
// ];
//
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

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: null });
        firebase.database().ref('/data/diets').push(this.state).catch(
            error => this.setState({ error })
        );
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
                            type="name"
                            name="name"
                            variant='outlined'
                            onChange={this.handleChange}
                        />
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