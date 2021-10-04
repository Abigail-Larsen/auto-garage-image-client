import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Abigail from '../../assets/Abigail.jpg'
import Typography from '@material-ui/core/Typography'
import styled from '@emotion/styled'
// import ImageGallery from 'react-image-gallery'
// import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'

const srcUrl = 'https://raw.githubusercontent.com/yabbbb/auto-garage-image-client/main/src/assets'

const images = [
  {
    original: 'https://picsum.photos/id/1018/250/150/',
    description: 'Render custom slides (such as videos)',
    originalHeight: '500px',
    // thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: `${srcUrl}/Abigail.jpg`,
    description: 'Render custom slides (such as videos)',
    originalHeight: '500px',
    // thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
]

export const AboutMe = () => {
  const classes = useStyles()

  return (
    <Root>
      <Header>
        <img height="100%" src={Abigail} />
        {/* <ImageGallery items={images} showBullets={true} showNav={true} /> */}
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
  margin-top: 75px;
  padding: 50px;
  height: 80vh;
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
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
