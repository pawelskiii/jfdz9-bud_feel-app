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
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: blueGrey[900],
        opacity: 0.5,
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width:theme.spacing.unit
    },

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




class Sidebar extends Component {


    render() {
        const {classes, theme} = this.props;

    return (
        <Drawer
            variant='temporary'
            color="secondary"
            classes={{
                paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
            }}
            open={this.props.open}
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
}}


export default withStyles(styles, { withTheme: true })(Sidebar);