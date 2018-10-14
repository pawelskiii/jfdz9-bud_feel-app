import React, {Component, Fragment} from 'react';
import {Table, TableHead, TableRow, TableBody, TableCell, Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import slim from '../../assets/slim.jpeg';

import DietCard from './DietCard';

const styles = {
    card: {
        width: 350,
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
class DietCards extends Component {
    render() {
        const {classes, diets, types} = this.props;

        return (
            <Fragment>
                {(diets !== undefined)
                && diets.map(diet =>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <img
                                    className={classes.media}
                                    src={slim}
                                    title="redukcja"
                                />
                                <CardContent className={classes.content}>
                                    <Typography gutterBottom variant="h2" component="h1">
                                        {`${diet.id}, ${diet.name}`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Fragment>
        )
    }
}

export default withStyles(styles)(DietCards);