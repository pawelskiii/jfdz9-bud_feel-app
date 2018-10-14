import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {
    // ListItem,
    //ListItemIcon,
    //ListItemText,
    //Divider,
    //List,
    Drawer } from '@material-ui/core';
//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';

import { Link } from 'react-router-dom';

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
            <nav>
                <ul>
                    <li><Link to="/">Strona Główna</Link></li>
                    <li><Link to="/UserPanel">Moje Ustawienia</Link></li>
                    <li><Link to="/Favourites">Moje ulubione</Link></li>
                    <li><Link to="/diets">Wybór diet</Link></li>
                    <li><Link to="/AddDiet">Dodaj dietę</Link></li>
                </ul>
            </nav>


        </Drawer>
    );
}

export default withStyles(styles)(Sidebar);