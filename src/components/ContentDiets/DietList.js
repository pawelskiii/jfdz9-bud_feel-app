import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Typography, Paper, Grid} from '@material-ui/core';
import { connect } from 'react-redux'

import DietFilter from './DietFilter';
import DietTable from './DietCards';
import Sidebar from '../Sidebar/index';

const styles = theme => ({
    panelContainer: {

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
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class DietList extends Component {

    state = {
        filter: {
            text: '',
            type: '',
            period: '',
        }
    };

    onFilterChanged = filter => {
        this.setState({
            filter: {
                ...this.state.filter,
                text: filter,
            }
        })
    };

    onTypeChanged = type => {
        this.setState({
            filter: {
                ...this.state.filter,
                type: type,
            }
        })
    };

    onPeriodChanged = period => {
        this.setState({
            filter: {
                ...this.state.filter,
                period: period,
            }
        })
    };

    getDiets() {
        if (this.props.diets !== undefined) {
            return this.props.diets.filter(diet => {
                return diet.name.toLowerCase().includes(this.state.filter.text.toLowerCase())
                    && (this.state.filter.type === ''
                        || this.props.types[diet.typeId - 1].name === this.state.filter.type)
                    && (this.state.filter.period === ''
                        || diet.period === this.state.filter.period);
            })
        }
    }

    render() {
        const {classes, types} = this.props;

        return (
            <Fragment>
                <div  className={classes.root}>

                    <Sidebar/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                <Typography variant='display3' color='primary' align='center'>Lista Diet</Typography>
                    <Grid item xs={12}>
                        <Paper>
                            <DietFilter
                                onFilterChanged={this.onFilterChanged}
                                onTypeChanged={this.onTypeChanged}
                                onPeriodChanged={this.onPeriodChanged}
                                types={types}
                                filter={this.state.filter.text}
                            />
                        </Paper>
                    </Grid>
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
    diets: state.diets === null
        ? {}
        : state.diets.data,
    types: state.types === null
        ? {}
        : state.types.data,
});

export default connect(
    mapStateToProps
)(withStyles(styles)(DietList));

