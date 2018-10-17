import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';


import Carousel from './CentralCarousel/index';
import Fees from './ContentFees/index';
import Dashboard from './Dashboard/index';
import Sidebar from '../Sidebar/index'


const styles = theme => ({
    carouselContainer: {
        marginBottom: '1rem',
    },
    feesContainer: {
        marginBottom: '1rem',
    },
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        // position: 'relative',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 2,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class Content extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Sidebar/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <div className={classes.carouselContainer}>
                        <Carousel/>
                    </div>
                    <div className={classes.feesContainer}>
                        <Fees/>
                    </div>
                    <div className={classes.dashboardContainer}>
                        <Dashboard/>
                    </div>
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Content);