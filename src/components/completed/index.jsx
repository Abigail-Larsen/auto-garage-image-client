import React from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import styled from '@emotion/styled'
import {
    Typography,
    Button
} from '@material-ui/core';
import { GetKeyword } from './queries';

export const Completed = (props) => {
    console.log("this'", props.match.params.id)


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
                        <TextWrapper>
                            <Typography variant="h4">
                                Completed!
                            </Typography>

                            <Typography variant="h6">
                                Your keyword is 
                                <b> {data.getKeyword}</b>
                            </Typography>

                            <Link to={`/vote/${props.match.params.id}`}>
                                <Button variant="contained" color='primary' >Click to copy vote to keyboard</Button>
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