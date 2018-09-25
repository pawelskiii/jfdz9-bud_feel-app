import React, { Component, Fragment } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Carousel from './CentralCarousel/index';
import Fees from './ContentFees/index';
import Dashboard from './Dashboard/index';

const styles = {
    carouselContainer: {
        marginBottom: '1rem',
    },
    feesContainer: {
        marginBottom: '1rem',
    },
};

class Content extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography className={classes.carouselContainer}>
                    <Carousel/>
                </Typography>
                <Typography className={classes.feesContainer}>
                    <Fees/>
                </Typography>
                <Typography className={classes.dashboardContainer}>
                    <Dashboard/>
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Content);