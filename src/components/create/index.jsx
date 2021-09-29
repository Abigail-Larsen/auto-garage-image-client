import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import styled from '@emotion/styled'
import { makeStyles } from '@material-ui/core/styles'
import { Input, Typography, Paper, Button } from '@material-ui/core'

import randomWords from 'random-words'

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
}))

export const CreateAVote = () => {
  const [id, setId] = useState(uuidv4())
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [question, setQuestion] = useState('')
  const [form, setForm] = useState({})
  const classes = useStyles()

  const createTheVote = async () => {
    const Form = {
      id,
      keyword: await randomWords(),
      title,
      description,
      question,
      date: new Date().toDateString(),
    }
    setForm(Form)
    axios
      .post('/createNewVote', {
        newForm: Form,
      })
      .then((res) => {
        console.log('HIT THE RESPONSE', res)
      })
  }
  return (
    <Wrapper>
      <Typography variant="h2" gutterBottom>
        Create your vote to send out
      </Typography>

      <Paper className={classes.paper}>
        <Input
          className={classes.input}
          type="text"
          placeholder="Title of vote"
          inputProps={{ 'aria-label': 'Title' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          className={classes.input}
          type="text"
          placeholder="Description of Vote"
          inputProps={{ 'aria-label': 'Description of Vote' }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          className={classes.input}
          type="text"
          placeholder="Question"
          multiline
          label="Question"
          inputProps={{ 'aria-label': 'Question' }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </Paper>
      <Nav>
        <Link
          to={{
            pathname: `/completed/${id}`,
            state: { FORM: form },
          }}
        >
          <Button variant="contained" color="primary" onClick={() => createTheVote()}>
            Complete
          </Button>
        </Link>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.div`
  padding: 30px;
`
