import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import { Typography, List, Divider, Drawer, ListItem } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export const Header = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About The App', 'About Me'].map((text, index) => {
          const link = text.replace(/\s+/g, '')
          return (
            <Link to={link} key={index}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
              <Divider />
            </Link>
          )
        })}
      </List>
    </div>
  )

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                edge="start"
                className={classes.menuButton}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <Typography className={classes.txt} variant="h6">Anonymous voting system</Typography>
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
  txt: {
    textDecoration: 'none',
  },
  paper: {
    position: 'absolute',
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  list: {
    width: 'auto',
    textDecoration: 'none'
  },
}))
