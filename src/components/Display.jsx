import React from 'react'
import Grid from '@material-ui/core/Grid';
import Tile  from './tile'
import {Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
grid:{
    marginTop:4,

}

}));


var Display = ()=>{
    const classes = useStyles();
    return(
   
        <div className={classes.root}>
        <Grid container spacing={6} className={classes.grid}

justify="center"
  alignItems="center"
  >
        <Grid item xs={4}>
        <Link  to="/note">   <Tile/></Link>
          </Grid>
          <Grid item xs={4}>
              <Tile/>
              
          </Grid>
         
          <Grid item xs={4}>
              <Tile/>

          </Grid>
        <Grid item xs={4}>
          <Tile/>
          </Grid>
          <Grid item xs={4}>
              <Tile/>
              
          </Grid>
         
          <Grid item xs={4}>
              <Tile/>

          </Grid>
         </Grid>
        
         
         </div>
      
    )
}

export default Display
