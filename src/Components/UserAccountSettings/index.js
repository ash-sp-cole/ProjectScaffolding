import React from "react";
import { Grid, Container, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import date from "date-and-time";
import { connect } from "react-redux";
const ordinal = require('date-and-time/plugin/ordinal');

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 700,
    margin: 'auto',
    marginTop: '2%',
    marginBottom: '1%'
  },
});
const UserAccountSettings = (props) => {

  //npm for date and time
  const now = new Date();
  date.plugin(ordinal);
  let newDate = date.format(now, 'dddd, MMMM DDD YYYY');

  const classes = useStyles();

  console.log(date); // test functionality 

  
  return (

    <div className={classes.root}>
      <Grid Container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1" component="h3" gutterBottom>
           Account Settings
      </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
          {props.usernameProp}
          </Typography>
        </Grid>
        

          <HomeIcon style={{fontSize:90}}/>
        
      </Grid>
    </div>
  )

}

const mapStatetoProps = (state) =>{

  return {
    usernameProp: state.store.usernameLoginDummy

  }


}


export default  connect(mapStatetoProps)  (UserAccountSettings);