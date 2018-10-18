import React, {Component} from 'react';
import Sidebar from '../Sidebar/index';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux'

const styles = theme => ({
    favContainer: {

    },
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 2,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
});


class Favourites extends Component {

    state = {
        favs: ''
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Sidebar/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <div className={classes.favContainer}>
                        Moje ulubione
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </div>
                </main>
            </div>
        )}
}


const mapStateToProps = state => ({
    favs: state.favs === null
        ? {}
        : state.favs.data
});

export default connect(
    mapStateToProps
)(withStyles(styles)(Favourites));
