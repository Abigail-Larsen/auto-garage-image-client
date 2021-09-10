import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Abigail from '../../assets/Abigail.jpg'
import Typography from '@material-ui/core/Typography'
import styled from '@emotion/styled'

export const AboutMe = () => {
  const classes = useStyles()

  return (
    <Root>
      <Header>
        <img width="90%" src={Abigail} />
      </Header>
      <TxtWrapper>
        <Typography className={classes.txt} variant="h3">
          Hi, my names Abigail
        </Typography>
        <ul className={classes.txtItem}>
          <li className={classes.listItem}>
            <Typography variant="body1">
              I am currently a software engineer at Adobe in Lehi Utah working in their business
              cloud.
            </Typography>
          </li>
          <li className={classes.listItem}>
            <Typography variant="body1">
              I started working at Overstock as a software engineer in 2015
            </Typography>
          </li>
          <li className={classes.listItem}>
            <Typography variant="body1">
              I enjoy embroidery, knitting, python, and Diet Coke
            </Typography>
          </li>
          <li className={classes.listItem}>
            <Typography variant="body1">
              I am currently enrolled at UVU in their web design degree
            </Typography>
          </li>
          <li className={classes.listItem}>
            <Typography variant="body1">I went to Dev Mountain in 2015</Typography>
          </li>
        </ul>
      </TxtWrapper>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  padding: 50px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const TxtWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const useStyles = makeStyles((theme) => ({
  txt: {
    color: '#616161',
    textAlign: 'left',
  },
  txtItem: {
    textAlign: 'left',
  },

  listItem: {
    marginTop: '15px',
  },
}))
