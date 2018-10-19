import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {Grid, Typography, Paper} from '@material-ui/core';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';


const drawerWidth = 200;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        backgroundColor: blueGrey[900],
    },
    toolbar: theme.mixins.toolbar,

    button: {
        margin: theme.spacing.unit*2,
        marginTop: 16,
        width: 160
    }
});


const theme = createMuiTheme({
    palette: {
        primary: amber,
        secondary: blueGrey
    }
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
                           <MuiThemeProvider theme={theme}>
                               <Link to="/" style={{textDecoration: 'none'}}>
                                   <Button variant="contained"
                                           style={{backgroundColor: amber[900], color: blueGrey[800], marginTop: 96}}
                                           className={classes.button}>
                                       Strona Główna
                                   </Button></Link>
                               <Link to="/UserPanel" style={{textDecoration: 'none'}}>
                                   <Button variant="contained"
                                           style={{backgroundColor: amber[800], color: blueGrey[800]}}
                                           className={classes.button}>
                                       Moje Dane
                                   </Button></Link>
                               <Link to="/Favourites" style={{textDecoration: 'none'}}>
                                   <Button variant="contained"
                                           style={{backgroundColor: amber[700], color: blueGrey[800]}}
                                           className={classes.button}>
                                       Moje ulubione
                                   </Button>
                               </Link>
                               <Link to="/diets" style={{textDecoration: 'none'}}>
                                   <Button variant="contained"
                                           style={{backgroundColor: amber[600], color: blueGrey[800]}}
                                           className={classes.button}>
                                       Wybór diet
                                   </Button></Link>
                               <Link to="/AddDiet" style={{textDecoration: 'none'}}>
                                   <Button variant="contained"
                                           style={{backgroundColor: amber[500], color: blueGrey[800]}}
                                           className={classes.button}>
                                       Dodaj dietę
                                   </Button></Link>
                           </MuiThemeProvider>
        </Drawer>
    );
}


export default (withStyles(styles)(Sidebar));
