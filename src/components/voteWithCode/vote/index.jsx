import React, { useState } from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { GetVote } from '../queries'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Paper, Typography, Input, Modal } from '@material-ui/core'
function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}
export const Vote = (props) => {
  const [modal, setModal] = useState(false)
  const [answer, setAnswer] = useState('')
  const [form, setForm] = useState({})
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)

  const handleClose = () => {
    setModal(false)
  }

  const body = (
    <Paper style={modalStyle} className={classes.modalpaper}>
      <h2>You voted successfully!</h2>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => handleClose()}
      >
        Vote again
      </Button>
      <Link to="/">
        <Button className={classes.button} variant="contained" color="primary">
          go home
        </Button>
      </Link>
    </Paper>
  )
  const sendAnsweredVote = async () => {
    axios
      .post('/postResponseToVote', {
        id: form.id,
        keyword: form.keyword,
        answer,
      })
      .then((res) => {
        if (res.status === 200) {
          setAnswer('')
          setModal(true)
        }
      })
  }

  return (
    <Wrapper>
      {modal ? (
        <Modal
          open={false}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      ) : null}
      <GetVote id={props.match.params.id}>
        {({ data, loading, error }) => {
          if (error) {
            return 'error'
          }
          if (loading) {
            return 'loading...'
          }
          setForm(data)
          return (
            <Paper className={classes.paper}>
              <Typography variant="h2">{data?.getVote?.name}</Typography>

              <Typography variant="subtitle2">{data?.getVote?.description}</Typography>

              <Typography variant="subtitle2">{data?.question}</Typography>

              <Input
                className={classes.input}
                type="text"
                placeholder="Type your answer here"
                inputProps={{ 'aria-label': 'answer' }}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Paper>
          )
        }}
      </GetVote>

      <ButtonWrapper>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => sendAnsweredVote()}
        >
          Send your VOTE
        </Button>
        <Link to="/">
          <Button className={classes.button} variant="contained" color="primary">
            home
          </Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px',
  },
  input: {
    margin: '30px',
    width: '80%',
  },
  button: {
    margin: '15px',
  },
  modalpaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
