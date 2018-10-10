import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 400,
    },
};

class Fees extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default withStyles(styles)(Fees);