import React from 'react'
import styled from '@emotion/styled'
import Typography from '@material-ui/core/Typography'

export const About = () => {
  return (
    <Root>
      <br />
      <Typography variant="h2">ABOUT THE APP</Typography>
      <br />
      <TextWrapper>
        <div>
          This Front End app was created with <b>React</b>, <b>Context</b>, <b>GraphQL</b>, and{' '}
          <b>Emotion</b>
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
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 30vh;
  justify-content: space-around;
`
