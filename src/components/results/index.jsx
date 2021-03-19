import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Paper, Typography, Input } from '@material-ui/core'
import { GetVote } from './queries/getVote'

export const Results = (props) => {
  const classes = useStyles()
  console.log('Results props', props.match.params.id)
  return (
    <>
      <GetVote id={props.match.params.id}>
        {({ data, loading, error }) => {
          if (error) {
            return 'GetVote error'
          }
          if (loading) {
            return 'GetVote loading...'
          }
          console.log('GetVote data', data)
          return (
            <div>
              <Typography variant="h2">{data.getVote.name} Results</Typography>
              <Typography variant="body1">{data.getVote.description}</Typography>
              <Typography variant="body2">{data.getVote.question}</Typography>
              <div>
                {data?.getResults.map((i) => {
                  return (
                    <Paper className={classes.paper}>
                      <b>answer: </b>
                      {i.answer}
                    </Paper>
                  )
                })}
              </div>
            </div>
          )
        }}
      </GetVote>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '30px',
    margin: '30px',
    width: '50%',
  },
}))
