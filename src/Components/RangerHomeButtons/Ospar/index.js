import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper"
import OsparModalTrigger from './modalOsparTrigger';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth:'80%',
      margin:'auto',
      marginTop:'10%',
      borderRadius:'25px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius:'25px',
    },
  }));
  
export default function OsparButtonHome() {
    
    const classes = useStyles();

    return (

         
        <Paper className={classes.paper} elevation={18}>
      <OsparModalTrigger/>
    </Paper>

    );
}


