import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 300,
    },
    media: {
        height: 200,
    },
};

class Fees extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image=""
                        title="7-dniowy abenament"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            Abonament na 7 dni
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default withStyles(styles)(Fees);