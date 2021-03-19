import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Anonymous voting system</Typography>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fce4ec',
    color: '#616161',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyItems: 'flex-start',
    justifyContent: 'space-between',
  },
  paper: {
    position: 'absolute',
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
