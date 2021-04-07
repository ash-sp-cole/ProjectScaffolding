import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Tooltip from "@material-ui/core/Tooltip";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { CardActionArea, CardActions,Fab, Divider, Paper, Card } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';


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
    opacity:0.7,
    "&:hover ": {
      opacity: 1,
     color:"green",
     elevation:'14'
    }
  },
  actionArea: {
    opacity:0.7,
    transition: "opacity 1s, color 1s",


    "&:hover ": {
      color:'blue',
      opacity:0.6,
    
     
    }
  },
  focusHighlight: {
    opacity:0.6,
    color:'blue',
    transition: "opacity 1s",

    "&:hover ": {
      opacity: 0.6,
     color:"green",
     fontSize:'190px'
    }
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GebeitModalTrigger() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Grid container spacing={3} xs={12}
          style={{margin:"auto"}}
        >
        <Grid item xs={12} sm={8}>
          <Tooltip placement="top" enterDelay={75} leaveDelay={150}  TransitionComponent={Zoom} arrow={true} title="Click to view Current Reports">
          <Paper className={classes.paper} elevation={18}>
           
      <CardActionArea style={{borderRadius:'20px'}}  onClick={handleClickOpen} className={classes.actionArea}>
         <PinDropOutlinedIcon color="secondary" className={classes.focusHighlight} style={{fontSize:90}}/>
         <Divider variant="middle" />
         <h1 >Gebeits-kontrolle</h1>
         </CardActionArea>
        
         </Paper>
         </Tooltip>
        </Grid>

        <Grid item xs={12} sm={4}>
        <Tooltip placement="top" enterDelay={75} leaveDelay={150}  TransitionComponent={Zoom} arrow={true} title="Add Report">
         <Fab   variant="extended" size="medium" color="primary" aria-label="add" fontSize="large" >
          <PostAddIcon fontSize="large"  />
      
        </Fab>
        </Tooltip>
        </Grid>


      </Grid>




      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Geibet module"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            MODULE FOR GEBIET 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}