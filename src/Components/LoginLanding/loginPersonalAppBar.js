import React, { useState } from "react";
import { Grid, Button, Paper, Divider, FormControl, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import date from "date-and-time";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';
import CreateAccountModal from "../CreateAccount";
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form'
import Password from "antd/lib/input/Password";
import {handleLoginAuthBool, handlePasswordDispatch, handleUsernameDispatch} from "../../Redux/Actions";

const ordinal = require('date-and-time/plugin/ordinal');

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 700,
    margin: 'auto',
    marginTop: '2%',
    marginBottom: '2%'
  },


});


const useStylesLogin = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginTop: '5%',
  },
}));



const PersonalAppBar = (props, dispatchLoginPassword, dispatchLoginAuthStatus, dispatchLoginUsername) => {

  // Date setup for NPM
  const now = new Date();
  date.plugin(ordinal);
  let newDate = date.format(now, 'dddd, MMMM DDD YYYY');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authBool, setAuthBool] = useState(false);

  const classes = useStyles();
  const classesLogin = useStylesLogin();


const validationLogin = (data) =>{

  // testing - update to more robust system
  
  if(data != "") {
    return true
  }

}

  const handleFormChange = (event) => {
    event.preventDefault();
    
   if( validationLogin(email) &&  validationLogin(password)){
    props.dispatchLoginUsername(email);
    props.dispatchLoginPassword(password);
    props.dispatchLoginAuthStatus(true);
   }  
   
   else { 
     alert ("please enter valid username and password to continue")
   
   }
   
  }



if(props.loginAuthStatus != true) {
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


        <Paper elevation={14} style={{ borderRadius: '25px' }}>
          <form onSubmit={handleFormChange}>
            <Grid item xs={12} style={{ marginTop: '5%' }}>
              <FormControl className={classesLogin.margin}

              >
                <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </FormControl>

            </Grid>



            <Grid item xs={12}>
              <FormControl style={{ marginTop: '5%', marginBottom: '3%' }} onSubmit={handleFormChange}>
                <InputLabel id="passwordDummy" htmlFor="input-with-icon-adornment">Password</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Grid item xs={12} >
                  <Button variant="contained" color="primary" style={{ marginBottom: '1%', marginTop: '10%' }}
                    type="submit" value="Submit"
                   
                  >
                   Login
                  </Button>
              
                </Grid>
              </FormControl>
            </Grid>
          </form>




          <Grid item xs={12} className={classes.root}>
            <Typography variant="h6" component="h2" gutterBottom>
              or
                       </Typography>
            <Divider flexItem />

            <CreateAccountModal />

          </Grid>
        </Paper>
      </Grid>
    </div>
  )

}

else return (
  <div className={classes.root}>
      <Grid Container spacing={3}>

        <Grid item xs={12}>

          <Typography variant="h2" component="h3" gutterBottom>
          Gebietsbetreuung
             </Typography>

          <Typography variant="h5" component="h3" gutterBottom>
            Login Successful
             </Typography>

          <Typography variant="h6" component="h2" gutterBottom>
            {newDate}
          </Typography>

        </Grid>



         
  

            <Grid item xs={12}>
              
                  <Button variant="contained" color="primary" style={{ marginBottom: '1%', marginTop: '10%' }}
                    
                    component={Link}
                    to="/rangerHome"
                  >
                    Ranger Home
                  </Button>
              </Grid>
          
      
         
       
      </Grid>
    </div>
)

}

const mapStateToProps = (state) => {
  return {
    usernameDummyProp: state.store.usernameLoginDummy,
    passwordDummyProp: state.store.passwordLoginDummy,
    loginAuthStatus: state.store.loginBoolAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    dispatchLoginUsername: (e) => dispatch(handleUsernameDispatch(e)),
    dispatchLoginPassword: (e) => dispatch(handlePasswordDispatch(e)),
    dispatchLoginAuthStatus: (e) => dispatch(handleLoginAuthBool(e))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonalAppBar);