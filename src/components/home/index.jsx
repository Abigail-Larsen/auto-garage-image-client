import React from 'react';
import {
    Link
} from "react-router-dom";
import styled from '@emotion/styled'
import {
    Typography,
    Button
} from '@material-ui/core';
import Vote from '../../assets/vote.jpeg';

export const Home = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <img src={Vote} alt='vote'/>
            </TopWrapper>

            <Nav>
                <HeaderWrapper>
                    <Typography variant='h2'>
                        Anonymous Voting 
                    </Typography>

                    <Typography variant='subtitle1'>
                        The young women of today, free to study, to speak, to write, to choose their occupation, should remember that every inch of this freedom was bought for them at a great price. It is for them to show their gratitude by helping onward the reforms of their own times, by spreading the light of freedom and of truth still wider. The debt that each generation owes to the past it must pay to the future
                    </Typography>
                </HeaderWrapper>
                <NavTwo>
                    <Link to='/create'>
                        <Button variant="contained" color='primary'>CREATE</Button>
                    </Link>

                    <Link to='/'>
                        <Button variant="contained" color='primary'>See results of a vote</Button>
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
    height: 80%;
`;

const TopWrapper = styled.div`
    height:100%;
    margin-left: 30px;
`;


const HeaderWrapper = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;


const Nav = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height:60%;
`;

const NavTwo = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    height:100%;
`;