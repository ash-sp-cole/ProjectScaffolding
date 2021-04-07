
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Fab, Paper, Grid, Container, Typography } from "@material-ui/core";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
        margin:'auto'
    },
  }),
);



export default function SpumoMullAddData() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <div>

            <Fab variant="extended" size="medium" color="primary" aria-label="add" fontSize="large" onClick={handleClickOpen} >
                <PostAddIcon fontSize="large" />

            </Fab>

            <Dialog
                fullScreen={fullScreen}
                keepMounted
                fullWidth={true}
                maxWidth="80%"
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
               
            >
                <DialogTitle id="responsive-dialog-title">{"SpuMo Mull Erfassung"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        // FULL SCREEN ON MOBILE
                   
                <Grid Container spacing={3}>

                <Paper elevation={14} style={{marginTop:'5%'}}>
                            <Grid item xs={12} 
                            style={{
                                marginTop:'5%',
                                marginBottom:'10%',
                                height:'50%'
                            }}>

                               
                                <Typography variant="h6" className={classes.title} gutterBottom>
                                      Grunddaten
                               </Typography>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}
                                    style={{marginBottom:'25%'}}
                                >
                             <DatePicker value={selectedDate} onChange={handleDateChange} style={{marginBottom:'15%', marginRight:'3%'}} />
                             <TimePicker value={selectedDate} onChange={handleDateChange} />
     
    </MuiPickersUtilsProvider>
                            

                            </Grid>
                            </Paper>
                            <Grid item xs={12}>

                                <Paper elevation={14}>
                                    <h1>TEST BOX two</h1>
                                </Paper>

                            </Grid>
                            <Grid item xs={12}>

                                <Paper elevation={14}>
                                    <h1>TEST BOX three</h1>
                                </Paper>

                            </Grid>
                        

                        </Grid>
                     
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Disagree
             </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
             </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
