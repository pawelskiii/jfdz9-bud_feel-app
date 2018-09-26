import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    List,
    Drawer } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


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
            <List>
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
            <List>
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

export default withStyles(styles)(Sidebar);