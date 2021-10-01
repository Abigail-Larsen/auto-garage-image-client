import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Input } from '@material-ui/core'
// import { GetVote } from '../queries/getVote'

export const Text = ({ vote, answer, setAnswer }) => {
  const classes = useStyles()
  return (
    <Input
      className={classes.input}
      type="text"
      placeholder="Type your answer here"
      inputProps={{ 'aria-label': 'answer' }}
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
    />
  )
}
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '30px',
    margin: '30px',
    width: '50%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '150px',
  },
  results: {
    height: '60vh',
    width: '100%',
    overflow: 'scroll',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
