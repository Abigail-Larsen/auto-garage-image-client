import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import styled from '@emotion/styled'
import { PhotoCollage } from './photoCollage'

const srcUrl = 'https://raw.githubusercontent.com/yabbbb/auto-garage-image-client/main/src/assets'

export const AboutMe = () => {
  const classes = useStyles()

  return (
    <Root>
      <Header>
        <PhotoCollage />
      </Header>
      <TxtWrapper>
        <Typography className={classes.txt} variant="h3">
          Hi, my names Abigail
        </Typography>
        <ul className={classes.txtItem}>
          <li className={classes.listItem}>
            <Typography variant="body1">
              I am currently a software engineer at Adobe in Lehi Utah working in their Experience
              cloud.
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
            <Typography variant="body1">
              I started working as a full stack engineer in 2016
            </Typography>
          </li>
        </ul>
      </TxtWrapper>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  width: 100%;
  height: 90vh;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

const TxtWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
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
