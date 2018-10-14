import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Input, InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 400,
    },
    formControl: {
        margin: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class DietFilter extends Component {
    state = {
        periods: [7, 14, 28],
        type: '',
        period: '',
    };

    onChange = event => {
        this.props.onFilterChanged(event.target.value);
    };

    onTypeChange = event => {
        this.props.onTypeChanged(event.target.value);
        this.setState({type: event.target.value})
    };

    onPeriodChange = event => {
        this.props.onPeriodChanged(event.target.value);
        this.setState({period: event.target.value})
    };

    render() {
        const { periods } = this.state;
        const { classes, types } = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name">Nazwa</InputLabel>
                    <Input
                        onChange={this.onChange}
                        value={this.props.filter}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="type">Typ</InputLabel>
                    <Select
                        value={this.state.type}
                        onChange={this.onTypeChange}
                        inputProps={{
                            name: 'type',
                            id: 'type-simple',
                        }}
                    >
                        <MenuItem value="">
                            <em>Brak</em>
                        </MenuItem>
                        {(types !== undefined) && types.map(type => <MenuItem value={type.name} key={type.name}>{type.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="period">Okres</InputLabel>
                    <Select
                        value={this.state.period}
                        onChange={this.onPeriodChange}
                        inputProps={{
                            name: 'period',
                            id: 'period-simple',
                        }}
                    >
                        <MenuItem value="">
                            <em>Brak</em>
                        </MenuItem>
                        {periods.map(period => <MenuItem value={period} key={period}>{period}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(DietFilter);