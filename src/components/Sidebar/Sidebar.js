import React, {Fragment} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';
import {connect} from "react-redux";
import or from '../../assets/or.jpg';
import {Card, CardMedia,} from '@material-ui/core';


const drawerWidth = 200;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        backgroundColor: blueGrey[900],
    },
    toolbar: theme.mixins.toolbar,

    list: {
        margin: theme.spacing.unit * 2,
        marginTop: 16,
        listStyle: 'none',
        textAlign: 'center'
    },
    listContainer: {
        margin: 0,
        padding: 0,
    },
    button: {
        width: 160
    },

    media: {
        height: 250,
    },
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
        <Fragment>
            {props.user !== null && <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar}/>
                {props.user === null && <Card style={{justifyContent: 'center', alignItems: 'center'}}>
                    <CardMedia className={classes.media} image={or}/>
                    <CardMedia className={classes.media} image={or}/>
                    <CardMedia className={classes.media} image={or}/>
                    <CardMedia className={classes.media} image={or}/>
                    <CardMedia className={classes.media} image={or}/>
                    <CardMedia className={classes.media} image={or}/>
                    <CardMedia className={classes.media} image={or}/>
                </Card>}
                <MuiThemeProvider theme={theme}>
                    <ul className={classes.listContainer}>
                        <li className={classes.list}>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Button variant="contained"
                                        style={{backgroundColor: amber[900], color: blueGrey[800]}}
                                        className={classes.button}>
                                    Strona Główna
                                </Button>
                            </Link>
                        </li>
                        <li className={classes.list}>
                            <Link to="/UserPanel" style={{textDecoration: 'none'}}>
                                <Button variant="contained"
                                        style={{backgroundColor: amber[800], color: blueGrey[800]}}
                                        className={classes.button}>
                                    Moje Dane
                                </Button>
                            </Link>
                        </li>
                        <li className={classes.list}>
                            <Link to="/Favourites" style={{textDecoration: 'none'}}>
                                <Button variant="contained"
                                        style={{backgroundColor: amber[700], color: blueGrey[800]}}
                                        className={classes.button}>
                                    Moje ulubione
                                </Button>
                            </Link>
                        </li>
                        <li className={classes.list}>
                            <Link to="/diets" style={{textDecoration: 'none'}}>
                                <Button variant="contained"
                                        style={{backgroundColor: amber[600], color: blueGrey[800]}}
                                        className={classes.button}>
                                    Wybór diet
                                </Button>
                            </Link>
                        </li>
                        <li className={classes.list}>
                            <Link to="/AddDiet" style={{textDecoration: 'none'}}>
                                <Button variant="contained"
                                        style={{backgroundColor: amber[500], color: blueGrey[800]}}
                                        className={classes.button}>
                                    Dodaj dietę
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </MuiThemeProvider>
            </Drawer>}
        </Fragment>

    );
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(
    mapStateToProps
)(withStyles(styles)(Sidebar));
