import React, { Component, Fragment } from 'react';
import {Pie} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import firebase from 'firebase';
import {Grid, Typography, Paper, CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 2,
        minWidth: 0,
    },

    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 64,
        padding: 0,
        paddingBottom: 32
    },

    description: {
        backgroundColor: "#263238",
        height: 70,
        marginBottom: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

const data = {
    labels: [],

    datasets: [{
        data: [],
        backgroundColor: [
            '#FFC107',
            '#FFA000',
            '#78909C'
        ],
        hoverBackgroundColor: [
            '#FF6F00',
            '#FF6F00',
            '#FF6F00'
        ]
    }],

    options: {
        legend: {
            display: true,
            labels: {
                fontSize: '40rem'
            }
        }
    }
};

const donat = {
    labels: [
        'Bardzo zadowoleni klienci',
        'Zadowoleni klienci',
        'Niezadowoleni klienci'
    ],
    datasets: [{
        data: [370, 516, 32],
        backgroundColor: [
            '#FFA000',
            '#FFC107',
            '#78909C'
        ],
        hoverBackgroundColor: [
            '#FF6F00',
            '#FF6F00',
            '#FF6F00'
        ]
    }],



    options: {
        maintainAspectRatio: false,


            labels: {
                fontSize: '40rem'
            }

    }
};

class Dashboard extends Component {


    state = {
        types:  [],
        diets: []
    };

    componentDidMount() {
        firebase.database().ref('data/types').on('value', snapshot => {
            this.setState({
                types: snapshot.val()
            })
        });
        firebase.database().ref('data/diets').on('value', snapshot => {
            this.setState({
                diets: snapshot.val()
            })
        });
    };

    render() {

        const diets = this.state.diets.map(diets => diets.typeId);

        let numberOfTypes = {
            masa: 0,
            utrzymanie: 0,
            redukcja: 0
        };

        diets.forEach(i => {
            switch (i) {
                case 1:
                    numberOfTypes.masa++;
                    break;
                case 2:
                    numberOfTypes.utrzymanie++;
                    break;
                default:
                    numberOfTypes.redukcja++;
            }
        });

        data.labels = Object.keys(numberOfTypes);
        data.datasets[0].data = [numberOfTypes.masa,numberOfTypes.utrzymanie,numberOfTypes.redukcja];

        const {classes} = this.props;

        return (
            <Fragment>
                <main className={classes.content}>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <CardContent className={classes.description}>
                                    <Typography variant='headline' color='secondary' align='center'>
                                        Bogata oferta diet, uwzględniajaca Twoje aktualne potrzeby
                                    </Typography>
                                </CardContent>
                                <Pie data={data}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <CardContent className={classes.description}>
                                    <Typography variant='headline' color='secondary' align='center'>
                                        Liczne grono zadowolonych klientów
                                    </Typography>
                                </CardContent>
                                <Doughnut data={donat} />
                            </Paper>
                        </Grid>
                    </Grid>
                </main>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Dashboard);