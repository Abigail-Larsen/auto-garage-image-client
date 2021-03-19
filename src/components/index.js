import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from '@emotion/styled'
import { Header } from './header'
import { Home } from './home';
import { CreateAVote } from './create';
import { VoteWithCode } from './voteWithCode';
import { Vote } from './voteWithCode/vote/index';
import { Completed } from './completed';
import { ResultsWithCode } from './results/resultsWithCode';
import { Results } from './results/index';

  
export const Root = () => {
    return (
        <RootComponent>
            <Router>
                <Link to='/'>
                    <Header/>
                </Link>
                <Switch>
                    <Route path="/create">
                        <CreateAVote/>
                    </Route>
                    <Route 
                        path="/completed/:id"       
                        render={routeProps => (
                            <Completed {...routeProps} />
                        )}
                    />

                    <Route path="/voteWithCode">
                         <VoteWithCode />
                    </Route>
                    <Route 
                        path="/vote/:id"                        
                        render={routeProps => (
                            <Vote {...routeProps} />
                        )}
                    />


                    <Route path="/resultsWithCode">
                         <ResultsWithCode />
                    </Route>
                    <Route 
                        path="/results/:id"                        
                        render={routeProps => (
                            <Results {...routeProps} />
                        )}
                    />
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </RootComponent>
    )
}

const RootComponent = styled.div`
    height: 100vh;
    background-color:#ffebee;
`;
