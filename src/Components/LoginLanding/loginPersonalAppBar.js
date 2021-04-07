import React from "react";
import { Grid, Button, Paper , Divider, FormControl, Input,  InputAdornment, InputLabel, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import date from "date-and-time";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';
import CreateAccountModal from "../CreateAccount";


const ordinal = require('date-and-time/plugin/ordinal');

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 700,
    margin:'auto',
    marginTop:'2%',
    marginBottom:'2%'
  },
 

});


const useStylesLogin = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      marginTop:'5%',
    },
  }));



const PersonalAppBar = () => {

  // Date setup for NPM
  const now = new Date();
  date.plugin(ordinal);
  let newDate = date.format(now, 'dddd, MMMM DDD YYYY'); 



  const classes = useStyles();
  const classesLogin = useStylesLogin();

    return (

<div className={classes.root}>
        <Grid Container spacing={3}>
            <Grid item xs={12}>

            <Typography variant="h1" component="h3" gutterBottom>
                Welcome 
             </Typography>

             <Typography variant="h4" component="h3" gutterBottom>
               Please Login to Continue
             </Typography>

             <Typography variant="h6" component="h2" gutterBottom>
                {newDate}
             </Typography>

            </Grid>

           
             <Paper elevation={14} style={{borderRadius:'25px'}}>
                 <Grid item xs={12} style={{marginTop:'5%'}}>
                     <FormControl className={classesLogin.margin}>
                          <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                            <Input
                              id="input-with-icon-adornment"
                              startAdornment={
                                <InputAdornment position="start">
                                  <AccountCircle />
                                </InputAdornment>
                              }
                            />
                      </FormControl>
        
                   </Grid>



                <Grid item xs={12}>
                    <FormControl style={{marginTop:'5%', marginBottom:'3%'}}>
                      <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          startAdornment={
                            <InputAdornment position="start">
                              <LockIcon/>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                </Grid>


                 <Grid item xs={12} >
                    <Button variant="contained" color="primary" style={{marginBottom:'3%'}}
                    component={Link} to="/rangerHome"
                    >
                    Login
                  </Button>
                   </Grid>



                  <Grid item xs={12}  className={classes.root}>
                      <Typography variant="h6" component="h2" gutterBottom>
                         or
                       </Typography>
                      <Divider flexItem />
                    
                <CreateAccountModal/>

      </Grid>
        </Paper>
        </Grid>
        </div>
    )

}

export default PersonalAppBar;