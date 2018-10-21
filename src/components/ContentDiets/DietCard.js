import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Typography, Grid, Divider} from '@material-ui/core';

import amber from '@material-ui/core/colors/amber';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import DetailedDiet from './DetailedDiet';

import slim3 from '../../assets/slim3.jpeg';
import mass from '../../assets/mass.jpeg';
import fit from '../../assets/fit.jpg';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import firebase from 'firebase';
import {connect} from "react-redux";

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
};

class DietCard extends Component {

    handleClick = () => {

        (this.props.favs !== undefined)
            ? this.props.favs === null
                ? firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/favs/${this.props.diet.id}`).set(true)
                : Object.keys(this.props.favs).includes(this.props.diet.id)
                    ? firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/favs/${this.props.diet.id}`).remove()
                    : firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/favs/${this.props.diet.id}`).set(true)
            : null
    };

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
                        <Typography variant='headline' gutterBottom>
                            {name}
                            <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
                                <FavoriteIcon style={{color: (this.props.favs !== undefined && this.props.favs !== null && Object.keys(this.props.favs).includes(id)) ? amber[800] : ''}}/>
                            </IconButton>
                        </Typography>
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
                            image={getImage(dietType)}
                        />
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    favs: state.favs === null
        ? {}
        : state.favs.data,
    diets: state.diets === null
        ? {}
        : state.diets.data,
    types: state.types === null
        ? {}
        : state.types.data,
});

export default connect(
    mapStateToProps
)(withStyles(styles)(DietCard));