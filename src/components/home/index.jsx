import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'

import Card from '@material-ui/core/Card'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 275,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export const Home = () => {
  const classes = useStyles()
  return (
    <Wrapper>
      <Nav>
        <HeaderWrapper>
          <Typography variant="h2">Create an Anonymous Poll</Typography>
        </HeaderWrapper>
        <NavTwo>
          <Link to="/create">
            <Card className={classes.root}>Create a new poll</Card>
          </Link>
          <Link to="/allVotes">
            <Card className={classes.root}>See a list of all the polls</Card>
          </Link>
        </NavTwo>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  color: #424242;
  margin-top: 100px;
`

const HeaderWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 100px;
`

const Nav = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`

const NavTwo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`
