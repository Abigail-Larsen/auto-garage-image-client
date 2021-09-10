import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import { Link as RoutingLink } from 'react-router-dom'
import AppBar from './AppAppBar'
import Toolbar from '@material-ui/core/Toolbar'

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: 'white',
    textDecoration: 'none',
  },
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: '#2c2a2a',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
    textDecoration: 'underline',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    textDecoration: 'none',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    textDecoration: 'none',
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
})

function AppAppBar(props) {
  const { classes } = props

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <RoutingLink to="/" className={classes.title}>
            <Link variant="h6" color="inherit">
              {'Auto Garage Client'}
            </Link>
          </RoutingLink>
          <div className={classes.right}>
            <RoutingLink
              to="/AboutTheApp"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              <Link color="inherit" variant="h6" underline="none" className={classes.rightLink}>
                {'About the App'}
              </Link>
            </RoutingLink>
            <RoutingLink to="/AboutMe" className={clsx(classes.rightLink, classes.linkSecondary)}>
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}
              >
                {'About Me'}
              </Link>
            </RoutingLink>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  )
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppAppBar)
