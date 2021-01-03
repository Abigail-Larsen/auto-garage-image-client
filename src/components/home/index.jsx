import React from 'react';
import {
    Link
} from "react-router-dom";
import styled from '@emotion/styled'
import {
    Typography,
    Button
} from '@material-ui/core';

export const Home = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <Typography variant="h4">
                    Hate sorting through your pictures?
                </Typography>

                <Link to='/upload'>
                    <Button variant="contained" color='primary'>Choose your photos</Button>
                </Link>
            </TextWrapper>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #673ab7;
    height: 80%;
`;

const TextWrapper = styled.div`
    display: flex;
    height:70%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 9;
`;