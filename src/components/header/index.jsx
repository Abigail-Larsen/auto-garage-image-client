import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {
  const rootRef = React.useRef(null);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState('create');

    const handleOpen = (e) => {
      setModal(e)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        {/* <Modal
          open={open}
          onClose={handleClose}
          className={classes.modal}
          container={() => rootRef.current}
          >
          <div className={classes.paper}>
              {
              modal === 'create' ?
              <div>create a vote</div> : 
              <div>vote with a code</div>
              } 
          </div>
        </Modal> */}
        <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="#fce4ec" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="#fce4ec">
            Annonomas voting system
          </Typography>
        </Toolbar>
        </AppBar>
      </>
      
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fce4ec',
    color: '#616161',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyItems:'flex-start',
    justifyContent: 'space-between',
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
