
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SpumoMullButtonHome from '../RangerHomeButtons/SpumoMull';
import WattkartierungButtonHome from '../RangerHomeButtons/Wattkartierung';
import WetterButtonHome from '../RangerHomeButtons/Wetter';
import GebeitButtonHome from '../RangerHomeButtons/Gebeitskontrolle';
import MenuAppBar from '../HeaderAppBar';
import OsparButtonHome from '../RangerHomeButtons/Ospar';
import SpumoOlModalTrigger from '../RangerHomeButtons/SpumoOlvogel/spumoOlModalTrigger';
import SpumoOlButtonHome from '../RangerHomeButtons/SpumoOlvogel';
import PersonalAppBar from '../PersonalTitleBar';
import MosesAppBar from '../RangerHomeButtons/MosesTab';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth:'99%',
    margin:'auto',
    marginTop:'2%',
  
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const HomeMainDisplay = () => {

  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} >
       <PersonalAppBar/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          {/* Dashboard */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <SpumoMullButtonHome/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <WetterButtonHome/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <GebeitButtonHome/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <SpumoOlButtonHome/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <WattkartierungButtonHome/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <OsparButtonHome/>
        </Grid>
       
      </Grid>
    </div>
  )

}


export default HomeMainDisplay;