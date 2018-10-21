import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, Typography, Grid, Divider} from '@material-ui/core';

import slim3 from '../../assets/slim3.jpeg';
import mass from '../../assets/mass.jpeg';
import fit from '../../assets/fit.jpg';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import firebase from 'firebase';

const styles = {
    card: {
        width: 350,
        margin: '1rem',
    },
    media: {
        height: 233,
    },
    content: {
        textAlign: 'center'
    },
    gridElementCenter: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
};



class DietCard extends Component {

    state = {
        isToggleOn: false,
    };

    /*constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    };
*/

    handleClick = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });

        this.state.isToggleOn
            ?
            firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/favs/${this.props.diet.id}`).set(true)
            :
            firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/favs/${this.props.diet.id}`).remove()
    };

    render() {
        const {dietType, diet: {id, name, age, weight, period}} = this.props;
        const {classes} = this.props;

        return (
            <Grid item key={id}>
                <Card key={id} className={classes.card}>
                    <CardActionArea>
                        <img
                            className={classes.media}
                            src={
                                dietType === "redukcja"
                                ? slim3 :
                                    dietType === "masa"
                                    ? mass :
                                        dietType === "utrzymanie"
                                        ? fit : null
                            }
                            alt={dietType ? dietType : null}
                            title={dietType ? dietType : null}
                        />
                        <CardContent>
                            <Typography variant='headline' gutterBottom>
                                {name}
                                <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
                                    <FavoriteIcon />
                                </IconButton>
                            </Typography>
                            <Divider/>
                            <Typography variant='subheading'><b>Typ:</b> {dietType}</Typography>
                            <Typography variant='subheading'><b>Wiek:</b> {`${age.min} - ${age.max}`} lat</Typography>
                            <Typography variant='subheading'><b>Waga:</b> {`${weight.min} - ${weight.max}`} kg</Typography>
                            <Typography variant='subheading'><b>Okres:</b> {period} dni</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(styles)(DietCard);
