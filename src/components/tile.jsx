import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Background from "./Images/1.png"
const useStyles = makeStyles((theme) => ({
 btn: {
     height:200,
    //  width:300,
     backgroundImage: `url(${Background})`

 }
  }));

var Tile = ()=>{
    const classes = useStyles();

    return(
<Button variant="outlined" className={classes.btn} fullWidth>Default</Button>
    )
}
export default Tile;