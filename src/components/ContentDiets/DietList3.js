import React, {Component} from 'react';
import {connect} from 'react-redux'

import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import slim from '../../assets/slim.jpeg';

import DietFilter from './DietFilter';
import DietCards from './DietCards';
import DietTable from './DietTable';
import Sidebar from '../Sidebar/index';


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

class DietList3 extends Component {

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
            <Grid container className={classes.gridElementCenter}>
                <Grid item xs={12}>
                    <Paper>
                        <DietFilter
                            onFilterChanged={this.onFilterChanged}
                            onTypeChanged={this.onTypeChanged}
                            onPeriodChanged={this.onPeriodChanged}
                            types={types}
                            filter={this.state.filter.text}/>
                    </Paper>
                </Grid>

                <DietCards diets={this.getDiets()} types={types}/>

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
)(withStyles(styles)(DietList3));

