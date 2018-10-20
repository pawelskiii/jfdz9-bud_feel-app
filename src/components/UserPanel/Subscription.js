import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';
import {Typography, Grid, Card, CardMedia, CardContent,Paper} from '@material-ui/core';
import slim8 from '../../assets/slim8.jpeg';
import slim9 from '../../assets/slim9.jpeg';
import slim10 from '../../assets/slim10.jpeg';


const styles = theme => ({

    cardContent: {
        backgroundColor: "#263238"
    },

    media: {
        height: 240,
    },

    gridElementCenter: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '1rem',
    },
});

class Subscription extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <Grid item xs={12} style={{marginTop: 32}} container className={classes.gridElementCenter}>
                    <Grid container spacing={24}>
                        <Grid item xs>
                            <Paper>
                                <Card>
                                    <CardContent className={classes.cardContent}
                                                 style={{backgroundColor: this.props.form.subscription === '7 dni' ? amber[900] : blueGrey[900]}}>
                                        <Typography variant='display1' color='secondary' align='center'>
                                            {this.props.form.subscription === '7 dni' ? 'Mój Abonament' : 'Abonament'}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media} image={slim8}/>
                                    <CardContent className={classes.cardContent}
                                                 style={{backgroundColor: this.props.form.subscription === '7 dni' ? amber[900] : blueGrey[900]}}>
                                        <Typography variant='display1' color='secondary' align='center'>
                                            7 dni
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <Card>
                                    <CardContent className={classes.cardContent}
                                                 style={{backgroundColor: this.props.form.subscription === '14 dni' ? amber[900] : blueGrey[900]}}>
                                        <Typography variant='display1' color='secondary' align='center'>
                                            {this.props.form.subscription === '14 dni' ? 'Mój Abonament' : 'Abonament'}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media} image={slim10}/>
                                    <CardContent className={classes.cardContent}
                                                 style={{backgroundColor: this.props.form.subscription === '14 dni' ? amber[900] : blueGrey[900]}}>
                                        <Typography variant='display1' color='secondary' align='center'>
                                            14 dni
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <Card>
                                    <CardContent className={classes.cardContent}
                                                 style={{backgroundColor: this.props.form.subscription === '28 dni' ? amber[900] : blueGrey[900]}}>
                                        <Typography variant='display1' color='secondary' align='center'>
                                            {this.props.form.subscription === '28 dni' ? 'Mój Abonament' : 'Abonament'}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media} image={slim9}/>
                                    <CardContent className={classes.cardContent}
                                                 style={{backgroundColor: this.props.form.subscription === '28 dni' ? amber[900] : blueGrey[900]}}>
                                        <Typography variant='display1' color='secondary' align='center'>
                                            28 dni
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Subscription);
