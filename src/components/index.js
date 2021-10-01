import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from '@emotion/styled'
import AppAppBar from './header/AppBar'
import { Home } from './home'
import { CreateAVote } from './create'
import { Vote } from './voteWithCode/vote/index'
import { Completed } from './completed'
import { Results } from './results/votingResults/index'
import { About } from './about/index'
import { AboutMe } from './about/aboutMe'
import { AllVotes } from './allVotes'

export const Root = () => {
  return (
    <RootComponent className="rootComponent">
      <Router>
        <Link to="/">
          <AppAppBar />
        </Link>

        <BodyWrapper className="BodyWrapper">
          <Switch>
            <Route path="/create">
              <CreateAVote />
            </Route>
            <Route path="/completed/:id" render={(routeProps) => <Completed {...routeProps} />} />

            <Route path="/vote/:id" render={(routeProps) => <Vote {...routeProps} />} />

            <Route path="/AboutTheApp">
              <About />
            </Route>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>

            <Route path="/allVotes">
              <AllVotes />
            </Route>

            <Route path="/results/:id" render={(routeProps) => <Results {...routeProps} />} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BodyWrapper>
      </Router>
    </RootComponent>
  )
}

const RootComponent = styled.div`
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(#d7dbe5, #f9f6f7);
  display: flex;
  flex-direction: column;
`
const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
`
