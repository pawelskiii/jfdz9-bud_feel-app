import React, { Component } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider }from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

class Sidebar extends Component {
    render() {
        return (
            <Drawer variant="permanent">
                <List component="nav" style={{marginTop: '4rem', width: '180px'}}>
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
        )
    }
}

export default Sidebar;