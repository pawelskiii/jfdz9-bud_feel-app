import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';


const drawerWidth = 200;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

function Sidebar(props) {
    const {classes} = props;

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar}/>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Drafts"/>
                </ListItem>
            </List>
            <Divider/>
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Trash"/>
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                    <ListItemText primary="Spam"/>
                </ListItem>
            </List>
        </Drawer>
    );
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);