import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Button, Chip } from '@material-ui/core'
import { GetVoteCount } from '../../sharedQueries/queries'
import { Link } from 'react-router-dom'

export const SingleVote = ({ vote, setModal, setVote, setEditModal }) => {
  const [length, setLength] = useState(0)
  const classes = useStyles()

  const deleteVote = (e, vote) => {
    setModal(true)
    setVote(vote)
  }

  const editVote = (e, vote) => {
    setEditModal(true)
    setVote(vote)
  }

  return (
    <Paper className={classes.paper}>
      <GetVoteCount id={vote.id}>
        {(results) => {
          if (results.loading) {
            ;<div>loading</div>
          }
          setLength(results?.data?.length)
          return (
            <Chip
              color="info"
              label={`${length} ${length === 1 ? 'vote' : 'votes'}`}
              className={classes.chip}
            />
          )
        }}
      </GetVoteCount>
      <div className={classes.resultsGroup}>
        <div className={classes.results}>
          <Typography variant="h5" component="div">
            Title:
          </Typography>
          <Typography variant="caption" component="div" className={classes.foo}>
            {vote.name}
          </Typography>
        </div>

        <div className={classes.results}>
          <Typography variant="h5" component="div">
            Question:
          </Typography>
          <Typography variant="caption" component="div" className={classes.foo}>
            {vote.question}
          </Typography>
        </div>
      </div>

      <div className={classes.buttonGroup}>
        <Link to={`vote/${vote.id}`}>
          <Button variant="contained" color="primary">
            vote
          </Button>
        </Link>
        <Link to={`results/${vote.id}`}>
          <Button variant="contained" color="primary">
            see results
          </Button>
        </Link>
        <div className={classes.buttons}>
          <Button variant="contained" color="error" onClick={(e) => editVote(e, vote)}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={(e) => deleteVote(e, vote)}>
            DELETE
          </Button>
        </div>
      </div>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '100px',
  },
  paper: {
    padding: '24px',
    margin: '30px 15%',
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
  },
  results: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  foo: {
    marginLeft: '50px',
  },
  search: {
    margin: '24px',
    width: '70%',
  },
  resultsGroup: {
    flexGrow: '1',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'start',
  },
  buttonGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '35px',
  },
  chip: {
    position: 'absolute',
    right: '17%',
    backgroundColor: '#eeeeee',
    color: '#424242',
  },
  buttons: {
    width: '25%',
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
