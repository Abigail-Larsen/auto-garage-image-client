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
            <Toolbar className={classes.toolbar}>
                <Typography variant="h7">
                  Anonymous Voting system
                </Typography>
                <div>
                  <Link to='/create'>
                    <Button onClick={(e) => handleOpen('create')} color="inherit">Create a Vote</Button>
                  </Link>
                  <Link to='/voteWithCode'>
                    <Button onClick={() => handleOpen('vote')} color="primary">Vote with CODE</Button>
                  </Link>
                </div>
            </Toolbar>
        </AppBar>
      </>
      
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#d1c4e9',
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
