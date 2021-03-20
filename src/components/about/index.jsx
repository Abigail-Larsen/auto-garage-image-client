import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styled from '@emotion/styled'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export const About = () => {
  const classes = useStyles()

  return (
    <Root>
        <br/>
        <Typography variant='h2'>ABOUT THE APP</Typography>
        <br/>
        <TextWrapper>

            <div>
                This Front End app was created with <b>React</b>, <b>Context</b>, <b>GraphQL</b>, and <b>Emotion</b> 
            </div>

            <div>
                The backend was created with <b>Node</b>, <b>Express</b>, and <b>GraphQL</b>
            </div>

            <div>
                The Data is stored in a <b>mySQL</b> db hosted by Heroku
            </div>
        </TextWrapper>
    </Root>
  )
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 30vh;
    justify-content: space-around;
`;


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
