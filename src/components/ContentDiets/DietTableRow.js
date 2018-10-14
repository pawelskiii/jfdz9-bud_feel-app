import React, {Component} from 'react';
import {
    TableRow,
    TableCell,
    Typography
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import slim from '../../assets/slim.jpeg';

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

class DietTableRow extends Component {
    render() {
        const {dietType, diet: {id, name, description, age, weight, period}} = this.props;
        const {classes} = this.props;

        return (
            <Grid item key={id}>
                <Card key={id} className={classes.card}>
                    <CardActionArea>
                        <img
                            className={classes.media}
                            src={slim}
                            title="redukcja"
                        />
                        <CardContent>
                            <Typography>{name}</Typography>
                            <Typography>
                                <Typography>{description}</Typography>
                            </Typography>
                            <Typography>{dietType}</Typography>
                            <Typography>{`${age.min} - ${age.max}`}</Typography>
                            <Typography>{`${weight.min} - ${weight.max}`}</Typography>
                            <Typography>{period}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(styles)(DietTableRow);
