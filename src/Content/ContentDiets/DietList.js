import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow } from '@material-ui/core';

import DietTableRow from './DietTableRow'

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


class DietList extends Component {

    state = {
        diets: [],
        dietTypes: [],
    };

    componentDidMount() {
        fetch('/data/diets.json')
            .then(response => response.json())
            .then(diets => this.setState({diets}));
        fetch('/data/types.json')
            .then(response => response.json())
            .then(dietTypes => this.setState({dietTypes}));
    }


    render() {
        const { diets, dietTypes } = this.state;
        const { classes } = this.props;

        return (
            <Fragment>
                <Typography variant='display3'>Diet List</Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Name</CustomTableCell>
                                <CustomTableCell>Description</CustomTableCell>
                                <CustomTableCell>Diet Type</CustomTableCell>
                                <CustomTableCell numeric>Age (years)</CustomTableCell>
                                <CustomTableCell numeric>Weight (kg)</CustomTableCell>
                                <CustomTableCell numeric>Period (days)</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {diets.map(diet => <DietTableRow diet={diet} dietType={dietTypes.map(type => diet.typeId === type.id && type.name)} key={diet.id}/>)}
                        </TableBody>
                    </Table>
                </Paper>
            </Fragment>
        )
    }
}

export default withStyles(styles)(DietList);

