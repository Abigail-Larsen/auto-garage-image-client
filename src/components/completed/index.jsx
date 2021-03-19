import React from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import styled from '@emotion/styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    Typography,
    Button
} from '@material-ui/core';
import { GetKeyword } from './queries';
import Voted from '../../assets/voted.jpeg'

export const Completed = (props) => {
    console.log("this'", props)


    return (
        <GetKeyword id={props.match.params.id}>
            {({data, loading, error}) => {
                if(error){
                    return 'error'
                }
                if(loading){
                    return 'loading...'
                }
                console.log("data',", data.getKeyword)
                return (
                    <Wrapper>
                        <img src={Voted} alt='you voted'/>
                        <TextWrapper>
                            <Typography variant="h4">
                                Congrats! You created your very own poll! 
                            </Typography>
                            <Typography variant="body">
                                Your keyword for your vote is:  
                                <b> {data.getKeyword}</b>
                            </Typography>

                            <CopyToClipboard text={`https://auto-garage-image-client.herokuapp.com/vote/${props.match.params.id}`}>
                                <Button 
                                    variant="contained" 
                                    color='primary' 
                                >
                                    Click to copy vote to keyboard
                                </Button>
                            </CopyToClipboard>

                            <Link to={`/results/${props.match.params.id}`}>
                                <Button 
                                    variant="contained" 
                                    color='primary' 
                                >
                                    Save this link to see results of a poll
                                </Button>
                            </Link>

                            <Link to={`/vote/${props.match.params.id}`}>
                                <Button variant="contained" color='primary'>Click to go to poll</Button>
                            </Link>
                        </TextWrapper>
                    </Wrapper>
                )
            }}
        </GetKeyword>
    )
}

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    color: #424242;
    height: 80%;
`;

const TextWrapper = styled.div`
    padding: 30px;
    display: flex;
    height:30%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 9;
`;