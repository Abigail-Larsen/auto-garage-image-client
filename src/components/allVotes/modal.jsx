import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_VOTE } from '../../sharedQueries/mutations'

export const Modal = ({ setModal, vote }) => {
  const [mutateFunction, { data, loading, error }] = useMutation(DELETE_VOTE)
  const classes = useStyles()

  const deleteVote = () => {
    setModal(false)
    mutateFunction({
      variables: {
        id: vote?.id,
      },
    })
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.modal}>
        <div className={classes.text}>
          <Typography id="keep-mounted-modal-title" variant="h6">
            Are you sure you want to delete <b>{vote.name}</b> ?
          </Typography>
          <Typography id="keep-mounted-modal-description">This action is permanent</Typography>
        </div>

        <div>
          <Button variant="contained" color="primary" onClick={() => setModal(false)}>
            No, close this modal
          </Button>

          <Link to="/">
            <Button variant="contained" color="error" onClick={() => deleteVote()}>
              DELETE
            </Button>
          </Link>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '20px',
  },
  text: {
    flexGrow: 0.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}))
