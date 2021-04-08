import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity:0.9,
    borderRadius:'25px',
    ':&hover' :{
      opacity:1
    }

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
     
      <AppBar position="static" elevation={14}>
        <Toolbar>
        <Tooltip title="Ranger Home" arrow={true} placement="top">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" component={Link}
          to="/"
          >
            <HomeIcon/>
          </IconButton>
          </Tooltip>
          <Tooltip title="Welcome" placement="top">
          <Typography variant="h6" className={classes.title}>
          Gebietsbetreuung
          </Typography>
          </Tooltip>
          <Typography variant="h6" className={classes.title}
           
          >
           {props.propUsername}
          </Typography>
          {auth && (
            <div>
                
                <Tooltip title="Account Information">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) =>{

return {
  propUsername : state.store.usernameLoginDummy
}

}


export default connect (mapStateToProps) (MenuAppBar)