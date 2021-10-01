import React from 'react'

import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

export const Modal = ({ setModal, vote }) => {
  const classes = useStyles()

  const deleteVote = () => {
    setModal(false)
    axios
      .post('/deleteVote', {
        vote: vote,
      })
      .then((res) => {
        console.log(res.status)
      })
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.modal}>
        <div>
          <Typography id="keep-mounted-modal-title" variant="h6">
            Are you sure you want to delete <b>{vote.name}</b> ?
          </Typography>
          <Typography id="keep-mounted-modal-description">This action is permanent</Typography>
        </div>

        <div>
          <Button variant="contained" color="primary" onClick={() => setModal(false)}>
            No, close this modal
          </Button>
          <Button variant="contained" color="error" onClick={() => deleteVote()}>
            DELETE
          </Button>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#757575',
    width: '100vw',
    height: '100vh',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    height: '40vh',
    backgroundColor: 'white',
    zIndex: 3,
    opacity: 1,
  },
}))
