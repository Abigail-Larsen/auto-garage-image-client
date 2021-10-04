import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Input } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { EDIT_VOTE } from '../../sharedQueries/mutations'

export const EditModal = ({ setEditModal, vote }) => {
  const [title, setTitle] = useState(vote.name)
  const [question, setQuestion] = useState(vote.question)
  const [mutateFunction, { data, loading, error }] = useMutation(EDIT_VOTE)
  const classes = useStyles()

  const updateModal = () => {
    mutateFunction({
      variables: {
        id: vote.id,
        name: title,
        question: question,
        date: vote.date,
        type: vote.type,
      },
    })
    setEditModal(false)
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.modal}>
        <div>
          <Typography id="keep-mounted-modal-title" variant="h6">
            Editing <b>{vote.name}</b> ?
          </Typography>
        </div>

        <div className={classes.content}>
          <Input
            className={classes.input}
            type="text"
            placeholder="Title of vote"
            inputProps={{ 'aria-label': 'Title' }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
          />
          <Input
            label="Question"
            className={classes.input}
            type="text"
            placeholder="Title of vote"
            inputProps={{ 'aria-label': 'Title' }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <div className={classes.buttons}>
          <Button variant="contained" color="primary" onClick={() => setEditModal(false)}>
            No, I don't want to edit
          </Button>

          <Link to="/">
            <Button variant="contained" color="error" onClick={() => updateModal()}>
              Update
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
    padding: '30px',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
