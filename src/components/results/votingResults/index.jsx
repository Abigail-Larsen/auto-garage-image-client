import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { GetVote } from '../queries/getVote'
import { Text } from '../resultType/text'
import { Toggle } from '../resultType/toggle'
import { Percentage } from '../resultType/percentage'

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
            <div className={classes.text}>
              <Typography variant="h2">
                <b>{data.getVote.name}</b>
              </Typography>
              <Typography variant="body1">{data.getVote.question}</Typography>
            </div>
            <div className={classes.results}>
              {data.getVote.type === 'text' ? (
                <Text vote={data} />
              ) : data.getVote.type === 'checkbox' ? (
                <Toggle vote={data} />
              ) : (
                <Percentage vote={data} />
              )}
            </div>
          </div>
        )
      }}
    </GetVote>
  )
}

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginTop: '100px',
  },
  text: {
    marginLeft: '75px',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  results: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
