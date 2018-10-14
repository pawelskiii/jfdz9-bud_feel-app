import React, {Component} from 'react';
import { connect } from 'react-redux'

import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
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

class DietList2 extends Component {
    render() {
        const {classes, diets} = this.props;

        if (diets !== undefined) {
            diets.forEach(el => console.log(el.age))
        }


        return (
            <Grid container className={classes.gridElementCenter}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <img
                                className={classes.media}
                                src={slim}
                                title="7-dniowy abonament"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="h2" component="h1">
                                    Abonament na 7 dni
                                </Typography>
                                <Typography gutterBottom component="p">
                                    Chcesz wypróbować którąkolwiek dietę z oferty?
                                    Bądź też po prostu chcesz nas przetestować?
                                </Typography>
                                <Typography variant="h2" component="h2">
                                    Ten abonament jest dla Ciebie!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    diets: state.diets === null
        ? {}
        : state.diets.data,
    types: state.types === null
        ? {}
        : state.types.data,
});

export default connect(
    mapStateToProps
)(withStyles(styles)(DietList2));