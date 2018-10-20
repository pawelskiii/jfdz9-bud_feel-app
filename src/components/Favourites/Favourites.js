import React, {Component, Fragment} from 'react';
import Sidebar from '../Sidebar/index';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {connect} from 'react-redux'
import {Card, CardActionArea, CardContent, Typography, Grid, Divider, Paper} from '@material-ui/core';
import DietTable from '../ContentDiets/DietCards';

import slim3 from '../../assets/slim3.jpeg';
import mass from '../../assets/mass.jpeg';
import fit from '../../assets/fit.jpg';


/*const styles = theme => ({
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
});*/
const styles = theme => ({
    panelContainer: {},
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
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class Favourites extends Component {

    state = {
        favs: ''
    };

/*
    componentDidMount() {

    }
*/

    getDiets() {
        if (this.props.diets !== undefined && this.props.favs !== undefined && this.props.favs !== null && this.props.favs === true) {
            return this.props.diets.filter(diet => {
                return Object.keys(this.props.favs).includes(diet.id);
                // return console.log("diety" , el.id);
            });
            /*Object.keys(this.props.favs).forEach((el) => {
                console.log("favsy" , el)
            });*/
        }
    }

    render() {

        const {classes, types} = this.props;


        return (

            <Fragment>
                <div className={classes.root}>
                    <Sidebar/>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <Typography variant='display3' color='primary' align='center'>Lista Ulubionych</Typography>
                        <Paper>
                            <DietTable diets={this.getDiets()} types={types}/>
                        </Paper>
                    </main>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    favs: state.favs === null
        ? {}
        : state.favs.data,
    diets: state.diets === null
        ? {}
        : state.diets.data,
    types: state.types === null
        ? {}
        : state.types.data,

});

export default connect(
    mapStateToProps
)(withStyles(styles)(Favourites));
