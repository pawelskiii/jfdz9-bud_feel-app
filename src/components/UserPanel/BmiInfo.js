import React, {Component} from 'react';
import {Typography, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import amber from '@material-ui/core/colors/amber';

const CustomTableCell = withStyles(theme => ({
    body: {
        fontSize: 20,
    },
}))(TableCell);

const styles = theme => ({

    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },

    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#E0E0E0',
        },
    }
});


class BmiInfo extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {this.props.form.weight !== '' && this.props.form.height !== '' ?
                        <Typography component="h2" variant="headline" style={{color: amber[900]}}>
                            Twoje BMI
                            wynosi: {(this.props.form.weight / (this.props.form.height / 100 * this.props.form.height / 100)).toFixed(2)}
                        </Typography>
                        :
                        <Typography component="h2" variant="headline" style={{color: amber[900]}}>
                            Wpisz swoją wagę i wzrost!
                        </Typography>
                    }
                </DialogTitle>
                <DialogContent>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableBody>
                                <TableRow className={classes.row}>
                                    <CustomTableCell component="th" scope="row">
                                        Niedowaga
                                    </CustomTableCell>
                                    <CustomTableCell numeric>poniżej 18,5</CustomTableCell>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <CustomTableCell component="th" scope="row">
                                        Waga normalna
                                    </CustomTableCell>
                                    <CustomTableCell numeric>do 25</CustomTableCell>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <CustomTableCell component="th" scope="row">
                                        Nadwaga
                                    </CustomTableCell>
                                    <CustomTableCell numeric>do 30</CustomTableCell>
                                </TableRow>
                                <TableRow className={classes.row}>
                                    <CustomTableCell component="th" scope="row">
                                        Otyłość
                                    </CustomTableCell>
                                    <CustomTableCell numeric>do 40</CustomTableCell>
                                </TableRow> <TableRow className={classes.row}>
                                <CustomTableCell component="th" scope="row">
                                    Poważna otyłość
                                </CustomTableCell>
                                <CustomTableCell numeric>powyżej 40</CustomTableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>
                        Zamknij
                    </Button>
                </DialogActions>
            </Dialog>

        )
    }
}

export default withStyles(styles)(BmiInfo);