import React, { useState } from "react";
import { GetVote } from '../queries';
import axios from 'axios'
import {
  Link
} from "react-router-dom";
import {
    Button,
    Paper,
    Typography,
    Input
} from "@material-ui/core";

export const Vote = (props) => {
    const [ answer, setAnswer ] = useState('');
    const [ form, setForm ] = useState({});

    const sendAnsweredVote = async () => {
        axios.post('/postResponseToVote', {
            id: form.id,
            keyword: form.keyword,
            answer
        }).then(res => {
            console.log('HIT THE RESPONSE', res);
        })
    }
    return (
        <>
            <GetVote id={props.match.params.id}>
                {({data, loading, error}) => {
                    if(error){
                        return 'error'
                    }
                    if(loading){
                        return 'loading...'
                    }
                    setForm(data.getVote)
                    return (
                        <Paper>
                            <Typography variant='h2'>
                                {data?.getVote?.name}
                            </Typography>

                            <Typography variant='subtitle2'>
                                {data?.getVote?.description}
                            </Typography>

                            <Typography variant='subtitle2'>
                                {data?.getVote?.question}
                            </Typography>

                            <Input
                                type="text" 
                                placeholder="Type your answer here" 
                                inputProps={{ 'aria-label': 'answer' }} 
                                value={answer} 
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        </Paper>
                    )
                }}
            </GetVote>
                <Button onClick={() => sendAnsweredVote()}>
                    Send your VOTE
                </Button>
            <Link to='/'>
                <Button>
                    home
                </Button>
            </Link>
        </>
    );
}
