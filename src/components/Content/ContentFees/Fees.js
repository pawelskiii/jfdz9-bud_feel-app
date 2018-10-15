import React, {Component} from 'react';
import {Card, CardActionArea, CardContent} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import stage_1 from '../../../assets/fees_stage_1.jpg';
import stage_2 from '../../../assets/fees_stage_2.jpg';
import stage_3 from '../../../assets/fees_stage_3.jpg';

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

class Fees extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.gridElementCenter}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <img
                                className={classes.media}
                                src={stage_1}
                                title="7-dniowy abonament"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="headline">
                                    Abonament na 7 dni
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Chcesz wypróbować którąkolwiek dietę z oferty?
                                    Bądź też po prostu chcesz nas przetestować?
                                </Typography>
                                <Typography variant="headline">
                                    To abonament dla Ciebie!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <img
                                className={classes.media}
                                src={stage_2}
                                title="14-dniowy abonament"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="headline">
                                    Abonament na 14 dni
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Zamierzasz powalczyć z nami o lepsze efekty?
                                    Dieting nie jest Ci obcy?
                                </Typography>
                                <Typography variant="headline">
                                    To już wiesz czego chcesz!!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <img
                                className={classes.media}
                                src={stage_3}
                                title="28-dniowy abonament"
                            />
                            <CardContent className={classes.content}>
                                <Typography gutterBottom variant="headline">
                                    Abonament na 28 dni
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Chcesz pójść w bój o coś więcej niż parę kg?
                                    Liczysz na naprawdę super efekty?
                                </Typography>
                                <Typography variant="headline">
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