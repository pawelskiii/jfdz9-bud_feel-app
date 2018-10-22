import React, {Component} from 'react';
import {Grid, Typography, AppBar} from '@material-ui/core';
import {amber, blueGrey} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import Home from '../../assets/home.png';
import Mail from '../../assets/mail.png';
import Phone from '../../assets/phone.png';

const styles = {
    gridElementCenter: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    content: {
        textAlign: 'center'
    },
    firstElement: {
        marginTop: '0.8rem'
    },
    lastElement: {
        marginBottom: '1.5rem'
    },
    icon: {
        fontSize: '3rem'
    },
    homeImage: {
        background: `url(${Home}) no-repeat top center`,
    },
    mailImage: {
        background: `url(${Mail}) no-repeat top center`,
        height: '128px'
    },
    phoneImage: {
        background: `url(${Phone}) no-repeat top center`,
        height: '128px'
    }
};

class Footer extends Component {

    render() {
        const {classes} = this.props;

        return (
            <AppBar position="static" style={{borderTop: "2px solid #4f5b62"}}>
                <Grid container className={classes.gridElementCenter}>

                    <Grid item className={classes.content}>
                        <div className={classes.homeImage}>
                            <Typography style={{color: amber[900]}} gutterBottom className={classes.firstElement}
                                        variant="headline">
                                Adres:
                            </Typography>
                            <hr style={{border: "1px solid #4f5b62", width: '100%'}}/>
                            <Typography style={{color: blueGrey[200]}} gutterBottom className={classes.firstElement}
                                        variant="body2">
                                Bud-Feel
                            </Typography>
                            <Typography style={{color: blueGrey[200]}} gutterBottom variant="body2">
                                ul. Grunwaldzka 472A
                            </Typography>
                            <Typography style={{color: blueGrey[200]}} className={classes.lastElement} variant="body2">
                                80-309 Gdańsk
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item className={classes.content}>
                        <div className={classes.mailImage}>
                            <Typography style={{color: amber[900]}} gutterBottom className={classes.firstElement}
                                        variant="headline">
                                E-mail:
                            </Typography>
                            <hr style={{border: "1px solid #4f5b62", width: '100%'}}/>
                            <Typography style={{color: blueGrey[200]}}
                                        className={`${classes.lastElement} ${classes.firstElement}`}
                                        variant="title">
                                bud-feel@infoshare.com
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item className={classes.content}>
                        <div className={classes.phoneImage}>
                            <Typography style={{color: amber[900]}} gutterBottom className={classes.firstElement}
                                        variant="headline">
                                Telefon:
                            </Typography>
                            <hr style={{border: "1px solid #4f5b62", width: '100%'}}/>
                            <Typography style={{color: blueGrey[200]}}
                                        className={`${classes.lastElement} ${classes.firstElement}`}
                                        variant="title">
                                +012 345 6789
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Footer);