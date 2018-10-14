import React, {Component, Fragment} from 'react';
import {Table, TableHead, TableRow, TableBody, TableCell, Typography, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import DietTableRow from './DietTableRow';
import DietFilter from './DietFilter';

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


class DietTable extends Component {
    render() {
        const {classes, diets, types} = this.props;

        return (
            <Grid container className={classes.gridElementCenter}>
                {(diets !== undefined)
                    ? diets.map(diet =>
                        <DietTableRow
                            diet={diet}
                            dietType={(types !== undefined) && types.find(type => diet.typeId === type.id).name}
                            key={diet.id}
                        />)
                    : <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>BRAK DIET</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(DietTable);