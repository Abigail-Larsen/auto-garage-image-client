import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
// import { GetVote } from '../queries/getVote'

export const Results = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Typography variant="h2">
        <b>Your poll's:</b>
      </Typography>
      <div className={classes.results}>
        {/* {data?.getResults.map((i) => {
          return (
            <GetVote id={props.match.params.id}>
              {({ data, loading, error }) => {
                if (error) {
                  return 'GetVote error'
                }
                if (loading) {
                  return 'GetVote loading...'
                }
                console.log('RESSSSULTS', i, data)
                return (
                  <Paper className={classes.paper}>
                    <Typography variant="body1">POLL TO SEND </Typography>
                    {/* <Typography variant="body2">{data.getVote.question}</Typography> */}
        {/* </Paper> */}
        {/* ) */}
        {/* }} */}
        {/* </GetVote> */}
        {/* ) */}
        {/* })} */}
      </div>
    </div>
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
