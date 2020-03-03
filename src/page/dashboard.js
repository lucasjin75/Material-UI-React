import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from '../component/navigation.js'
import Total from '../component/total.js'
import { makeStyles, Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default function MiniDrawer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Navigation/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Total type="user"/>
                    </Grid>
                    <Grid item xs={4} >
                        <Total type="current"/>
                    </Grid>
                    <Grid item xs={4} >
                        <Total type="overall"/>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
    }
