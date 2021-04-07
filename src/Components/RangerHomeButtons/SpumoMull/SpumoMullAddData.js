
   import React from 'react';
   import Button from '@material-ui/core/Button';
   import Dialog from '@material-ui/core/Dialog';
   import DialogActions from '@material-ui/core/DialogActions';
   import DialogContent from '@material-ui/core/DialogContent';
   import DialogContentText from '@material-ui/core/DialogContentText';
   import DialogTitle from '@material-ui/core/DialogTitle';
   import useMediaQuery from '@material-ui/core/useMediaQuery';
   import { useTheme } from '@material-ui/core/styles';
   import Fab from "@material-ui/core/fab";
   import PostAddIcon from "@material-ui/icons/PostAdd";
   
   export default function SpumoMullAddData() {
     const [open, setOpen] = React.useState(false);
     const theme = useTheme();
     const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
   
     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };
   
     return (
       <div>
        
<Fab   variant="extended" size="medium" color="primary" aria-label="add" fontSize="large" onClick={handleClickOpen} >
          <PostAddIcon fontSize="large"  />
      
        </Fab>
   
         <Dialog
           fullScreen={fullScreen}
           open={open}
           onClose={handleClose}
           aria-labelledby="responsive-dialog-title"
         >
           <DialogTitle id="responsive-dialog-title">{"SpuMo Mull Erfassung"}</DialogTitle>
           <DialogContent>
             <DialogContentText>
             // FULL SCREEN ON MOBILE

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
