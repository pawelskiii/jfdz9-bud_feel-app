import React, {Component} from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';
import {Typography, Paper, Grid} from '@material-ui/core';

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
        listStyleType: "none",
        color: blueGrey[500]
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
                <Link to="/" style={{ textDecoration: 'none', color:'white'  }}>
                    <Button variant="contained" color="inherit" style={{backgroundColor: amber[900], color: 'white', marginTop:96}} className={classes.button}>
                        Strona Główna
                    </Button></Link>
                <Link to="/UserPanel" style={{ textDecoration: 'none', color:'white' }}>
                    <Button variant="contained" style={{backgroundColor: amber[700]}} className={classes.button}>
                        Moje Ustawienia
                    </Button></Link>
                <Link to="/Favourites" style={{ textDecoration: 'none', color:'white'  }}>
                    <Button variant="contained" style={{backgroundColor: amber[600]}} className={classes.button}>
                        Moje ulubione
                    </Button>
                </Link>
                <Link to="/diets" style={{ textDecoration: 'none', color:'secondary'  }}>
                    <Button variant="contained" style={{backgroundColor: amber[500], listStyleType: "none"}} className={classes.button}>
                        Wybór diet
                    </Button></Link>
                <Link to="/AddDiet" style={{ textDecoration: 'none', color:'secondary'  }}>
                    <Button variant="contained" style={{backgroundColor: amber[400]}} className={classes.button}>
                        Dodaj dietę
                    </Button></Link>
            </MuiThemeProvider>

        </Drawer>
    );
}

export default withStyles(styles)(Sidebar);