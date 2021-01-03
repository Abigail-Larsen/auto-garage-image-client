import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from '@emotion/styled'
// import { Header } from './header'
// import {Home} from './home';
// import { ImageUploadCard } from './upload';
// import { Sorting } from './sorting'
// import { SortedPictures } from './sorted';
  
export const Root = () => {
    return (
        <RootComponent>
            {/* <Header/> */}
            <Router>
                <Switch>
                    {/* <Route path="/upload">
                        <ImageUploadCard/>
                    </Route>
                    <Route path="/sorted">
                        <SortedPictures/>
                    </Route>
                    <Route path="/sorting">
                        <Sorting />
                    </Route> */}
                    <Route path="/">
                        <div>hey</div>
                    </Route>
                </Switch>
            </Router>
        </RootComponent>
    )
}

const RootComponent = styled.div`
    height: 100vh;
    background-color: #ede7f6;
`;
