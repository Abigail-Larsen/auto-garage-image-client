import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import { GetVote } from '../queries/getVote'

export const Results = (props) => {
  const classes = useStyles()
  return (
    <GetVote id={props.match.params.id}>
      {({ data, loading, error }) => {
        if (error) {
          return 'GetVote error'
        }
        if (loading) {
          return 'GetVote loading...'
        }
        return (
          <div className={classes.wrapper}>
            <Typography variant="h2">
              <b>Results for:</b>
              {data.getVote.name}
            </Typography>
            <Typography variant="body1">{data.getVote.description}</Typography>
            <Typography variant="body2">{data.getVote.question}</Typography>
            <div className={classes.results}>
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
