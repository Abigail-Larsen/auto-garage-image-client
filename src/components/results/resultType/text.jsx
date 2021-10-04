import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'

export const Text = ({ vote }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.container} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {vote?.getResults?.map((i) => {
        return (
          <Grid item xs={2} sm={4} md={4} key={i}>
            <Paper className={classes.paper}>answer: {i.answer}</Paper>
          </Grid>
        )
      })}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: '80%',
  },
  paper: {
    padding: '10px',
    textAlign: 'center',
  },
}))
