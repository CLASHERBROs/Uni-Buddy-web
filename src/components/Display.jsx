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
    marginRight:0

}

}));


var Display = ()=>{
    const classes = useStyles();
    return(
   
        <div className={classes.root}>
        <Grid container spacing={8} className={classes.grid}


  alignItems="center"
  >
        <Grid item xs={12}  md={4}>
        <Link  to="/note">   <Tile/></Link>
          </Grid>
          <Grid item sm={12} md={4}>
          <Link  to="/note">   <Tile/></Link>
              
          </Grid>
         
          <Grid item sm={12}  md={4}>
          <Link  to="/note">   <Tile/></Link>

          </Grid>
        <Grid item sm={12} md={4}>
        <Link  to="/note">   <Tile/></Link>
          </Grid>
          <Grid item sm={12} md={4}>
          <Link  to="/note">   <Tile/></Link>
              
          </Grid>
         
          <Grid item sm={12} md={4}>
          <Link  to="/note">   <Tile/></Link>

          </Grid>
         </Grid>
        
         
         </div>
      
    )
}

export default Display
