import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Sidebar from '../Sidebar'

const styles = theme => ({
    panelContainer: {

    },
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 2,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
});

class UserPanel extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Sidebar/>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <div className={classes.panelContainer}>
                            Moje ustawienia
                        </div>
                   </main>
            </div>
        )}
}

export default withStyles(styles)(UserPanel);