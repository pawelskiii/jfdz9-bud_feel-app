import React, {Component} from 'react';
import {Grid, Typography, Divider, AppBar} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

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
};

class Footer extends Component {
    render() {
        const {classes} = this.props;

        return (
            <AppBar position="static" style={{borderTop: "2px solid #4f5b62"}}>
                <Grid container className={classes.gridElementCenter}>
                    <Grid item className={classes.content}>
                        <Typography color="inherit" gutterBottom className={classes.firstElement}
                                    variant="headline">
                            Adres:
                        </Typography>
                        <hr style={{border: "1px solid #4f5b62", width: '100%'}}/>
                        <Typography color="inherit" gutterBottom className={classes.firstElement} variant="body2">
                            Bud-Feel
                        </Typography>
                        <Typography color="inherit" gutterBottom variant="body2">
                            ul. Grunwaldzka 472A
                        </Typography>
                        <Typography color="inherit" className={classes.lastElement} variant="body2">
                            80-309 Gdańsk
                        </Typography>
                    </Grid>
                    <Grid item className={classes.content}>
                        <Typography color="inherit" gutterBottom className={classes.firstElement}
                                    variant="headline">
                            E-mail:
                        </Typography>
                        <hr style={{border: "1px solid #4f5b62", width: '100%'}}/>
                        <Typography color="inherit" className={`${classes.lastElement} ${classes.firstElement}`}
                                    variant="title">
                            bud-feel@infoshare.com
                        </Typography>
                    </Grid>
                    <Grid item className={classes.content}>
                        <Typography color="inherit" gutterBottom className={classes.firstElement}
                                    variant="headline">
                            Numer telefonu:
                        </Typography>
                        <hr style={{border: "1px solid #4f5b62", width: '100%'}}/>
                        <Typography color="inherit" className={`${classes.lastElement} ${classes.firstElement}`}
                                    variant="title">
                            +012 345 6789
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Footer);