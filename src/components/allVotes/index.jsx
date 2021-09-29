import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Button } from '@material-ui/core'
import { GetAllVotes } from './queries'
import { Link } from 'react-router-dom'

export const AllVotes = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Typography variant="h2">
        <b>View all poll's:</b>
      </Typography>
      <div>
        <GetAllVotes>
          {(results) => {
            if (results.loading) {
              return <div>loading</div>
            }
            if (results.error) {
              return <div>error</div>
            }
            return (
              <>
                {results.data.map((i) => {
                  return (
                    <Paper className={classes.paper}>
                      <div className={classes.resultsGroup}>
                        <div className={classes.results}>
                          <Typography variant="h5" component="div">
                            Title:
                          </Typography>
                          <Typography variant="caption" component="div" className={classes.foo}>
                            {i.name}
                          </Typography>
                        </div>

                        <div className={classes.results}>
                          <Typography variant="h5" component="div">
                            Description:
                          </Typography>
                          <Typography variant="caption" component="div" className={classes.foo}>
                            {i.description}
                          </Typography>
                        </div>

                        <div className={classes.results}>
                          <Typography variant="h5" component="div">
                            Question:
                          </Typography>
                          <Typography variant="caption" component="div" className={classes.foo}>
                            {i.question}
                          </Typography>
                        </div>
                      </div>

                      <div className={classes.buttonGroup}>
                        <Link to={`vote/${i.id}`}>
                          <Button variant="contained" color="primary">
                            vote
                          </Button>
                        </Link>
                        <Link to={`results/${i.id}`}>
                          <Button variant="contained" color="primary">
                            see results
                          </Button>
                        </Link>
                      </div>
                    </Paper>
                  )
                })}
              </>
            )
          }}
        </GetAllVotes>
      </div>
    </div>
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
    alignItems:'start',
  },
  foo: {
    marginLeft: '50px',
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
    marginTop: '24px'
  },
}))
