import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow } from '@material-ui/core';

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
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});


class DietList extends Component {

    state = {
        diets: [],
    };

    componentDidMount() {
        fetch('/data/diets.json')
            .then(response => response.json())
            .then(diets => this.setState({diets}))
    }


    render() {
        const { diets } = this.state;

        return (
            <Fragment>
                <Typography variant='display3'>Diet List</Typography>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Name</CustomTableCell>
                                <CustomTableCell>Description</CustomTableCell>
                                <CustomTableCell numeric>Age (years)</CustomTableCell>
                                <CustomTableCell numeric>Weight (kg)</CustomTableCell>
                                <CustomTableCell numeric>Period (days)</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {diets.map(diet => {
                                return (
                                    <TableRow key={diet.id}>
                                        <TableCell >{diet.name}</TableCell>
                                        <TableCell >
                                            <Typography >{diet.description}</Typography>
                                            </TableCell>
                                        <TableCell numeric>{`${diet.age.min}-${diet.age.max}`}</TableCell>
                                        <TableCell numeric>{`${diet.weight.min}-${diet.weight.max}`}</TableCell>
                                        <TableCell numeric>{diet.period}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>

                </Paper>
            </Fragment>
        )
    }
}

DietList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DietList);

