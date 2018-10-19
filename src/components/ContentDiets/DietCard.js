import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Typography, Grid, Divider} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DetailedDiet from './DetailedDiet';

import slim3 from '../../assets/slim3.jpeg';
import mass from '../../assets/mass.jpeg';
import fit from '../../assets/fit.jpg';

const styles = {
    card: {
        width: 350,
        margin: '1rem',
    },
    media: {
        height: 233,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    dialogButton: {
        alignSelf: 'flex-end',
    },
    gridElementCenter: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
};

const getImage = (dietType) => {
    return (
        dietType === "redukcja"
            ? slim3 :
            dietType === "masa"
                ? mass :
                dietType === "utrzymanie"
                    ? fit : null
    )
}

class DietCard extends Component {
    render() {
        const {dietType, diet: {id, name, description, createdAt, age, weight, period, proposalMeals}} = this.props;
        const {classes} = this.props;

        return (
            <Grid item key={id}>
                <Card key={id} className={classes.card}>
                    {dietType && <CardMedia
                        className={classes.media}
                        image={getImage(dietType)}
                        alt={dietType}
                        title={dietType}
                    />}
                    <CardContent className={classes.content}>
                        <Typography variant='headline' gutterBottom>{name}</Typography>
                        <Divider/>
                        <Table padding='none'>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography variant='body2'><b>Typ</b></Typography>
                                    </TableCell>
                                    <TableCell numeric>
                                        <Typography variant='body2'>{dietType}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography variant='body2'><b>Wiek</b></Typography>
                                    </TableCell>
                                    <TableCell numeric>
                                        <Typography variant='body2'>{`${age.min} - ${age.max}`} lat</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography variant='body2'><b>Waga</b></Typography>
                                    </TableCell>
                                    <TableCell numeric>
                                        <Typography variant='body2'>{`${weight.min} - ${weight.max}`} kg</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography variant='body2'><b>Okres</b></Typography>
                                    </TableCell>
                                    <TableCell numeric>
                                        <Typography variant='body2'>{period} dni</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <DetailedDiet
                            className={classes.dialogButton}
                            dietType={dietType}
                            id={id}
                            name={name}
                            description={description}
                            createdAt={createdAt}
                            age={age}
                            weight={weight}
                            period={period}
                            proposalMeals={proposalMeals}
                        />
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(styles)(DietCard);
