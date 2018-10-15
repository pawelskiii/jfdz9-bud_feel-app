import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import DietTableRow from './DietCard';

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
        justifyContent: 'space-evenly',
        marginTop: '1rem',
    },
};


class DietCards extends Component {
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
                    : null
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(DietCards);