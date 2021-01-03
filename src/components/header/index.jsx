import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import Modal from '@material-ui/core/Modal';
// import Menu from '@material-ui/icons/Menu';
// import SignIn from '../login/sign-in'
// import SignUp from '../login/sign-up'

export const Header = () => {
  const rootRef = React.useRef(null);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState('login');

    const handleOpen = (e) => {
      setModal(e)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
    <AppBar position="static" className={classes.root}>
      <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
             {/* Image Assemble */}
          </Typography>
          <Button onClick={(e) => handleOpen('login')} color="inherit">Login</Button>

          <Button onClick={() => handleOpen('signUp')} color="primary">Sign up</Button>
      </Toolbar>

      {/* <Modal
          open={open}
          onClose={handleClose}
          className={classes.modal}
          container={() => rootRef.current}
        >
          <div className={classes.paper}>
            {
              modal === 'login' ?
              <SignIn/> : 
              <SignUp/>
            } 
          </div>
        </Modal> */}

    </AppBar>
      </>
      
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#d1c4e9',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));