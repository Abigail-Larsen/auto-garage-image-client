import React, { useState } from 'react'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { GetVote } from '../../../sharedQueries/queries'
import { Link } from 'react-router-dom'
import { Button, Paper, Typography, Modal } from '@material-ui/core'

import { Text } from '../voteType/text'
import { Toggle } from '../voteType/checkbox'
import { Percentage } from '../voteType/percentage'

import { useMutation } from '@apollo/react-hooks'
import { SEND_VOTE } from '../../../sharedQueries/mutations'

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  }
}
export const Vote = (props) => {
  const [mutateFunction, { data, loading, error }] = useMutation(SEND_VOTE)
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
      <Link to="/">
        <Button className={classes.button} variant="contained" color="primary">
          go home
        </Button>
      </Link>
    </Paper>
  )
  const sendAnsweredVote = async () => {
    mutateFunction({
      variables: {
        id: form?.id,
        answer: answer.toString(),
      },
    })
    setModal(true)
  }

  return (
    <Wrapper>
      {modal ? (
        <Modal
          open={modal}
          onClose={() => handleClose()}
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
          setForm(data?.getVote)
          return (
            <Paper className={classes.paper}>
              <Typography variant="h2">{data?.getVote.name}</Typography>

              <Typography variant="subtitle2">{data?.getVote.question}</Typography>

              {data?.getVote?.type === 'text' ? (
                <Text setAnswer={setAnswer} />
              ) : data?.getVote?.type === 'checkbox' ? (
                <Toggle setAnswer={setAnswer} />
              ) : (
                <Percentage setAnswer={setAnswer} />
              )}
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
    flexDirection: 'column',
  },
}))
