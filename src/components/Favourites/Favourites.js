import React, {Component, Fragment} from 'react';
import Sidebar from '../Sidebar/index';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {Typography, Paper} from '@material-ui/core';
import DietTable from '../ContentDiets/DietCards';


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

    getDiets() {
        console.log(this.props.diets, this.props.favs);
        if (!!this.props.diets && !!this.props.favs) {
            const favsKeys = Object.keys(this.props.favs);
            /* debugger;*/
            return this.props.diets.filter(diet => {
                return favsKeys.includes(diet.id.toString());
            });
        } else {
            return [];
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
