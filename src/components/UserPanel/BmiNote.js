import React, {Component, Fragment} from 'react';
import {Typography, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';

const styles = theme => ({

    buttonBmi: {
        width: '70%',
        marginTop: '2%',
        fontSize: 17,
    },

    info: {
        fontSize: 20,
        textAlign: 'center',
        padding: theme.spacing.unit * 2
    },
});

class BmiNote extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <Paper className={classes.info} style={{marginTop: 16, backgroundColor: blueGrey[900]}}>
                    <Typography variant='display1' style={{color: 'white'}} align='center'>Chcesz poznać swoje
                        BMI?</Typography>
                </Paper>
                <Paper className={classes.info} style={{marginTop: 24}}>
                    <Typography component="h2" variant="headline" paragraph={true} style={{color: amber[900]}}
                                align='center'>
                        Co to jest BMI?
                    </Typography>
                    <Typography variant="title" paragraph={true} align='center' style={{color: blueGrey[800]}}>
                        BMI Wskaźnik masy ciała (z ang. Body Mass Index (BMI))<br/>
                        – współczynnik powstały przez podzielenie masy ciała podanej w kilogramach<br/>
                        przez kwadrat wysokości podanej w metrach.</Typography>
                    <Typography component="h2" variant="headline" paragraph={true} style={{color: amber[900]}}
                                align='center'>
                        Skomplikowane?
                    </Typography>
                    <Typography variant="title" paragraph={true} align='center' style={{color: blueGrey[800]}}>
                        Nie przejmuj się tym!<br/>Właśnie dlatego przygotowaliśmy dla Ciebie nasz kalkulator,<br/>
                        wystarczy, że uzupełnisz dane, a my obliczymy dla Ciebie Twoje BMI.
                    </Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.buttonBmi}
                        onClick={this.props.handleClickOpen}>
                        Oblicz swoje BMI
                    </Button>
                </Paper>
            </Fragment>
        )
    }
}

export default withStyles(styles)(BmiNote);