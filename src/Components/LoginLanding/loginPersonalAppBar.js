import React from "react";
import { Grid, Button, Paper, Divider, FormControl, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import date from "date-and-time";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';
import CreateAccountModal from "../CreateAccount";
import { connect } from 'react-redux';
import {Form, Field} from 'react-final-form'
import { TextField } from 'mui-rff';



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
  
}



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



const PersonalAppBar = (props) => {

  // Date setup for NPM
  const now = new Date();
  date.plugin(ordinal);
  let newDate = date.format(now, 'dddd, MMMM DDD YYYY');



  const classes = useStyles();
  const classesLogin = useStylesLogin();
  console.log(props.usernameDummyProp, "   ", props.passwordDummyProp)

  const handleFormChange = (e) => {

    console.log("test rff")

  }




  return (


    <Form
    onSubmit={onSubmit}
  
    render={({ handleSubmit, values }) => (
      <form onSubmit={handleSubmit} noValidate>
        <TextField label="First Name" name="username" required={true} />
        <TextField label="Password" name="password" required={true} />
        <pre>{JSON.stringify(values)}</pre>
      </form>
      
    )}
  />










    // <div className={classes.root}>
    //   <Grid Container spacing={3}>
    //     <Grid item xs={12}>

    //       <Typography variant="h1" component="h3" gutterBottom>
    //         Welcome
    //          </Typography>

    //       <Typography variant="h4" component="h3" gutterBottom>
    //         Please Login to Continue
    //          </Typography>

    //       <Typography variant="h6" component="h2" gutterBottom>
    //         {newDate}
    //       </Typography>

    //     </Grid>


    //     <Paper elevation={14} style={{ borderRadius: '25px' }}>
    //       <Grid item xs={12} style={{ marginTop: '5%' }}>
    //         <FormControl className={classesLogin.margin}
              
    //         >
    //           <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
    //           <Input
    //             id="input-with-icon-adornment"
    //             startAdornment={
    //               <InputAdornment position="start">
    //                 <AccountCircle />
    //               </InputAdornment>
    //             }
    //           />
    //         </FormControl>

    //       </Grid>



    //       <Grid item xs={12}>
    //         <FormControl style={{ marginTop: '5%', marginBottom: '3%' }} onSubmit={handleFormChange}>
    //           <InputLabel id="passwordDummy" htmlFor="input-with-icon-adornment">Password</InputLabel>
    //           <Input
    //             id="input-with-icon-adornment"
    //             startAdornment={
    //               <InputAdornment position="start">
    //                 <LockIcon />
    //               </InputAdornment>
    //             }
    //           />

    //           <Grid item xs={12} >
    //             <Button variant="contained" color="primary" style={{ marginBottom: '1%', marginTop:'10%' }}
    //              onClick={handleFormChange}
    //             >
    //               Login
    //               </Button>
    //           </Grid>
    //         </FormControl>
    //       </Grid>





    //       <Grid item xs={12} className={classes.root}>
    //         <Typography variant="h6" component="h2" gutterBottom>
    //           or
    //                    </Typography>
    //         <Divider flexItem />

    //         <CreateAccountModal />

    //       </Grid>
    //     </Paper>
    //   </Grid>
    // </div>
  )

}

const mapStateToProps = (state) => {
  return {
    usernameDummyProp: state.store.usernameLoginDummy,
    passwordDummyProp: state.store.passwordLoginDummy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {


  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonalAppBar);