import React, {Component} from 'react';
import {Card, CardContent} from '@material-ui/core';
import {Grid, Typography, Divider} from '@material-ui/core';
import {blueGrey} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';
import stage_1 from '../../../assets/fees_stage_1.jpg';
import stage_2 from '../../../assets/fees_stage_2.jpg';
import stage_3 from '../../../assets/fees_stage_3.jpg';

const styles = {
    card: {
        width: 350,
        margin: '2rem'
    },
    media: {
        height: 233,
    },
    content: {
        textAlign: 'center'
    },
    gridElementCenter: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    lastElement: {
        marginBottom: '1rem'
    },
    button: {
        width: '80%',
        margin: '2%',
        fontSize: '1rem',
    },
    divider: {
        margin: '0.5rem'
    }
};

class Fees extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.gridElementCenter}>
                <Grid item>
                    <Card className={classes.card}>
                        <img
                            className={classes.media}
                            src={stage_1}
                            title="7-dniowy abonament"
                            alt="dupa"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="headline" style={{color: blueGrey[800]}}>
                                Abonament na <strong>7 dni</strong>
                            </Typography>
                            <Divider className={classes.divider}/>
                            <Typography gutterBottom variant="body2" style={{color: blueGrey[800]}}>
                                Chcesz wypróbować którąkolwiek dietę z oferty?
                                Bądź też po prostu chcesz nas przetestować?
                            </Typography>
                            <Typography gutterBottom variant="title" style={{color: blueGrey[800]}}>
                                To abonament dla Ciebie!!
                            </Typography>
                            <Divider className={classes.divider}/>
                            <Typography gutterBottom variant="display1" style={{color: blueGrey[800]}}>
                                Jedyne <strong>199zł</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <img
                            className={classes.media}
                            src={stage_2}
                            title="14-dniowy abonament"
                            alt="dupa"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="headline" style={{color: blueGrey[800]}}>
                                Abonament na <strong>14 dni</strong>
                            </Typography>
                            <Divider className={classes.divider}/>
                            <Typography gutterBottom variant="body2" style={{color: blueGrey[800]}}>
                                Zamierzasz powalczyć z nami o lepsze efekty?
                                Dieting nie jest Ci obcy?
                            </Typography>
                            <Typography gutterBottom variant="title" style={{color: blueGrey[800]}}>
                                To już wiesz czego chcesz!!
                            </Typography>
                            <Divider className={classes.divider}/>
                            <Typography gutterBottom variant="display1" style={{color: blueGrey[800]}}>
                                Tylko <strong>299zł</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.card}>
                        <img
                            className={classes.media}
                            src={stage_3}
                            title="28-dniowy abonament"
                            alt="dupa"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="headline" style={{color: blueGrey[800]}}>
                                Abonament na <strong>28 dni</strong>
                            </Typography>
                            <Divider className={classes.divider}/>
                            <Typography gutterBottom variant="body2" style={{color: blueGrey[800]}}>
                                Chcesz pójść w bój o coś więcej niż parę kg?
                                Liczysz na naprawdę super efekty?
                            </Typography>
                            <Typography gutterBottom variant="title" style={{color: blueGrey[800]}}>
                                Jeden klik i jestem Twój!!
                            </Typography>
                            <Divider className={classes.divider}/>
                            <Typography gutterBottom variant="display1" style={{color: blueGrey[800]}}>
                                Zaledwie <strong>399zł</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Fees);