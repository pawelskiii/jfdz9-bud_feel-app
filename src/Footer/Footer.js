import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles';

const styles = {
    gridElementCenter: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    content: {
        textAlign: 'center'
    },
    lastElement: {
        marginBottom: 20
    },
};

class Footer extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Grid container className={classes.gridElementCenter}>
                <Grid item className={classes.content}>
                    <Typography gutterBottom variant="display1">
                        Adres:
                    </Typography>
                    <Typography gutterBottom variant="subheading">
                        Bud-Feel
                    </Typography>
                    <Typography gutterBottom variant="subheading">
                        ul. Grunwaldzka 472A
                    </Typography>
                    <Typography className={classes.lastElement} variant="subheading">
                        80-309 Gdańsk
                    </Typography>
                </Grid>
                <Grid item className={classes.content}>
                    <Typography gutterBottom variant="display1">
                        E-mail:
                    </Typography>
                    <Typography className={classes.lastElement} variant="headline">
                        bud-feel@infoshare.com
                    </Typography>
                </Grid>
                <Grid item className={classes.content}>
                    <Typography gutterBottom variant="display1">
                        Numer telefonu:
                    </Typography>
                    <Typography className={classes.lastElement} variant="headline">
                        +012 345 6789
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Footer);