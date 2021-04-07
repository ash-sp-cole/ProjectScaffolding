import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginPersonalAppBar from './loginPersonalAppBar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth:'99%',
    margin:'auto',
    marginTop:'2%',
  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const LoginLanding = () => {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
       
        </Grid>
        <Grid item xs={12} >
       <LoginPersonalAppBar/>
        </Grid>

        {/* Additional grid system if needed */}
        <Grid item xs={12} sm={6} md={4}>
        
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
      
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
       
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
      
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
      
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
    
        </Grid>
       
      </Grid>
    </div>
  )

}


export default LoginLanding;