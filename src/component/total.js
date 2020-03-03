import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine  } from 'react-sparklines';


const useStyles = makeStyles(theme => ({
    paper:{
        overflow:'hidden'
        // padding: '0px'
    },
    total_grid:{
        color:'white',
        
    },
    grid:{
        padding: 20
    }
}));

const type = {
    user: {
        total: 30,
        title: 'Total User',
        data:[4,5,6,8,7],
        color: 'blue'
    },
    current:{
        total: 60,
        title: 'Total Current',
        data:[1,5,6,5,7],
        color: 'orange'

    },
    overall:{
        total : 205,
        title: 'Overall',
        data:[6,2,7,5,5],
        color: 'red'
    }
}

export default (props)=>{
    const classes = useStyles();
    const details = type[props.type]
    return (
        <Paper xs={12} className={classes.paper}> 
            <CssBaseline/>
            <Grid container className={classes.grid_container}>
                <Grid item xs={6} style={{background: details.color}} className={classes.total_grid}>
                    <Typography variant="h2" align="center">
                        {details.total}
                    </Typography>
                    <Typography variant="caption" display="block"  align="center">
                        {details.title}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Sparklines data={details.data} height={110} margin={10}>
                        <SparklinesLine color={details.color} />
                        <SparklinesSpots />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                </Grid>
            </Grid>
        </Paper>
    )
}