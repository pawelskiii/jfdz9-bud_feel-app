import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Sidebar from '../Sidebar'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    userContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {

        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
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

class UserPanel extends Component {

    state = {
        name: '',
        surname: '',
        gender: '',
        activity: '',
        age: '',
        weight: '',
        height: '',
        BMI: '',

    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.root}>
                <Sidebar/>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <div className={classes.userContainer} noValidate autoComplete="off">
                            <TextField
                                id="outlined-name"
                                style={{ margin: 8, marginLeft: 100, marginRight: 700 }}
                                fullWidth
                                label="Imię"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-surname"
                                label="Nazwisko"
                                className={classes.textField}
                                value={this.state.surname}
                                onChange={this.handleChange('surname')}
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 8 }}
                                placeholder="Placeholder"
                            />
                            <TextField
                                id="outlined-gender"
                                label="Płeć"
                                className={classes.textField}
                                value={this.state.gender}
                                onChange={this.handleChange('gender')}
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 8 }}
                                placeholder="Placeholder"
                            />
                            <TextField
                                id="outlined-activity"
                                label="Twoja aktywność fizyczna"
                                className={classes.textField}
                                value={this.state.activity}
                                onChange={this.handleChange('activity')}
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 8 }}
                                placeholder="Placeholder"
                            />
                            <TextField
                            id="outlined-age"
                            label="Wiek"
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            type="number"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            style={{ margin: 8 }}
                            placeholder="Placeholder"
                            />
                            <TextField
                                id="outlined-weight"
                                label="Twoja waga"
                                className={classes.textField}
                                value={this.state.weight}
                                onChange={this.handleChange('weight')}
                                type="number"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 8 }}
                                placeholder="Placeholder"
                            />
                            <TextField
                                id="outlined-height"
                                label="Twój wzrost(cm)"
                                className={classes.textField}
                                value={this.state.height}
                                onChange={this.handleChange('height')}
                                type="number"
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 8 }}
                                placeholder="Placeholder"
                            />
                            <TextField
                                id="outlined-BMI"
                                label="BMI"
                                className={classes.textField}
                                value={this.state.BMI}
                                onChange={this.handleChange('BMI')}
                                margin="normal"
                                variant="outlined"
                                style={{ margin: 8 }}
                                placeholder="Placeholder"
                            />

                        </div>
                   </main>
            </form>
        )}
}

export default withStyles(styles)(UserPanel);