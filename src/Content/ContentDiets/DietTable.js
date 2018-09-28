import React, {Component} from 'react';
import {Table, TableHead, TableRow, TableBody, TableCell, Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import DietTableRow from './DietTableRow';

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
    table: {
        minWidth: 700,
    },
});

class DietTable extends Component {
    render() {
        const {diets, dietTypes} = this.props;
        const {classes} = this.props;

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Nazwa</CustomTableCell>
                        <CustomTableCell>Opis</CustomTableCell>
                        <CustomTableCell>Typ</CustomTableCell>
                        <CustomTableCell numeric>Wiek (lata)</CustomTableCell>
                        <CustomTableCell numeric>Waga (kg)</CustomTableCell>
                        <CustomTableCell numeric>Okres (dni)</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(diets.length > 0)
                        ? diets.map(diet =>
                            <DietTableRow
                                diet={diet}
                                dietType={dietTypes.find(type => diet.typeId === type.id).name}
                                key={diet.id}
                            />)
                        : <TableCell>
                            <Typography variant='headline'> Brak diet spełniających wymagania</Typography>
                        </TableCell>
                    }
                </TableBody>
            </Table>
        )
    }
}

export default withStyles(styles)(DietTable);