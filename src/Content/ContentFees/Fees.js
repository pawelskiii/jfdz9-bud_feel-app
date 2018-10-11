import React, {Component} from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 350,
    },
    media: {
        height: 200,
    },
    content: {
        textAlign: 'center'
    },
    gridElementCenter: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
};

class Fees extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.gridElementCenter}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image=""
                                title="7-dniowy abenament"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="h2" component="h1">
                                    Abonament na 7 dni
                                </Typography>
                                <Typography gutterBottom component="p">
                                    Chcesz wypróbować którąkolwiek dietę z oferty?
                                    Bądź też po prostu chcesz nas przetestować?
                                </Typography>
                                <Typography variant="h2" component="h2">
                                    Ten abonament jest dla Ciebie!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image=""
                                title="7-dniowy abenament"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="h2" component="h1">
                                    Abonament na 14 dni
                                </Typography>
                                <Typography gutterBottom component="p">
                                    Zamierzasz powalczyć z nami o lepsze efekty?
                                    Dieting nie jest Ci obcy?
                                </Typography>
                                <Typography variant="h2" component="h2">
                                    To już wiesz czego chcesz!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image=""
                                title="7-dniowy abenament"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="h2" component="h1">
                                    Abonament na 28 dni
                                </Typography>
                                <Typography gutterBottom component="p">
                                    Chcesz pójść w bój o coś więcej niż parę kg?
                                    Liczysz na naprawdę super efekty?
                                </Typography>
                                <Typography variant="h2" component="h2">
                                    Jeden klik i jestem Twój!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Fees);