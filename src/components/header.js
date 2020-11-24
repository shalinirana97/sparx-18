import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        // textAlign: 'center',
        color: "#a760e9"
    }

}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className='headWrap'>
                <Toolbar variant="dense">
                    <Grid container className='paddingContainer'>
                        <Grid item sm={6}>
                            <Typography variant="h6" className={classes.title}>
                                Logo
                        </Typography>
                        </Grid>
                        <Grid container
                            direction="row"
                            justify="flex-end"
                            alignItems="center"
                            item
                            className="ml"
                            sm={6}
                            spacing={2}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                alignItems="center"
                                item
                                sm={8}
                            >
                                <MenuItem >Home</MenuItem>
                                <MenuItem >My Portfolio</MenuItem>
                                <MenuItem >Clients</MenuItem>
                            </Grid>
                            <Grid item>
                                <Button color="inherit" className='btn' >Get In Touch</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar >
        </div >
    );
}
