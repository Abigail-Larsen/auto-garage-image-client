import React from "react";
import { GetVote } from '../queries';
import axios from 'axios'
import {
  Link
} from "react-router-dom";
import {
    Button,
    Paper,
    Typography
} from "@material-ui/core";

export const Vote = (props) => {
    const sendVote = () => {
        axios.post('/postResponseToVote', {
            vote: 'i voted'
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
                    return (
                        <Paper>
                            <Typography variant='h2'>
                                {data.getVote.name}
                            </Typography>

                            <Typography variant='subtitle2'>
                                {data.getVote.description}
                            </Typography>
                        </Paper>
                    )
                }}
            </GetVote>
                <Button onClick={() => sendVote()}>
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
