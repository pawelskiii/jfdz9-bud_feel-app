import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Carousel from './CentralCarousel/index';
import Fees from './ContentFees/index';
import Dashboard from './Dashboard/index';
import DietList from './ContentDiets/index';

const styles = {
    dietContainer: {
        marginBottom: '1rem',
    },
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
                <div className={classes.dietContainer}>
                    <DietList/>
                </div>
                <div className={classes.carouselContainer}>
                    <Carousel/>
                </div>
                <div className={classes.feesContainer}>
                    <Fees/>
                </div>
                <div className={classes.dashboardContainer}>
                    <Dashboard/>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Content);